"use client";
import { ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

function OrderEmpty() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="bg-muted rounded-full p-6 mb-4">
        <ShoppingBag className="w-12 h-12 text-muted-foreground" />
      </div>
      <h3 className="text-xl font-bold">Belum Ada Pesanan</h3>
      <p className="text-muted-foreground mt-2 max-w-sm">
        Sepertinya kamu belum memesan bolu apapun. Ayo cek menu kami dan temukan
        bolu favoritmu!
      </p>
      <Button asChild className="mt-6">
        <Link href="/product">Lihat Menu Sekarang</Link>
      </Button>
    </div>
  );
}

export default OrderEmpty;
