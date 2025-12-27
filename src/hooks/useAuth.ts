import { userService } from "@/services/userService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export const useLogin = () => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: userService.login,
    onSuccess: (userData: any) => {
      if (userData.role === "admin" || userData.role === "owner") {
        router.push("/admin/product");
      } else {
        router.push("/");
      }
      router.refresh();
    },
  });

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData);

    mutation.mutate(payload);
  };
  return { handleLogin, mutation };
};

export const useLogout = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: userService.logout,
    onSuccess: () => {
      queryClient.clear();
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      router.push("/login");
      router.refresh();
    },
  });
  const handleLogout = () => {
    mutation.mutate();
  };
  return { handleLogout, isLoading: mutation.isPending };
};
