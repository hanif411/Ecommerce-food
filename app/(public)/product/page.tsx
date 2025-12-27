"use client";
import { ProductCard } from "@/components/product/ProductCard";
import ProductError from "@/components/product/ProductError";
import ProductLoading from "@/components/product/ProductLoading";
import { useProductData } from "@/hooks/useProductData";
import { useCartStore } from "@/store/useCartStore";
import { useRouter } from "next/navigation";

function productPage() {
  const router = useRouter();
  const addItem = useCartStore((state) => state.addItem);
  const { data: products, isLoading, isError, refetch } = useProductData();

  if (isLoading) {
    return <ProductLoading />;
  }
  if (isError) {
    return <ProductError refetch={refetch} />;
  }

  return (
    <>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 max-w-md xl:max-w-6xl mx-auto px-4 my-6">
        {products.slice(0, 8).map((product: any) => (
          <ProductCard
            key={product._id}
            product={product}
            onAddToCart={addItem}
            quantity={1}
            onClick={() => router.push(`/product/${product._id}`)}
          />
        ))}
      </div>
    </>
  );
}

export default productPage;
