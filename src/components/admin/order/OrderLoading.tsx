import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

function OrderLoading() {
  return (
    <div className="space-y-6 xl:ms-6">
      <div className="space-y-2">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-4 w-64" />
      </div>
      <div className="flex gap-3">
        <Skeleton className="h-10 flex-1" />
        <Skeleton className="h-10 w-[180px]" />
      </div>
      <Card>
        <CardContent className="p-0">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-16 w-full border-b" />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export default OrderLoading;
