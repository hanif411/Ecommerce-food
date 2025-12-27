import { Product } from "@/types/product";

const BASEURL = "https://be-ecommerce-navy.vercel.app/api/v1";
export interface CartItem extends Product {
  quantity: number;
}

type formChekout = {
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  cartItem: CartItem[];
};

export const orderService = {
  createOrder: async (formData: any) => {
    const response = await fetch(`${BASEURL}/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      credentials: "include",
    });
    const data = await response.json();
    if (!response.ok) throw new Error("Gagal membuat order");
    return data;
  },
  getOrderUser: async () => {
    const response = await fetch(`${BASEURL}/order/current/user`, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await response.json();
    return data.data;
  },
  getAllOrder: async () => {
    const response = await fetch(`${BASEURL}/order`, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await response.json();
    return data.data;
  },
  updateStatus: async (id: string, orderStatus: string) => {
    const response = await fetch(`${BASEURL}/order/status/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ orderStatus }),
    });
    if (!response.ok) throw new Error("Gagal update status");
    return response.json();
  },
};
