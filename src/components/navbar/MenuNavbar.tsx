import { Menu } from "lucide-react";
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

function MenuNavbar() {
  const router = useRouter();
  const { handleLogout, isLoading } = useLogout();
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader></SheetHeader>
          <div className="flex flex-col gap-4 mt-20 w-full ms-5">
            <Button variant={"outline"} onClick={() => router.push("/")}>
              Home
            </Button>
            <Button variant={"outline"} onClick={() => router.push("/product")}>
              Menu
            </Button>
            <Button variant={"outline"} onClick={() => router.push("/order")}>
              Order
            </Button>
          </div>
          <SheetFooter>
            <SheetClose>
              <Button
                variant={"outline"}
                onClick={handleLogout}
                disabled={isLoading}
                className="text-end"
                >
                {isLoading ? "Logging out..." : "Log Out"}
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default MenuNavbar;
