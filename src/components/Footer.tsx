"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Logo Section */}
<div className="md:col-span-2 lg:col-span-1 flex justify-center md:justify-start">
  <Link href="/" className="block w-[400px] md:w-[480px] h-[160px] relative">
    <Image
      src="./5x.png"
      alt="Athar Foods Logo"
      fill
      priority
      className="object-contain"
      sizes="(max-width: 640px) 640px, (max-width: 768px) 720px, 800px"
    />
  </Link>
</div>



          {/* Business Info */}
          <div className="md:col-span-2 lg:col-span-1 text-xs text-gray-300 space-y-1.5">
            <p className="font-semibold text-white mb-1">Head Office</p>
            <p>Unit 122-2730 39 Ave N.E</p>
            <p>Calgary, AB, T1Y 7H6</p>
            <p>Business Hours: 9 AM – 5 PM (Mon – Fri)</p>
            <p className="mt-3">Phone: 587-717-8930</p>
            <p>
              {/* Email:{" "}
              <a
                href="mailto:info@bostangroup.com"
                className="text-[#F59E0B] hover:text-white transition-colors"
              >
                info@bostangroup.com
              </a> */}
            </p>
          </div>

          {/* Links Container */}
          <div className="grid grid-cols-2 gap-6 md:gap-4 md:col-span-2 lg:col-span-2">
            {/* Partnerships & Quick Links */}
            <div className="col-span-1 space-y-3">
              <div className="text-xs space-y-2">
                <p className="font-semibold text-white">Links</p>
                <Link href="/customer-form" className="block hover:text-[#F59E0B] transition-colors">Become a Customer</Link>
                <Link href="/vendor-form" className="block hover:text-[#F59E0B] transition-colors">Become a Vendor</Link>
              </div>


              
              <div className="text-xs space-y-2">
                <p className="font-semibold text-white">Quick Links</p>
                <Link href="/about" className="block hover:text-[#F59E0B] transition-colors">About</Link>
                <Link href="/services" className="block hover:text-[#F59E0B] transition-colors">Services</Link>
                <Link href="/contact" className="block hover:text-[#F59E0B] transition-colors">Contact</Link>
              </div>
            </div>

            {/* Social & Additional Links */}
            <div className="col-span-1 space-y-3">
              <div className="text-xs space-y-2">
                <p className="font-semibold text-white">Connect With Us</p>
                <Link href="https://linkedin.com" target="_blank" className="block hover:text-[#F59E0B] transition-colors">LinkedIn</Link>
                <Link href="https://twitter.com" target="_blank" className="block hover:text-[#F59E0B] transition-colors">Twitter</Link>
                <Link href="https://facebook.com" target="_blank" className="block hover:text-[#F59E0B] transition-colors">Facebook</Link>
                <Link href="https://instagram.com" target="_blank" className="block hover:text-[#F59E0B] transition-colors">Instagram</Link>
              </div>

              <div className="text-xs space-y-2">
                <Link href="/faq" className="block hover:text-[#F59E0B] transition-colors">FAQ</Link>
                <Link href="/blog" className="block hover:text-[#F59E0B] transition-colors">Blog</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-[0.7rem] text-gray-400 mt-6 pt-6 border-t border-gray-800">
          <p>© {new Date().getFullYear()} Bostan Group Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}