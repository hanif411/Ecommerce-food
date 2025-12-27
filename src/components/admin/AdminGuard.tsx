"use client";
import { userService } from "@/services/userService";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function AdminGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { data: user, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: userService.getUser,
  });

  useEffect(() => {
    if (!isLoading) {
      if (!user || (user.role !== "admin" && user.role !== "owner")) {
        router.push("/");
      }
    }
  }, [user, isLoading, router]);
  if(isLoading){
    
  }
  if (user?.role === "owner" || user?.role === "admin") {
    return <>{children}</>;
  }

  return null;
}

export default AdminGuard;
