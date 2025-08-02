import { Suspense } from "react";
import ProductsContent from "./SmoothScroll";


export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading products...</div>}>
      <ProductsContent />
    </Suspense>
  );
}

