import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/product";
import { formatPrice } from "@/utils/formatPrice";
import { useState } from "react";
import { EditProductModal } from "./EditProductModal";
import { EditProductSheet } from "./EditProductSheet";

export function ProductDesktopTable({ products }: { products: Product[] }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <Card className="hidden md:block border-none shadow-sm">
      <CardContent className="p-0">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="w-[350px]">Description</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product._id} className="group">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img
                      src={product.imageproduct}
                      alt=""
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-medium line-clamp-1">
                        {product.nameproduct}
                      </p>
                      <p className="text-[10px] text-muted-foreground font-mono">
                        {product._id}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="font-normal">
                    {product.categoryproduct}
                  </Badge>
                </TableCell>
                <TableCell className="font-semibold">
                  {formatPrice(product.priceproduct)}
                </TableCell>
                <TableCell className="max-w-[350px]">
                  <div
                    className="cursor-pointer"
                    onClick={() =>
                      setExpandedId(
                        expandedId === product._id ? null : product._id
                      )
                    }>
                    <p
                      className={`text-sm text-muted-foreground transition-all duration-300 ${
                        expandedId === product._id
                          ? "whitespace-normal"
                          : "line-clamp-1"
                      }`}>
                      {product.descriptionproduct}
                    </p>
                    <span className="text-[10px] text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      {expandedId === product._id
                        ? "Klik untuk tutup"
                        : "Klik untuk detail..."}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    className={
                      product.stokproduct < 10
                        ? "bg-red-100 text-red-600 shadow-none"
                        : "bg-green-100 text-green-600 shadow-none"
                    }>
                    {product.stokproduct}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <EditProductSheet product={product} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
