"use client";
import { OrderDesktopTable } from "@/components/admin/order/OrderDesktopTable";
import OrderError from "@/components/admin/order/OrderError";
import { OrderHeader } from "@/components/admin/order/OrderHeader";
import OrderLoading from "@/components/admin/order/OrderLoading";
import { OrderMobileList } from "@/components/admin/order/OrderMobileList";
import { orderService } from "@/services/orderService";
import { Order } from "@/types/order";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function OrderPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const {
    data: orders,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: orderService.getAllOrder,
  });

  const filteredOrders = orders?.filter((order: Order) => {
    const matchesSearch =
      order._id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      `${order.firstName} ${order.lastName}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || order.orderStatus === statusFilter;
    return matchesSearch && matchesStatus;
  });

  if (isLoading) return <OrderLoading />;
  if (isError) return <OrderError />;

  return (
    <div className="space-y-6 xl:ms-6 p-4">
      <OrderHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />
      <OrderDesktopTable orders={filteredOrders || []} />
      <OrderMobileList orders={filteredOrders || []} />
    </div>
  );
}
