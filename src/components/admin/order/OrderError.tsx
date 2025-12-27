// @/components/admin/order/OrderError.tsx
import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCcw } from "lucide-react";

export default function OrderError({ refetch }: { refetch?: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4 p-6 border-2 border-dashed rounded-xl bg-red-50/50 border-red-100">
      <div className="p-3 bg-red-100 rounded-full">
        <AlertCircle className="h-8 w-8 text-red-600" />
      </div>
      <div className="text-center">
        <h3 className="text-lg font-bold text-red-900">Gagal Memuat Data</h3>
        <p className="text-sm text-red-600 max-w-[250px]">
          Sepertinya ada masalah koneksi atau server sedang sibuk.
        </p>
      </div>
      {refetch && (
        <Button
          variant="outline"
          onClick={() => refetch()}
          className="border-red-200 hover:bg-red-100 text-red-700">
          <RefreshCcw className="mr-2 h-4 w-4" />
          Coba Lagi
        </Button>
      )}
    </div>
  );
}
