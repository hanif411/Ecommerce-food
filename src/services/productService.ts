import { Product } from "@/types/product";

const BASEURL = "http://localhost:3000/api/v1";

export const productServices = {
  getAll: async () => {
    const response = await fetch(`${BASEURL}/product`);
    const data = await response.json();
    return data.data;
  },
  getById: async (id: string) => {
    const response = await fetch(`${BASEURL}/product/${id}`);
    const data = await response.json();
    return data.data;
  },
  update: async (id: string, payload: Partial<Product>) => {
    const response = await fetch(`${BASEURL}/product/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error("Gagal update produk");
    return response.json();
  },
  create: async (payload: Partial<Product>) => {
    const response = await fetch(`${BASEURL}/product`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error("Gagal tambah produk");
    return response.json();
  },
  uploadImage: async (file: File) => {
    const formData = new FormData();
    formData.append("image", file); 
    const response = await fetch(`${BASEURL}/product/file-upload`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("Gagal upload gambar");
    const result = await response.json();
    return result.secure_url; 
  },
};
