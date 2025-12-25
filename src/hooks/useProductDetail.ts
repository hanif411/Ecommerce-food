import { productServices } from "@/services/productService";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const useProductDetail = (id: string) => {
  const [quantity, setQuantity] = useState<number>(0);
  const query = useQuery({
    queryKey: ["product", id],
    queryFn: () => productServices.getById(id),
    enabled: !!id,
  });

  const handleIncrement = () => {
    if (quantity < query.data.stockproduct) setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };
  return {
    product: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    quantity,
    handleDecrement,
    handleIncrement,
  };
};
