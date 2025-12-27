import { orderService } from "@/services/orderService";
import { userService } from "@/services/userService";
import { useCartStore } from "@/store/useCartStore";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { toast } from "sonner";

export const useCheckout = () => {
  const cartStore = useCartStore();
  const router = useRouter();

  const { data: user } = useQuery({
    queryKey: ["profile"],
    queryFn: userService.getUser,
    retry: false,
  });

  const mutation = useMutation({
    mutationFn: orderService.createOrder,
    onSuccess(data) {
      const token = data.token;
      if (window.snap) {
        window.snap.pay(token, {
          onSuccess: function () {
            router.push("/order");
            toast.success("Berhasil Order");
          },
          onPending: function () {
            toast.info("Finish your payment");
          },
          onError: function () {
            toast.error("payment failed!");
            router.push("/order");
          },
          onClose: function () {
            toast.info("you closed the popup without finishing the payment");
            router.push("/order");
          },
        });
      }
    },
  });

  const handleCheckout = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) {
      toast.error("Silahkan login terlebih dahulu untuk melakukan checkout");
      router.push("/login");
      return; 
    }

    const formdata = new FormData(e.currentTarget);
    const data = Object.fromEntries(formdata);

    const finalPayload = {
      ...data,
      cartItem: cartStore.items.map((item) => ({
        product: item._id,
        quantity: item.quantity,
      })),
    };
    mutation.mutate(finalPayload);
    cartStore.clearCart();
  };
  return handleCheckout;
};
