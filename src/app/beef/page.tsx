"use client";
import { useState } from "react";

const beefProducts = [
  {
    id: 1,
    name: "Premium Angus Ribeye",
    variants: [
      { cut: "Bone-In", weight: "16-18 oz", grade: "USDA Prime", price: "$18.99/lb" },
      { cut: "Boneless", weight: "12-14 oz", grade: "USDA Choice", price: "$15.50/lb" },
      { cut: "Dry Aged", weight: "14-16 oz", grade: "AAA", price: "$22.75/lb" },
    ]
  },
  {
    id: 2,
    name: "Tenderloin Steaks",
    variants: [
      { cut: "Center Cut", weight: "8-10 oz", grade: "USDA Prime", price: "$24.95/lb" },
      { cut: "Whole Tenderloin", weight: "4-6 lbs", grade: "AAA", price: "$19.99/lb" },
      { cut: "Filet Mignon", weight: "6-8 oz", grade: "USDA Choice", price: "$21.25/lb" },
    ]
  },
  {
    id: 3,
    name: "Wagyu Beef",
    variants: [
      { cut: "A5 Striploin", weight: "12 oz", grade: "A5", price: "$125.00/lb" },
      { cut: "Wagyu Ground Beef", weight: "1 lb", grade: "A3", price: "$18.75/lb" },
      { cut: "Wagyu Ribeye", weight: "14 oz", grade: "A4", price: "$89.99/lb" },
    ]
  },
  {
    id: 4,
    name: "Ground Beef",
    variants: [
      { cut: "Lean (90/10)", weight: "1 lb", grade: "USDA Choice", price: "$6.99/lb" },
      { cut: "Medium (80/20)", weight: "1 lb", grade: "USDA Select", price: "$5.75/lb" },
      { cut: "Organic Grass-Fed", weight: "1 lb", grade: "USDA Organic", price: "$8.45/lb" },
    ]
  },
];

export default function BeefMenu() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#03468a] text-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Beef Product Menu</h1>
          <p className="text-sm mt-1">Explore our premium beef selections</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {beefProducts.map((product) => (
            <div key={product.id} className="bg-gray-50 rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-[#03468a] mb-4">
                {product.name}
              </h2>
              <div className="space-y-4">
                {product.variants.map((variant, index) => (
                  <div key={index} className="flex justify-between items-center border-b pb-2">
                    <div>
                      <p className="font-medium">{variant.cut}</p>
                      <p className="text-sm text-gray-600">
                        {variant.weight} &middot; {variant.grade}
                      </p>
                    </div>
                    <p className="text-[#03468a] font-semibold">{variant.price}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
