"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useLogout } from "@/hooks/useAuth";
import { Home, Package, ShoppingCart, LogOut } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

const menuItems = [
  { id: "/", label: "Home", icon: Home },
  { id: "/admin/product", label: "Product", icon: Package },
  { id: "/admin/order", label: "Order", icon: ShoppingCart },
];

export function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { handleLogout } = useLogout();

  return (
    <div className="hidden md:flex flex-col bg-card border-r border-border w-64 min-h-screen lg:fixed lg:left-0 lg:top-0 lg:bottom-0">
      <div className="p-6">
        <h1 className="font-bold text-primary italic">Bolu Delight</h1>
        <p className="text-xs text-muted-foreground mt-1">Admin Dashboard</p>
      </div>

      <Separator className="mb-4" />

      <nav className="flex flex-col gap-2 px-4 flex-1">
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

      <div className="p-4">
        <Separator className="mb-4" />
        <Button
          variant="ghost"
          onClick={handleLogout}
          className="w-full justify-start text-destructive hover:bg-destructive/10 gap-3">
          <LogOut className="h-4 w-4" />
          Log Out
        </Button>
      </div>
    </div>
  );
}
