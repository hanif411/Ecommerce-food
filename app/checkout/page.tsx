"use client";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/store/useCartStore";
import { formatPrice } from "@/utils/formatPrice";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Script from "next/script";
import { useCheckout } from "@/hooks/useCheckout";

declare global {
  interface Window {
    snap: any;
  }
}

function CheckoutPage() {
  const handleCheckout = useCheckout();
  const cartStore = useCartStore();

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <form onSubmit={handleCheckout}>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-2/3 rounded-xl border-2 p-6 space-y-6">
              <h3 className="text-xl font-semibold mb-4">
                Delivery Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="First Name"
                    className="bg-gray-100"
                    name="firstName"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Last Name (optional)"
                    className="bg-gray-100"
                    name="lastName"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  className="bg-gray-100"
                  name="email"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="0812..."
                  className="bg-gray-100"
                  required
                />
              </div>
            </div>

            <div className="w-full md:w-1/3 rounded-xl border-2 p-6 h-fit">
              <h3 className="text-xl font-semibold mb-4">Order Details</h3>
              <div className="bg-muted/30 rounded-lg p-4 space-y-4">
                {cartStore.items.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground line-clamp-1">
                      {item.nameproduct}{" "}
                      <span className="text-xs">× {item.quantity}</span>
                    </span>
                    <span className="font-medium">
                      {formatPrice(item.priceproduct * item.quantity)}
                    </span>
                  </div>
                ))}

                <Separator />

                <div className="flex items-center justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-primary">
                    {formatPrice(cartStore.getTotalPrice())}
                  </span>
                </div>
                <Button className="w-full mt-4" type="submit">
                  Proceed to Payment
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <Script
        src="https://app.sandbox.midtrans.com/snap/snap.js"
        data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
        strategy="afterInteractive"
      />
    </>
  );
}

export default CheckoutPage;
