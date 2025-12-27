import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/product";
import { formatPrice } from "@/utils/formatPrice";
import { Edit2 } from "lucide-react";
import { EditProductSheet } from "./EditProductSheet";

export function ProductMobileList({ products }: { products: Product[] }) {
  return (
    <div className="md:hidden space-y-4 pb-10">
      {products.map((product) => (
        <Card
          key={product._id}
          className="overflow-hidden border-none shadow-sm">
          <CardContent className="p-4">
            <div className="flex gap-4">
              <img
                src={product.imageproduct}
                alt=""
                className="w-24 h-24 rounded-xl object-cover"
              />
              <div className="flex-1 space-y-2">
                <div>
                  <div className="flex justify-between items-start">
                    <p className="font-bold text-lg leading-tight">
                      {product.nameproduct}
                    </p>
                    <Badge variant="outline" className="text-[10px]">
                      {product.categoryproduct}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-1 max-w-sm">
                    {product.descriptionproduct}
                  </p>
                </div>

                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-sm font-black text-primary">
                      {formatPrice(product.priceproduct)}
                    </p>
                    <p
                      className={`text-[10px] font-bold ${
                        product.stokproduct < 10
                          ? "text-red-500"
                          : "text-green-600"
                      }`}>
                      Stok: {product.stokproduct} unit
                    </p>
                  </div>
                  <EditProductSheet product={product} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
