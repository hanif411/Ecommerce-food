"use client";
import OrderError from "@/components/order/OrderError";
import OrderLoading from "@/components/order/OrderLoading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { orderService } from "@/services/orderService";
import { Order, OrderItemDetail } from "@/types/order";
import { formatDate } from "@/utils/formatDate";
import { formatOrderStatus } from "@/utils/formatOrderStatus";
import { formatPaymentStatus } from "@/utils/formatPaymentStatus";
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
      {orderItems?.map((order: Order) => {
        const { textPayment, classNamePayment } = formatPaymentStatus(
          order.paymentStatus
        );
        const { paymentDate, paymentHour } = formatDate(order.createdAt);
        const { textOrder, classNameOrder } = formatOrderStatus(
          order.orderStatus
        );
        return (
          <Card key={order._id} className="max-w-sm">
            <CardHeader>
              <div className="flex justify-between">
                <CardTitle>Order {order._id.substring(0, 10)}</CardTitle>
                <span
                  className={`text-xs px-2 py-1 rounded-md ${classNameOrder}`}>
                  {textOrder}
                </span>
              </div>
              <div className="flex justify-between">
                <p>
                  {paymentDate} {paymentHour}
                </p>
                <span
                  className={`text-xs px-2 py-1 rounded-md ${classNamePayment}`}>
                  {textPayment}
                </span>
              </div>
            </CardHeader>
            {order.itemsdetail.map((item: OrderItemDetail) => (
              <CardContent className="flex w-full gap-2" key={item._id}>
                <div className="w-15 h-15 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={item.productimage}
                    alt=""
                    className=" rounded-md w-full h-full object-cover"
                  />
                </div>
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
            <CardContent className="flex justify-between">
              <div>
                <h3>Total Amount</h3>
                <h1>{formatPrice(order.total)}</h1>
              </div>
              <div className="flex flex-col">
                <Button>Detail</Button>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default OrderPage;
