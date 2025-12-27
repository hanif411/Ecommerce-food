"use client";
import { useRouter } from "next/navigation";
import { CartDrawer } from "../cart/CartDrawer";
import { useCartStore } from "@/store/useCartStore";
import MenuNavbar from "./MenuNavbar";

function Navbar() {
  const router = useRouter();
  const items = useCartStore((state) => state.items);

  return (
    <>
      <header className="bg-card sticky top-0 z-10 border-b border-border py-2">
        <div className="max-w-md xl:max-w-6xl mx-auto flex items-center  px-4 justify-between">
          <div
            onClick={() => router.push("/")}
            className="hover:cursor-pointer">
            <h1 className="text-primary">Bolu Delight</h1>
            <p className="text-sm text-muted-foreground">
              Premium Bakery & Cakes
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative p-1">
              <CartDrawer cartItems={items} />
              {items.length > 0 && (
                <p className="absolute -top-2 -right-2 h-4 w-4 rounded-full  text-white flex items-center justify-center bg-red-600">
                  {items.length}
                </p>
              )}
            </div>
            <MenuNavbar />
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
