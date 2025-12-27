"use client";
import { formatPrice } from "@/utils/formatPrice";
import { ChevronLeft, Heart, ShoppingCart, Star } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { productServices } from "@/services/productService";
import { useCartStore } from "@/store/useCartStore";
import ProductDetailLoading from "@/components/product/ProductDetailLoading";
import { useProductDetail } from "@/hooks/useProductDetail";

function ProductDetailpage() {
  const { id } = useParams();
  const router = useRouter();
  const addItem = useCartStore((state) => state.addItem);
  
  const {
    product,
    isLoading,
    isError,
    quantity,
    handleDecrement,
    handleIncrement,
  } = useProductDetail(id as string);

  if (isLoading) return <ProductDetailLoading />;

  if (isError || !product)
    return <div className="p-10 text-center">Produk tidak ditemukan, bro.</div>;

  return (
    <>
      <div className="min-h-screen pb-30 max-w-6xl px-4 mx-auto">
        {/* Hero Image */}
        <div className="relative h-[300px] md:h-[400px] ">
          <img
            src={product?.imageproduct}
            alt={product?.nameproduct}
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => router.push("/product")}
            className="p-2 bg-white rounded-full top-4 left-4 absolute">
            <ChevronLeft />
          </button>
          <button className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
            <Heart />
          </button>
        </div>

        {/* Product Info */}
        <div className=" mt-4 mx-2">
          <div className="flex items-start justify-between mb-3">
            <div className="">
              <h2 className="md:text-4xl text-xl font-medium mb-2">
                {product?.nameproduct}
              </h2>
              <p className="text-[#e95322] md:text-4xl text-xl font-bold">
                {formatPrice(product?.priceproduct as number)}
              </p>
            </div>
            <div className="flex items-center gap-1 rounded-full px-3  py-1">
              <Star
                fill="#f5cb58"
                stroke=""
                className="md:w-10 w-7 md:h-10 h-7"
              />
              <span className="font-medium md:text-4xl text-xl">5</span>
            </div>
          </div>

          <div className="border-t border-[#f5f5f5] pt-4 mb-4">
            <h3 className="text-[#391713] font-medium mb-2">Description</h3>
            <p className="text-[#676767] text-[14px] leading-relaxed">
              {product?.descriptionproduct}
            </p>
          </div>

          <div className="border-t border-[#f5f5f5] pt-4">
            <h3 className="text-[#391713] font-medium mb-3">Quantity</h3>
            <div className="flex items-center gap-4">
              <button
                onClick={handleDecrement}
                className="bg-[#f5f5f5] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#e5e5e5] transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="#391713"
                  strokeWidth="2"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 12H4"
                  />
                </svg>
              </button>
              <span className="text-[#391713] text-[20px] font-medium w-12 text-center">
                {quantity}
              </span>
              <button
                onClick={handleIncrement}
                className="bg-[#e95322] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#d14719] transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 flex justify-center w-full py-4 shadow-lg md:pb-4 z-30">
          <button
            onClick={() => addItem(product, quantity)}
            className=" bg-[#e95322] text-center w-fit text-white px-6 py-4 rounded-full font-medium text-[16px] hover:bg-[#d14719] transition-colors flex items-center justify-center gap-2">
            <ShoppingCart />
            Add to Cart • {formatPrice(product?.priceproduct! * quantity)}
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductDetailpage;
