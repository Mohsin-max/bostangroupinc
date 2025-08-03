"use client";
import { useState } from "react";

const categories = [
  { name: "Shrimp", key: "shrimp" },
  // { name: "Fish", key: "fish" },
  // { name: "Crab", key: "crab" },
];

const allProducts = [
  {
    id: 1,
    name: "Black Tiger Shrimp",
    category: "shrimp",
    variants: [
      { size: "13/15", origin: "Thailand", price: "$9.25/lb" },
      { size: "21/25", origin: "India", price: "$7.30/lb" },
      { size: "21/25", origin: "Thailand", price: "$7.70/lb" },
      { size: "26/30", origin: "Viet/Thai", price: "$8.80/lb" },
      { size: "31/35", origin: "Ecuador", price: "$5.25/lb" },
    ],
  },
  {
    id: 2,
    name: "White Shrimp",
    category: "shrimp",
    variants: [
      { size: "16/20", origin: "Ecuador", price: "$6.15/lb" },
      { size: "16/20", origin: "India", price: "$5.55/lb" },
      { size: "16/20", origin: "Nila", price: "$6.55/lb" },
      { size: "16/20", origin: "Nila", price: "$5.90/lb" },
      { size: "21/25", origin: "India", price: "$5.50/lb" },
      { size: "21/25", origin: "India", price: "$5.00/lb" },
      { size: "21/25", origin: "Nila", price: "$5.65/lb" },
      { size: "21/25", origin: "Nila", price: "$5.10/lb" },
      { size: "26/30", origin: "India", price: "$5.35/lb" },
      { size: "26/30", origin: "India", price: "$4.80/lb" },
      { size: "26/30", origin: "Nila", price: "$5.55/lb" },
      { size: "26/30", origin: "Nila", price: "$5.00/lb" },
    ],
  },
];

export default function SeafoodMenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("shrimp");
  const [selectedProduct, setSelectedProduct] = useState(
    allProducts.find((p) => p.category === "shrimp") || null
  );

  const filteredProducts = allProducts.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <header className="bg-[#03468a] text-white py-6 shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Seafood Product Menu</h1>
          <p className="text-sm mt-1">Fresh · Certified · Export Quality</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* Category Menu */}
        <div className="flex gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setSelectedCategory(cat.key);
                setSelectedProduct(
                  allProducts.find((p) => p.category === cat.key) || null
                );
              }}
              className={`px-4 py-2 rounded-full font-semibold border ${
                selectedCategory === cat.key
                  ? "bg-[#03468a] text-white"
                  : "bg-white text-[#03468a] border-[#03468a]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="cursor-pointer bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-all p-4"
            >
              <h3 className="text-lg font-semibold text-[#03468a]">
                {product.name}
              </h3>
              <ul className="mt-2 text-sm text-gray-600 space-y-1">
                {product.variants.map((v, i) => (
                  <li key={i}>
                    <span className="font-medium">{v.size}</span> -{" "}
                    <span>{v.origin}</span>
                    {/* <span className="text-[#03468a] font-semibold">
                      {v.price}
                    </span> */}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Detailed Section */}
        {selectedProduct && (
          <div className="mt-12 bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-bold text-[#03468a] mb-4">
              {selectedProduct.name} Details
            </h2>
            <div className="grid md:grid-cols-1 gap-6">
              <div>
                <table className="w-full text-sm border border-gray-200">
                  <thead className="bg-[#03468a] text-white">
                    <tr>
                      <th className="p-2 text-left">Size</th>
                      <th className="p-2 text-left">Origin</th>
                      {/* <th className="p-2 text-left">Price</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {selectedProduct.variants.map((variant, index) => (
                      <tr key={index} className="border-t">
                        <td className="p-2 font-medium">{variant.size}</td>
                        <td className="p-2">{variant.origin}</td>
                        {/* <td className="p-2 text-[#03468a] font-semibold">
                          {variant.price}
                        </td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="mt-4 text-sm grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-blue-50 p-3 rounded">
                    <strong>Certifications</strong>
                    <p>HACCP, ASC</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <strong>MOQ</strong>
                    <p>1 x 20' FCL</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <strong>Packaging</strong>
                    <p>Vacuum Packed</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <strong>Shelf Life</strong>
                    <p>24 months at -18°C</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}