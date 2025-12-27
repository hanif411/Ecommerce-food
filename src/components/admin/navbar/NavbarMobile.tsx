"use client";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, LogOut, Package, ShoppingCart, Home } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";

const menuItems = [
  { id: "/", label: "Home", icon: Home },
  { id: "/admin/product", label: "Product", icon: Package },
  { id: "/admin/order", label: "Order", icon: ShoppingCart },
];

export function NavbarMobile() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="md:hidden flex items-center justify-between p-4 border-b bg-card sticky top-0 z-50">
      <h1 className="font-bold text-primary italic">Bolu Delight</h1>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72 p-0">
          <SheetHeader className="p-6 text-left">
            <SheetTitle className="text-primary">Admin Menu</SheetTitle>
          </SheetHeader>

          <nav className="flex flex-col gap-2 px-4">
            {menuItems.map((item) => {
              const isActive = pathname === item.id;
              return (
                <Button
                  key={item.id}
                  variant={isActive ? "default" : "ghost"}
                  className="w-full justify-start gap-3"
                  onClick={() => router.push(item.id)}>
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Button>
              );
            })}
          </nav>

          <div className="absolute bottom-4 left-0 right-0 px-4">
            <Separator className="mb-4" />
            <Button
              variant="ghost"
              className="w-full justify-start text-destructive hover:bg-destructive/10 gap-3">
              <LogOut className="h-4 w-4" />
              Log Out
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
