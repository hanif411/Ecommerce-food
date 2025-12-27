"use client";
import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";
import HomeLoading from "@/components/home/HomeLoading";
import HomeError from "@/components/home/HomeError";
import { useProductData } from "@/hooks/useProductData";

export default function Home() {
  const router = useRouter();
  const addItem = useCartStore((state) => state.addItem);
  const { data: products, isLoading, isError, refetch } = useProductData();

  if (isLoading) return <HomeLoading />;
  if (isError) return <HomeError refetch={refetch} />;

  return (
    <div className="min-h-screen">
      <div className="max-w-md xl:max-w-6xl mx-auto px-4">
        <div className="mt-4 relative rounded-xl overflow-hidden h-48 xl:h-96 bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1627308592814-f88b68f7b4a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lzcyUyMHJvbGwlMjBjYWtlfGVufDF8fHx8MTc2NjM5NTU2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Bolu Gulung Special"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <Button className="mb-2 bg-amber-600">Special Promo</Button>
            <h2 className="text-white mb-1">Bolu Gulung Special</h2>
            <p className="text-sm text-white/90 mb-2">
              Get 20% off on our signature roll cake!
            </p>
            <Button
              size="sm"
              className="bg-white text-amber-600 hover:bg-white/90"
              onClick={() => router.push("product")}>
              Order Now
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between my-4">
          <h2 className="text-[#391713] text-[20px] font-medium">
            Recommended
          </h2>
          <button
            onClick={() => router.push("/product")}
            className="flex items-center gap-1 text-[#e95322] text-[12px]">
            View All
            <ChevronRight className="w-5 h-5 " />
          </button>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 mb-12">
          {products.slice(0, 4).map((product: any) => (
            <ProductCard
              key={product._id}
              product={product}
              quantity={1}
              onAddToCart={addItem}
              onClick={() => router.push(`/product/${product._id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
