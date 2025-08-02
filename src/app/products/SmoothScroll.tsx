"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiFacebookFill, RiTwitterFill, RiLinkedinFill, RiInstagramFill } from "react-icons/ri";

export const metadata = {
  title: "Seafood Products | Bostan Group Inc.",
  description: "Premium quality seafood products sourced globally",
};

const seafoodProducts = [
  {
    id: "black-tiger",
    category: "Black Tiger Shrimp",
    description: "Premium quality shrimp with various size options",
    image: "/images/black-tiger.jpg",
    content: `Our Black Tiger Shrimp are sourced from the cleanest waters, offering superior taste and texture. 
    Available in multiple sizes and packaging options to meet your specific needs.`,
    items: [
      { size: "16/20", country: "India", price: "$7.30/lb" },
      { size: "21/25", country: "Viet/Thai", price: "$7.70/lb" },
      { size: "26/30", country: "Thailand", price: "$8.80/lb" },
    ]
  },
  {
    id: "white-shrimp",
    category: "White Shrimp",
    description: "Wild-caught & farmed options with complete customization",
    image: "/images/white-shrimp.jpg",
    content: `Premium White Shrimp available in various sizes and processing options. 
    Perfect for restaurants, retailers, and seafood distributors.`,
    items: [
      { size: "16/20", country: "India", price: "$6.25/lb" },
      { size: "21/25", country: "Vietnam", price: "$5.45/lb" },
      { size: "26/30", country: "China", price: "$5.10/lb" },
    ]
  },
  {
    id: "ez-peel",
    category: "EZ Peel IQF Headless",
    description: "Convenient peeled and deveined options",
    image: "/images/ez-peel.jpg",
    content: `Individually Quick Frozen (IQF) shrimp for maximum freshness and convenience. 
    Perfect for food service operations and quick meal preparation.`,
    items: [
      { size: "16-20", country: "Vietnam", price: "$5.05/tray" },
      { size: "21-25", country: "Thailand", price: "$5.90/tray" },
      { size: "26-30", country: "Ecuador", price: "$5.55/tray" },
    ]
  },
];

export default function ProductsContent() {
  const [selectedProduct, setSelectedProduct] = useState(seafoodProducts[0]);

  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-[#095b35] to-[#03468a] text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Premium Seafood Products</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Quality seafood solutions for distributors, wholesalers, and foodservice providers
          </p>
        </div>
      </section>

      {/* Navigation Links */}
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex overflow-x-auto gap-4">
          {seafoodProducts.map((product) => (
            <Link 
              key={product.id}
              href={`#${product.id}`}
              className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              {product.category}
            </Link>
          ))}
        </div>
      </div>

      {/* Product Sections */}
      {seafoodProducts.map((product, index) => (
        <section 
          key={product.id}
          id={product.id}
          className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={product.image}
                  alt={product.category}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </div>
            <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
              <h2 className="text-3xl font-bold text-[#095b35] mb-4">{product.category}</h2>
              <p className="text-gray-600 mb-6">{product.content}</p>
              
              <div className="bg-[#f8fafc] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Product Specifications</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#03468a] text-white">
                      <tr>
                        <th className="p-3 text-left">Size</th>
                        <th className="p-3 text-left">Origin</th>
                        <th className="p-3 text-left">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.items.map((item, idx) => (
                        <tr key={idx} className="border-b hover:bg-blue-50">
                          <td className="p-3 font-medium">{item.size}</td>
                          <td className="p-3">{item.country}</td>
                          <td className="p-3 text-[#03468a] font-semibold">{item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-sm">Certifications</h4>
                  <p className="text-sm mt-1">HACCP, BRC, ASC Certified</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-sm">Packaging</h4>
                  <p className="text-sm mt-1">Vacuum Sealed IQF</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Footer Section */}
      {/* <footer className="bg-[#03468a] text-white py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-sm">📞 587-717-8930</p>
            <p className="text-sm">📧 info@bostangroup.com</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <RiFacebookFill className="text-2xl" />
              <RiTwitterFill className="text-2xl" />
              <RiLinkedinFill className="text-2xl" />
              <RiInstagramFill className="text-2xl" />
            </div>
          </div>
        </div>
      </footer> */}
    </main>
  );
}