import { LogOut, Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useLogout } from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { userService } from "@/services/userService";

function MenuNavbar() {
  const router = useRouter();
  const { handleLogout, isLoading } = useLogout();
  const { data: user, isLoading: LoadingUser } = useQuery({
    queryKey: ["profile"],
    queryFn: userService.getUser,
  });
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>

        <SheetContent className="">
          <SheetHeader>
            <div className="p-6">
              <h1 className="text-primary">Bolu Delight</h1>
              <p className="text-sm text-muted-foreground mt-1">{user?.name}</p>
            </div>
          </SheetHeader>
          <div className="flex flex-col gap-4 w-fit mx-auto px-10">
            <Button onClick={() => router.push("/")} className="px-10">
              Home
            </Button>
            <Button onClick={() => router.push("/product")}>Menu</Button>
            <Button onClick={() => router.push("/order")}>Order</Button>
            {user?.role === "admin" ||
              (user?.role === "owner" && (
                <Button onClick={() => router.push("/admin/product")}>
                  Admin
                </Button>
              ))}
          </div>
          <SheetFooter>
            <SheetClose>
              <Button
                variant="ghost"
                onClick={handleLogout}
                className="w-full text-destructive hover:text-destructive hover:bg-destructive/10">
                <LogOut className="mr-3 h-5 w-5" />
                Log Out
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default MenuNavbar;
