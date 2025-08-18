"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Globe, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { type CarouselApi } from "@/components/ui/carousel";

export default function Home() {
  // Auto-slide functionality for main carousel
  const [api, setApi] = useState<CarouselApi>();
  
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000); // Auto-slide every 2 seconds

    return () => clearInterval(interval);
  }, [api]);

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Carousel with Auto-Slide */}
      <section className="w-full relative">
        <Carousel 
          className="w-full"
          setApi={setApi}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {/* Beef Slide */}
            <CarouselItem>
              <div className="relative h-[50vh] md:h-[70vh] w-full">
                <Image
                  src="./1.jpeg"
                  alt="Premium Beef Sourcing"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#095b35]/70 to-transparent flex items-center">
                  <div className="container mx-auto px-6">
                    <div className="max-w-lg p-6 bg-[#095b35] text-white rounded-3xl shadow-2xl">
                      <h2 className="text-4xl font-extrabold mb-3">Premium Global Beef</h2>
                      <p className="text-lg font-medium">
                        Exceptional quality from Canadian farms and worldwide sources
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* Seafood Slide */}
            <CarouselItem>
              <div className="relative h-[50vh] md:h-[70vh] w-full">
                <Image
                  src="./62075056-5420-42ca-95a9-31f1ad5362d0.jfif"
                  alt="Sustainable Seafood"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#03468a]/70 to-transparent flex items-center">
                  <div className="container mx-auto px-6">
                    <div className="max-w-lg p-6 bg-[#03468a] text-white rounded-3xl shadow-2xl">
                      <h2 className="text-4xl font-extrabold mb-3">Ocean-Fresh Seafood</h2>
                      <p className="text-lg font-medium">
                        Wild-caught & farmed options with complete customization
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* Poultry Slide */}
            <CarouselItem>
              <div className="relative h-[50vh] md:h-[70vh] w-full">
                <Image
                  src="./45e46d38-d029-4a33-98e5-1e931aae4cbf.jfif"
                  alt="Quality Poultry"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#6b2d09]/70 to-transparent flex items-center">
                  <div className="container mx-auto px-6">
                    <div className="max-w-lg p-6 bg-[#6b2d09] text-white rounded-3xl shadow-2xl">
                      <h2 className="text-4xl font-extrabold mb-3">Premium Poultry Solutions</h2>
                      <p className="text-lg font-medium">
                        Canadian & imported options, fresh or frozen
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-[#095b35]/60 hover:bg-[#03468a]/80 p-4 rounded-full shadow-lg" />
          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-[#095b35]/60 hover:bg-[#03468a]/80 p-4 rounded-full shadow-lg" />
        </Carousel>
      </section>

      {/* About Us Section */}
     {/* Enhanced About Us Section */}
<section className="relative py-16 bg-gray-50">
  <div className="container mx-auto px-6 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Image Carousel */}
      <div className="rounded-2xl overflow-hidden shadow-xl">
        <Carousel>
          <CarouselContent>
            {[
              "./9e48a862-b8b2-4e04-8bc7-a9a0b1adbeae.jfif",
              "./9e48a862-b8b2-4e04-8bc7-a9a0b1adbeae.jfif",
              "./62075056-5420-42ca-95a9-31f1ad5362d0.jfif"
            ].map((img, index) => (
              <CarouselItem key={index}>
                <div className="relative h-96">
                  <Image
                    src={img}
                    alt="About Bostan Group"
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 text-white bg-[#095b35]/80 hover:bg-[#03468a]" />
          <CarouselNext className="absolute right-4 top-1/2 text-white bg-[#095b35]/80 hover:bg-[#03468a]" />
        </Carousel>
      </div>

      {/* Content */}
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-[#3e6388]">Global Protein Experts</h2>
        <p className="text-lg text-gray-600">
          Since 2015, Bostan Group has established itself as a leader in premium protein distribution, 
          connecting quality-conscious buyers with trusted suppliers worldwide.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { number: "7+", label: "Countries Sourced" },
            { number: "1300+", label: "Satisfied Clients" },
            { number: "24/7", label: "Cold Chain Monitoring" },
            { number: "ISO", label: "Certified Quality" }
          ].map((stat, index) => (
            <div key={index} className="p-4 bg-white rounded-xl border-l-4 border-[#095b35] shadow-sm">
              <p className="text-2xl font-bold text-[#03468a] mb-1">{stat.number}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Commitment List */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-[#095b35]" />
            <span className="font-medium">Custom Cutting & Packaging</span>
          </div>
          <div className="flex items-center gap-3">
            <Globe className="w-6 h-6 text-[#095b35]" />
            <span className="font-medium">Global Supply Network</span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#095b35]" />
            <span className="font-medium">Quality Certified Products</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#03468a] mb-12 text-center">Our Core Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
         
{[

{
  id: "poultry-products-list",
  title: "Poultry",
  desc: "Canadian & imported fresh/frozen",
  img: "./45e46d38-d029-4a33-98e5-1e931aae4cbf.jfif",
  color: "#6b2d09"
},
  {
    id: "beef",
    title: "Beef",
    desc: "Premium global sourcing with custom cuts",
    img: "./1.jpeg",
    color: "#095b35"
  },
 
  
  {
    id: "lambgoat",
    title: "Lamb & Goat",
    desc: "Whole carcasses to specialty cuts",
    img: "./9e48a862-b8b2-4e04-8bc7-a9a0b1adbeae.jfif",
    color: "#4a148c"
  },



  {
    id: "seafood",
    title: "Seafood",
    desc: "Wild-caught & farmed options available",
    img: "./62075056-5420-42ca-95a9-31f1ad5362d0.jfif",
    color: "#03468a"
  },

  {
    id: "foodpackaging",
    title: "Food Packaging",
    desc: "Custom packaging solutions for all products",
    img: "./foodpackaging.jfif",
    color: "#2d5f5d"
  }
].map(({ id, title, desc, img, color }) => (
  <Link href={`${id}`} key={id}>
    <Card className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer">
      <div className="relative h-48">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <div className="p-6" style={{ backgroundColor: color }}>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-100 text-sm">{desc}</p>
      </div>
    </Card>
  </Link>
))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 my-8 bg-[#03468a] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Why Choose Bostan Group?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Global Network", desc: "Sourcing from trusted producers worldwide" },
              { title: "Quality Assurance", desc: "Stringent safety & quality protocols" },
              { title: "Custom Solutions", desc: "Tailored cuts & packaging options" },
            ].map(({ title, desc }) => (
              <div key={title} className="p-6 bg-white/10 rounded-xl">
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-gray-200">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
    
    </main>
  );
}