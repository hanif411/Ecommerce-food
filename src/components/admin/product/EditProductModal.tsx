"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ProductForm } from "./ProductForm";
import { Product } from "@/types/product";
import { useState } from "react";

export function EditProductModal({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-sm font-bold text-blue-600 hover:underline">
          Edit Modal
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Edit Produk</DialogTitle>
        </DialogHeader>
        <ProductForm product={product} onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
