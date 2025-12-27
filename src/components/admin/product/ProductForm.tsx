"use client";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { productServices } from "@/services/productService";
import { toast } from "sonner";
import { useState } from "react";
import { ImagePlus, Loader2 } from "lucide-react";

interface ProductFormProps {
  product?: Product;
  onSuccess: () => void;
}
export function ProductForm({ product, onSuccess }: ProductFormProps) {
  const queryClient = useQueryClient();
  const isEdit = !!product;
  const [imageUrl, setImageUrl] = useState<string>(product?.imageproduct || "");
  const [isUploading, setIsUploading] = useState(false);

  const mutation = useMutation({
    mutationFn: (data: Partial<Product>) => {
      return isEdit
        ? productServices.update(product._id, data)
        : productServices.create(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success(isEdit ? "Produk diupdate!" : "Produk ditambah!");
      onSuccess();
    },
    onError: () => toast.error("Ada masalah, coba lagi bro."),
  });
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);
      const uploadedUrl = await productServices.uploadImage(file);
      setImageUrl(uploadedUrl);
      toast.success("Gambar berhasil diupload!");
    } catch (error) {
      toast.error("Gagal upload gambar");
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!imageUrl) return toast.error("Upload gambar dulu dong");
    const rawData = Object.fromEntries(new FormData(e.currentTarget));
    const payload = {
      ...rawData,
      priceproduct: Number(rawData.priceproduct),
      stokproduct: Number(rawData.stokproduct),
      imageproduct: imageUrl,
    };
    mutation.mutate(payload);
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4 mx-6">
      <div className="space-y-2">
        <Label>Product Image</Label>
        <div className="flex flex-col items-center justify-center rounded-xl hover:bg-muted/50 transition-colors relative">
          {imageUrl ? (
            <div className="relative group">
              <img
                src={imageUrl}
                alt="Preview"
                className="w-full h-40 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                <p className="text-white text-xs font-bold">Ganti Gambar</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center py-4">
              <ImagePlus className="h-10 w-10 text-muted-foreground mb-2" />
              <p className="text-xs text-muted-foreground text-center">
                Click or drag to upload image
              </p>
            </div>
          )}
          <Input
            type="file"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={handleFileChange}
            accept="image/*"
            disabled={isUploading}
          />
          {isUploading && (
            <div className="absolute inset-0 bg-white/80 flex items-center justify-center rounded-xl">
              <Loader2 className="animate-spin text-primary" />
            </div>
          )}
        </div>
      </div>
      <div className="space-y-2">
        <Label>Name Product</Label>
        <Input defaultValue={product?.nameproduct} name="nameproduct" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Price</Label>
          <Input
            type="number"
            name="priceproduct"
            defaultValue={product?.priceproduct}
          />
        </div>
        <div className="space-y-2">
          <Label>Stock</Label>
          <Input
            type="number"
            name="stokproduct"
            defaultValue={product?.stokproduct}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label>Category</Label>
        <Input defaultValue={product?.categoryproduct} name="categoryproduct" />
      </div>
      <div className="space-y-2">
        <Label>Description</Label>
        <Textarea
          className="h-32"
          name="descriptionproduct"
          defaultValue={product?.descriptionproduct}
        />
      </div>
      <Button
        type="submit"
        className="w-full font-bold"
        disabled={mutation.isPending}>
        {mutation.isPending
          ? "Processing..."
          : isEdit
          ? "Update Product"
          : "Create Product"}
      </Button>
    </form>
  );
}