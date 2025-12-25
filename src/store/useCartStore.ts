import { Product } from "@/types/product";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItems extends Product {
  quantity: number;
}

export interface CartState {
  items: CartItems[];
  addItem: (product: Product, quantity: number) => void;
  removeItem: (product: Product) => void;
  increaseQuantity: (product: Product) => void;
  decreaseQuantity: (product: Product) => void;
  getTotalPrice: () => number;
  clearCart: () => void;
  //   subTotal: number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, quantity) => {
        const currentItems = get().items;
        const existingProduct = currentItems.find(
          (item) => item._id === product._id
        );
        if (existingProduct) {
          set({
            items: currentItems.map((item) =>
              item._id == product._id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          });
        } else {
          set({
            items: [...currentItems, { ...product, quantity }],
          });
        }
      },
      removeItem: (product) => {
        const currentItems = get().items;
        set({ items: currentItems.filter((item) => item._id !== product._id) });
      },
      increaseQuantity: (product) => {
        const currentItems = get().items;
        set({
          items: currentItems.map((item) =>
            item._id === product._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        });
      },
      decreaseQuantity: (product) => {
        const currentItems = get().items;
        set({
          items: currentItems.map((item) =>
            item._id === product._id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        });
      },
      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.priceproduct * item.quantity,
          0
        );
      },
      clearCart: () => {
        set({ items: [] });
      },
    }),
    { name: "cart" }
  )
);
