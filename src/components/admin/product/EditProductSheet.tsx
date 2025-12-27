"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ProductForm } from "./ProductForm";
import { Product } from "@/types/product";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function EditProductSheet({ product }: { product?: Product }) {
  const [open, setOpen] = useState(false);
  const isAddMode = !product;
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {isAddMode ? (
          <Button className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 font-bold">
            <Plus className="mr-2 h-4 w-4" />
            Product
          </Button>
        ) : (
          <Button className="text-sm font-bold">Edit</Button>
        )}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-[540px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Edit Produk</SheetTitle>
        </SheetHeader>
        <ProductForm product={product} onSuccess={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  );
}
