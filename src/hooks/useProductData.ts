import { productServices } from "@/services/productService";
import { useQuery } from "@tanstack/react-query";

export const useProductData = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: productServices.getAll,
    staleTime: 1000 * 60 * 5,
  });
};
