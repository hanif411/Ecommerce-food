"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { orderService } from "@/services/orderService";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function OrderStatusAction({
  orderId,
  currentStatus,
}: {
  orderId: string;
  currentStatus: string;
}) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newStatus: string) =>
      orderService.updateStatus(orderId, newStatus),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      toast.success("Order status updated!");
    },
    onError: () => toast.error("Failed to update status"),
  });

  return (
    <Select
      defaultValue={currentStatus}
      onValueChange={(value) => mutation.mutate(value)}
      disabled={mutation.isPending}>
      <SelectTrigger className="w-[130px] h-8 text-[11px] font-bold uppercase border-none shadow-none bg-muted/50">
        <SelectValue placeholder="Status" />
      </SelectTrigger>
      <SelectContent defaultValue={currentStatus}>
        <SelectItem value="pending">Pending</SelectItem>
        <SelectItem value="processing">Processing</SelectItem>
        <SelectItem value="completed">Completed</SelectItem>
        <SelectItem value="cancelled">Cancelled</SelectItem>
      </SelectContent>
    </Select>
  );
}
