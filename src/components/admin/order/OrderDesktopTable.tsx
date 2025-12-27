import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Order } from "@/types/order";
import { formatPrice } from "@/utils/formatPrice";
import { formatDate } from "@/utils/formatDate";
import { formatPaymentStatus } from "@/utils/formatPaymentStatus";
import { formatOrderStatus } from "@/utils/formatOrderStatus";
import { OrderStatusAction } from "./OrderStatusAction";

interface OrderDesktopTableProps {
  orders: Order[];
}

export function OrderDesktopTable({ orders }: OrderDesktopTableProps) {
  return (
    <Card className="hidden md:block border-none shadow-sm">
      <CardContent className="p-0">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow>
              <TableHead className="w-[120px]">Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead>Order Status</TableHead>
              <TableHead className="text-right">Total Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="h-32 text-center text-muted-foreground">
                  No orders found.
                </TableCell>
              </TableRow>
            ) : (
              orders.map((order) => {
                const { textPayment, classNamePayment } = formatPaymentStatus(
                  order.paymentStatus
                );
                const { paymentDate, paymentHour } = formatDate(
                  order.createdAt
                );

                return (
                  <TableRow
                    key={order._id}
                    className="hover:bg-muted/30 transition-colors">
                    <TableCell className="font-mono text-[11px] font-bold">
                      #{order._id.substring(0, 10).toUpperCase()}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">
                          {order.firstName} {order.lastName}
                        </span>
                        <span className="text-[10px] text-muted-foreground">
                          {order.email}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col text-sm">
                        <span>{paymentDate}</span>
                        <span className="text-xs text-muted-foreground">
                          {paymentHour}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={`${classNamePayment} border-none font-bold`}>
                        {textPayment}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <OrderStatusAction
                        orderId={order._id}
                        currentStatus={order.orderStatus}
                      />
                    </TableCell>
                    <TableCell className="text-right font-bold text-primary">
                      {formatPrice(order.total)}
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
