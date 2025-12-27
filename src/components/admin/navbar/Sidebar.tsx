"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useLogout } from "@/hooks/useAuth";
import { Home, Package, ShoppingCart, Settings, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const menuItems = [
  { id: "/", label: "Home" },
  { id: "product", label: "Product" },
  { id: "order", label: "Order" },
];

export function Sidebar() {
  const router = useRouter();
  const { handleLogout } = useLogout();
  return (
    <div className="hidden md:flex flex-col bg-card border-r border-border w-64 min-h-screen lg:fixed lg:left-0 lg:top-0 lg:bottom-0 ">
      <div className="p-6">
        <h1 className="text-primary">Bolu Delight</h1>
        <p className="text-sm text-muted-foreground mt-1">Admin Dashboard</p>
      </div>

      <Separator />

      <nav className="flex p-4 space-y-1 gap-2 flex-col">
        {menuItems.map((item) => {
          return (
            <Button
              key={item.id}
              className="w-full justify-start bg-primary text-primary-foreground"
              onClick={() => router.push(item.id)}>
              {item.label}
            </Button>
          );
        })}
      </nav>

      <Separator />

      <div className="p-4">
        <Button
          variant="ghost"
          onClick={handleLogout}
          className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10">
          <LogOut className="mr-3 h-5 w-5" />
          Log Out
        </Button>
      </div>
    </div>
  );
}
