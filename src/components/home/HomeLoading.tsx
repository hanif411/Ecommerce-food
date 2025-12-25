import { Skeleton } from "../ui/skeleton";

function HomeLoading() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Skeleton className="h-48 xl:h-96 w-full rounded-xl mb-8" />
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="space-y-2 mt-8">
            <Skeleton className="h-40 w-full rounded-lg" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeLoading;
