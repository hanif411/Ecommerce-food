import { AlertCircle } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

function OrderError({ refetch }: { refetch: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="bg-red-50 p-4 rounded-full mb-4">
        <AlertCircle className="w-12 h-12 text-red-500" />
      </div>
      <h3 className="text-xl font-bold text-gray-900">
        Gagal Ambil Riwayat Order
      </h3>
      <Button
        onClick={() => refetch()}
        className="bg-[#e95322] hover:bg-[#d14719]">
        Coba Lagi
      </Button>
    </div>
  );
}

export default OrderError;
