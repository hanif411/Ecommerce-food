"use client";
import {
  LogOut,
  Menu,
  Home,
  UtensilsCrossed,
  ClipboardList,
  ShieldCheck,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { useRouter, usePathname } from "next/navigation";
import { useLogout } from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { userService } from "@/services/userService";
import { Separator } from "../ui/separator";

function MenuNavbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { handleLogout, isLoading: isLoggingOut } = useLogout();

  const { data: user } = useQuery({
    queryKey: ["profile"],
    queryFn: userService.getUser,
  });

  const menuItems = [
    { id: "/", label: "Home", icon: Home },
    { id: "/product", label: "Menu", icon: UtensilsCrossed },
    { id: "/order", label: "My Orders", icon: ClipboardList },
  ];

  // Tambahkan menu Admin/Owner jika role sesuai
  if (user?.role === "admin" || user?.role === "owner") {
    menuItems.push({
      id: "/admin/product",
      label: "Admin Dashboard",
      icon: ShieldCheck,
    });
  }

  return (
    <Sheet>
      <SheetTrigger asChild className="">
        <Menu />
      </SheetTrigger>

      <SheetContent side="right" className="w-72 p-0 flex flex-col">
        {/* Header Profil User */}
        <SheetHeader className="p-6 text-left bg-muted/30">
          <SheetTitle className="text-primary italic font-bold">
            Bolu Delight
          </SheetTitle>
          <div className="mt-4 flex flex-col">
            <span className="text-sm font-semibold text-foreground uppercase tracking-wider">
              {user?.name || "Guest User"}
            </span>
            <span className="text-xs text-muted-foreground truncate">
              {user?.email || "Welcome back!"}
            </span>
          </div>
        </SheetHeader>

        <Separator />

        {/* Navigasi Menu Utama */}
        <nav className="flex flex-col gap-2 p-4 flex-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.id;
            return (
              <Button
                key={item.id}
                variant={isActive ? "default" : "ghost"}
                className="w-full justify-start gap-4 h-11"
                onClick={() => router.push(item.id)}>
                <item.icon
                  className={`h-5 w-5 ${
                    isActive
                      ? "text-primary-foreground"
                      : "text-muted-foreground"
                  }`}
                />
                <span className="font-medium">{item.label}</span>
              </Button>
            );
          })}
        </nav>

        {/* Footer Logout */}
        <div className="p-4 mt-auto">
          <Separator className="mb-4" />
          <Button
            variant="ghost"
            disabled={isLoggingOut}
            onClick={handleLogout}
            className="w-full justify-start text-destructive hover:bg-destructive/10 hover:text-destructive gap-4 h-11">
            <LogOut className="h-5 w-5" />
            <span className="font-bold">Log Out</span>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MenuNavbar;
