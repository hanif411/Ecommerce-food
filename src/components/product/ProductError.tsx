import { Button } from "../ui/button";

function ProductError({ refetch }: { refetch: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
      <p className="text-destructive font-medium">
        Gagal ambil data roti, bro.
      </p>
      <Button onClick={() => refetch()} variant="outline">
        Coba Lagi
      </Button>
    </div>
  );
}

export default ProductError;
