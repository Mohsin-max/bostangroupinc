"use client";
import { useState } from "react";

const lambGoatProducts = [
  {
    id: 1,
    name: "Premium Lamb Chops",
    variants: [
      { cut: "Rib Chops", weight: "8-10 oz", grade: "AAA", price: "$14.99/lb" },
      { cut: "Loin Chops", weight: "6-8 oz", grade: "AAA", price: "$12.75/lb" },
      { cut: "Shoulder Chops", weight: "10-12 oz", grade: "AA", price: "$9.95/lb" },
    ]
  },
  {
    id: 2,
    name: "Whole Halal Goat",
    variants: [
      { cut: "Small Carcass", weight: "20-25 lbs", grade: "A", price: "$4.25/lb" },
      { cut: "Medium Carcass", weight: "25-30 lbs", grade: "A", price: "$4.15/lb" },
      { cut: "Large Carcass", weight: "30-35 lbs", grade: "A", price: "$4.05/lb" },
    ]
  },
  {
    id: 3,
    name: "Lamb Leg",
    variants: [
      { cut: "Bone-In", weight: "5-7 lbs", grade: "AAA", price: "$8.95/lb" },
      { cut: "Boneless", weight: "4-6 lbs", grade: "AAA", price: "$10.25/lb" },
      { cut: "Butterflied", weight: "3-5 lbs", grade: "AA", price: "$9.50/lb" },
    ]
  },
  {
    id: 4,
    name: "Goat Meat Cuts",
    variants: [
      { cut: "Shoulder", weight: "2-3 lbs", grade: "A", price: "$5.75/lb" },
      { cut: "Leg", weight: "3-4 lbs", grade: "A", price: "$6.25/lb" },
      { cut: "Ribs", weight: "1.5-2 lbs", grade: "A", price: "$5.95/lb" },
    ]
  },
];

export default function LambGoatMenu() {
  const [selectedProduct, setSelectedProduct] = useState(lambGoatProducts[0]);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-[#03468a] text-white py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold">Lamb & Goat Product Menu</h1>
          <p className="mt-1 text-sm">Explore premium halal meat options</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4">
        {/* Product Menu Selection */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
          {lambGoatProducts.map((product) => (
            <button
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className={`rounded-lg border px-4 py-3 text-sm font-semibold transition ${
                selectedProduct.id === product.id
                  ? "bg-[#03468a] text-white border-[#03468a]"
                  : "bg-white hover:bg-blue-50 border-gray-300"
              }`}
            >
              {product.name}
            </button>
          ))}
        </div>

        {/* Selected Product Details */}
        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#03468a] mb-4">
            {selectedProduct.name} Variants
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-[#03468a] text-white">
                <tr>
                  <th className="p-3">Cut</th>
                  <th className="p-3">Weight</th>
                  <th className="p-3">Grade</th>
                  <th className="p-3">Price</th>
                </tr>
              </thead>
              <tbody>
                {selectedProduct.variants.map((variant, idx) => (
                  <tr
                    key={idx}
                    className="border-b hover:bg-blue-50 transition"
                  >
                    <td className="p-3 font-medium">{variant.cut}</td>
                    <td className="p-3">{variant.weight}</td>
                    <td className="p-3">{variant.grade}</td>
                    <td className="p-3 text-[#03468a] font-semibold">
                      {variant.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Info Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-blue-50 p-4 rounded-lg text-sm">
            <h4 className="font-semibold">Certifications</h4>
            <p className="mt-1">Halal Certified, USDA Approved</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg text-sm">
            <h4 className="font-semibold">Shelf Life</h4>
            <p className="mt-1">21 Days at -1°C to 2°C</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg text-sm">
            <h4 className="font-semibold">Packaging</h4>
            <p className="mt-1">Vacuum Sealed or Bulk</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg text-sm">
            <h4 className="font-semibold">MOQ</h4>
            <p className="mt-1">40,000 lbs</p>
          </div>
        </div>
      </main>
    </div>
  );
}
