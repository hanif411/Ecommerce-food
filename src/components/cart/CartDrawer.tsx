import { Product } from "@/types/product";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { formatPrice } from "@/utils/formatPrice";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";

export interface CartItem extends Product {
  quantity: number;
}

interface CartDrawerProps {
  cartItems: CartItem[];
  // onUpdateQuantity: (productId: string, newQuantity: number) => void;
  // onCheckout: () => void;
}

export function CartDrawer({
  cartItems,
}: // onUpdateQuantity,
// onCheckout,
CartDrawerProps) {
  const cartStore = useCartStore();
  const router = useRouter();
  return (
    <Sheet>
      <SheetTrigger>
        <ShoppingCart className="h-5 w-5" />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md p-0 flex flex-col">
        <SheetHeader className="p-4 border-b border-border">
          <div className="flex items-center justify-between">
            <SheetTitle>Shopping Cart</SheetTitle>
          </div>
        </SheetHeader>

        {cartItems.length === 0 ? (
          <div className="flex-1 flex items-center justify-center text-center p-6">
            <div>
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="mb-2">Your cart is empty</h3>
              <p className="text-muted-foreground">
                Add some delicious items to get started!
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex gap-3 bg-muted/30 rounded-lg p-3">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.imageproduct}
                      alt={item.nameproduct}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="line-clamp-2 mb-1">{item.nameproduct}</h4>
                    <p className="text-primary mb-2">
                      {formatPrice(item.priceproduct)}
                    </p>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => cartStore.decreaseQuantity(item)}
                        disabled={item.quantity <= 1}>
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-sm min-w-[2ch] text-center">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => cartStore.increaseQuantity(item)}>
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 ml-auto text-destructive"
                        onClick={() => cartStore.removeItem(item)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border p-4 space-y-3">
              <div className="flex items-center justify-between mb-3">
                <span>Subtotal</span>
                <span>{formatPrice(cartStore.getTotalPrice())}</span>
              </div>
              <SheetClose className="w-full">
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => router.push("/checkout")}>
                  Checkout
                </Button>
              </SheetClose>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
