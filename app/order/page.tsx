"use client";
import OrderError from "@/components/order/OrderError";
import OrderLoading from "@/components/order/OrderLoading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { orderService } from "@/services/orderService";
import { Order, OrderItemDetail } from "@/types/order";
import { formatPrice } from "@/utils/formatPrice";
import { useQuery } from "@tanstack/react-query";

function OrderPage() {
  const {
    data: orderItems,
    isLoading,
    isError,
    refetch,
  } = useQuery<Order[]>({
    queryKey: ["orderUser"],
    queryFn: orderService.getOrderUser,
  });

  if (isLoading) return <OrderLoading />;
  if (isError) return <OrderError refetch={refetch} />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto gap-4 pt-5 px-4">
      {orderItems?.map((order: Order) => (
        <Card key={order._id} className="max-w-sm">
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle>Order {order._id.substring(0, 10)}</CardTitle>
              <CardTitle>{order.status}</CardTitle>
            </div>
          </CardHeader>
          {order.itemsdetail.map((item: OrderItemDetail) => (
            <CardContent className="flex w-full gap-2" key={item._id}>
              <img src={item.productimage} alt="" className="w-10 rounded-md" />
              <div className="w-full">
                <p>{item.productname}</p>
                <p>Qty: {item.productquantity}</p>
              </div>
              <h1 className="text-end w-full">
                {formatPrice(item.productprice)}
              </h1>
            </CardContent>
          ))}
          <Separator />
          <CardContent>
            <h3>Total Amount</h3>
            <div className="flex justify-between">
              <h1>{formatPrice(order.total)}</h1>
              <Button>Detail</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default OrderPage;
