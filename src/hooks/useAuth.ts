import { userService } from "@/services/userService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export const useLogin = () => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: userService.login,
    onSuccess: () => {
      router.push("/");
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

  const mutation = useMutation({
    mutationFn: userService.logout,
    onSuccess: () => {
      router.push("/login");
      router.refresh();
    },
  });
  const handleLogout = () => {
    mutation.mutate();
  };
  return { handleLogout, isLoading: mutation.isPending };
};
