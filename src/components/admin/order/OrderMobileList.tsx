import { OrderMobileCard } from "./OrderMobileCard";
import { Order } from "@/types/order";

export function OrderMobileList({ orders }: { orders: Order[] }) {
  return (
    <div className="md:hidden flex flex-col ">
      {orders.length === 0 ? (
        <div className="text-center p-12 border-2 border-dashed rounded-2xl text-muted-foreground bg-muted/10">
          Pesanan tidak ditemukan
        </div>
      ) : (
        orders.map((order) => (
          <OrderMobileCard key={order._id} order={order} />
        ))
      )}
    </div>
  );
}