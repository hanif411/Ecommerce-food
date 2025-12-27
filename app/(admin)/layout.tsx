"use client";
import AdminGuard from "@/components/admin/AdminGuard";
import { NavbarMobile } from "@/components/admin/navbar/NavbarMobile";
import { Sidebar } from "@/components/admin/navbar/Sidebar";

import { useRouter } from "next/navigation";
import React from "react";
const menuItems = [
  { id: "dashboard", label: "Dashboard" },
  { id: "product", label: "Product" },
  { id: "order", label: "Order" },
  { id: "/", label: "Home" },
];

function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <AdminGuard>
      <div className="flex min-h-screen bg-muted/20">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <NavbarMobile />

          <main className="flex-1 p-4 md:p-8 lg:pl-72 transition-all">
            {children}
          </main>
        </div>
      </div>
    </AdminGuard>
  );
}

export default AdminLayout;
