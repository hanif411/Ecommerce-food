"use client";
import { useState } from "react";
import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useProductData } from "@/hooks/useProductData";
import { Product } from "@/types/product";

import OrderError from "@/components/admin/order/OrderError";
import ProductLoading from "@/components/admin/product/ProductLoading";
import { ProductDesktopTable } from "@/components/admin/product/ProductDesktopTable";
import { ProductMobileList } from "@/components/admin/product/ProductMobileList";
import { EditProductSheet } from "@/components/admin/product/EditProductSheet";

export default function ProductPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: products, isLoading, isError, refetch } = useProductData();
  const filteredProducts = products?.filter((product: Product) =>
    product.nameproduct.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) return <ProductLoading />;
  if (isError) return <OrderError refetch={refetch} />;

  return (
    <div className="space-y-6 xl:ms-6 p-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Catalog Product</h2>
          <p className="text-muted-foreground">
            Manage your product
          </p>
        </div>
        <EditProductSheet />
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Cari nama produk..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-9 bg-background border-none shadow-sm focus-visible:ring-primary"
        />
      </div>

      <ProductDesktopTable products={filteredProducts || []} />
      <ProductMobileList products={filteredProducts || []} />
    </div>
  );
}
