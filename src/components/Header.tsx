"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import Image from "next/image";

const routes = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/commitment", label: "COMMITMENT" },
  {
    href: "",
    label: "PRODUCTS",
    subRoutes: [
      { href: "/seafood", label: "SEA FOOD" },
      { href: "/poultry-products-list", label: "POULTRY" },
      { href: "/beef", label: "BEEF" },
      { href: "/lambgoat", label: "LAMB & GOAT" },
      { href: "/foodpackaging", label: "FOOD PACKAGING" },
    ],
  },
  { href: "/services", label: "SERVICES" },
  { href: "/source", label: "SOURCE" },
  { href: "/contact", label: "CONTACT" },
];

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const pathname = usePathname();

  const socialLinks = [
    { icon: <FaFacebook />, url: '#' },
    { icon: <FaTwitter />, url: '#' },
    { icon: <FaInstagram />, url: '#' },
    { icon: <FaLinkedin />, url: '#' },
  ];

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenSubMenu(null);
  }, [pathname]);

  return (
    <header className="bg-white shadow-sm z-50">
      {/* Top Social Bar */}
      <div className="py-2 px-4" style={{ backgroundColor: '#0d413e' }}>
        <div className="container mx-auto flex justify-end items-center">
          <div className="hidden md:flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="w-48 h-24 relative">
            <Link href="/">
              <Image
                src="/5x.png"
                alt="Athar Foods Logo"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 640px) 640px, (max-width: 768px) 720px, 800px"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {routes.map((route) => (
              <div
                key={route.href}
                className="relative group"
                onMouseEnter={() => setOpenSubMenu(route.href)}
                onMouseLeave={() => setOpenSubMenu(null)}
              >
                <Link
                  href={route.href}
                  className={`text-black hover:text-gray-300 px-3 py-2 rounded-md transition-colors ${
                    pathname === route.href ? 'bg-white bg-opacity-10' : ''
                  }`}
                >
                  {route.label}
                </Link>

                {/* Dropdown Menu */}
                {route.subRoutes && openSubMenu === route.href && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg py-2 mt-1 z-50">
                    {route.subRoutes.map((subRoute) => (
                      <Link
                        key={subRoute.href}
                        href={subRoute.href}
                        className={`block px-4 py-2 transition ${
                          pathname === subRoute.href 
                            ? 'text-[#115551] font-semibold' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {subRoute.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {routes.map((route) => (
              <div key={route.href} className="py-2 border-b border-gray-200">
                <div className="flex flex-col">
                  {route.subRoutes ? (
                    <div>
                      <button
                        className={`px-4 py-2 w-full text-left text-black ${
                          pathname.startsWith(route.href) ? 'bg-white bg-opacity-10' : ''
                        }`}
                        onClick={() => 
                          setOpenSubMenu(openSubMenu === route.href ? null : route.href)
                        }
                      >
                        {route.label}
                      </button>
                      {openSubMenu === route.href && (
                        <div className="ml-4 mt-2">
                          {route.subRoutes.map((subRoute) => (
                            <Link
                              key={subRoute.href}
                              href={subRoute.href}
                              className={`block px-4 py-2 ${
                                pathname === subRoute.href
                                  ? 'text-black font-semibold'
                                  : 'text-black'
                              }`}
                            >
                              {subRoute.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={route.href}
                      className={`px-4 py-2 text-black ${
                        pathname === route.href ? 'bg-white bg-opacity-10' : ''
                      }`}
                    >
                      {route.label}
                    </Link>
                  )}
                </div>
              </div>
            ))}
            
            <div className="flex space-x-4 justify-center mt-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-black hover:text-black"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
