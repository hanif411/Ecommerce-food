import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Order } from "@/types/order";
import { formatPrice } from "@/utils/formatPrice";
import { formatDate } from "@/utils/formatDate";
import { formatPaymentStatus } from "@/utils/formatPaymentStatus";
import { User, Calendar } from "lucide-react";
import { OrderStatusAction } from "./OrderStatusAction";

export function OrderMobileCard({ order }: { order: Order }) {
  const { textPayment, classNamePayment } = formatPaymentStatus(
    order.paymentStatus
  );
  const { paymentDate, paymentHour } = formatDate(order.createdAt);
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <span className="font-mono text-xs font-bold text-primary">
            #{order._id.substring(0, 10).toUpperCase()}
          </span>
          <OrderStatusAction
            orderId={order._id}
            currentStatus={order.orderStatus}
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <User className="h-4 w-4 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold uppercase tracking-tight">
              {order.firstName} {order.lastName}
            </span>
            <span className="text-xs text-muted-foreground">{order.email}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 py-2 border-y border-dashed">
          <div className="flex items-center gap-2">
            <Calendar className="h-3 w-3 text-muted-foreground" />
            <div className="flex flex-col">
              <span className="text-[10px] text-muted-foreground leading-none">
                Date & Time
              </span>
              <span className="text-xs font-medium">
                {paymentDate} {paymentHour}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex flex-col text-right ml-auto">
              <span className="text-[10px] text-muted-foreground leading-none">
                Payment
              </span>
              <Badge
                variant="outline"
                className={`${classNamePayment} border-none p-0 h-fit text-xs font-bold`}>
                {textPayment}
              </Badge>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1">
          <div>
            <p className="text-[10px] text-muted-foreground uppercase font-bold">
              Total
            </p>
            <p className="text-lg font-black text-primary leading-none">
              {formatPrice(order.total)}
            </p>
          </div>
          <Button size="sm" className="rounded-full px-5 font-bold">
            Detail
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
