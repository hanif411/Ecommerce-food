import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

function OrderLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto gap-6 pt-5 px-4">
      {[1, 2, 3].map((i) => (
        <Card key={i} className="max-w-sm overflow-hidden">
          <CardHeader className="flex flex-row justify-between">
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-6 w-16 rounded-full" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3">
              <Skeleton className="h-12 w-12 rounded-md" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
            <div className="pt-4 border-t space-y-2">
              <Skeleton className="h-4 w-20" />
              <div className="flex justify-between">
                <Skeleton className="h-8 w-24" />
                <Skeleton className="h-9 w-20 rounded-md" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default OrderLoading;
