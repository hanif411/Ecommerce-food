import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { formatPrice } from "@/utils/formatPrice";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  quantity: number
  onAddToCart: (product: Product, quantity: number) => void;
  onClick?: () => void;
}

export function ProductCard({
  product,
  quantity,
  onAddToCart,
  onClick,
}: ProductCardProps) {
  return (
    <div className="bg-card rounded-lg overflow-hidden border border-border shadow-sm">
      <div
        className="aspect-square overflow-hidden cursor-pointer"
        onClick={onClick}>
        <img
          src={product.imageproduct}
          alt={product.nameproduct}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-3">
        <h3 className="mb-1 line-clamp-2 cursor-pointer" onClick={onClick}>
          {product.nameproduct}
        </h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-primary">
            {formatPrice(product.priceproduct)}
          </span>
          <Button
            size="icon"
            className="h-8 w-8 rounded-full bg-primary hover:bg-primary/90"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product, quantity);
            }}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
