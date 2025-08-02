"use client";
import Image from "next/image";

export default function CatalogPage() {
  const totalPages=26;
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-[#03468a] text-white py-4">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Food Grade Packaging Solutions</h1>
          <p className="mt-2">Premium Packaging for Optimal Food Preservation</p>
        </div>
      </header>

      <div className="flex flex-col items-center py-10 space-y-6">
      <h1 className="text-2xl font-bold text-[#095b35]">Plastic Product Catalog 2024</h1>
      {Array.from({ length: totalPages }, (_, index) => (
        <Image
          key={index}
          src={`/bostan group plastic product catalog1_page-${index + 1}.jpg`}
          alt={`Catalog Page ${index + 1}`}
          width={800}
          height={1200}
          className="w-full max-w-4xl border shadow rounded"
        />
      ))}
    </div>
    </div>
  );
}
