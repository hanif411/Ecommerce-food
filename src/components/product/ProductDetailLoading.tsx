import { Skeleton } from "../ui/skeleton";

function ProductDetailLoading() {
  return (
    <div className="max-w-6xl px-4 mx-auto space-y-6 mt-4">
      <Skeleton className="h-[300px] md:h-[400px] w-full rounded-xl" />
      <div className="flex justify-between">
        <div className="space-y-2 w-1/2">
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-6 w-1/2" />
        </div>
        <Skeleton className="h-10 w-16 rounded-full" />
      </div>
      <Skeleton className="h-32 w-full" />
    </div>
  );
}

export default ProductDetailLoading;
