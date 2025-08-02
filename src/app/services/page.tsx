import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { RiFacebookFill, RiTwitterFill, RiLinkedinFill, RiInstagramFill } from "react-icons/ri";

export const metadata = {
  title: 'Services | Bostan Group Inc.',
  description: 'Specializing in import/export, sourcing and supplying top quality meat and seafood products globally.',
};

export default function ServicesPage() {
  // const countryFlags = [
   
    
  //     { country: "Uruguay", flag: "./uy.png" },
  //     { country: "Chile", flag: "./cl.png" },
  //     { country: "Brazil", flag: "./br.png" },
  //     { country: "Argentina", flag: "./ar.png" },
  //     { country: "Canada", flag: "./ca.png" },
  //     { country: "Australia",flag: "./au.png" },
  //     { country: "New Zealand", flag: "./nz.png" },
  //     // { country: "Norway", flag: "./no.png" }
    
    
 


  // ];

  const services = {
    importExport: [
      "Custom Clearance Assistance",
      "Duties & Tariff Management",
      "Cold Chain Transportation",
      "CFIA Certified Storage Facilities",
      "Export Documentation Handling"
    ],
    sourcing: {
      beef: "Premium Canadian and global beef sourcing with custom cutting",
      seafood: "Wild-caught and sustainable farmed seafood options",
      poultry: "Canadian and imported fresh/frozen poultry",
      lambGoat: "Whole carcasses and specialty cuts from trusted sources"
    },
    features: [
      "Global network of certified suppliers",
      "Quality assurance protocols",
      "Custom packaging solutions",
      "Just-in-time delivery",
      "Market intelligence reports"
    ]
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#095b35] to-[#03468a] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Global Protein Solutions</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Comprehensive supply chain services for meat and seafood industries
          </p>
        </div>
      </section>

      {/* Sourcing Network */}
      <section className="container mx-auto py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#03468a] mb-4">Our Global Network</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Trusted partnerships with premium producers across 6 continents
          </p>
        </div>
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {countryFlags.map((item, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="relative w-16 h-12 mb-3">
                <Image
                  src={item.flag}
                  alt={item.country}
                  fill
                  className="object-contain rounded-sm"
                />
              </div>
              <span className="font-medium text-[#095b35] text-center">{item.country}</span>
            </div>
          ))}
        </div> */}

        {/* Services Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="trade-compliance">
              <AccordionTrigger className="text-xl font-semibold text-[#03468a]">
                Import/Export Management
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Full-service logistics solutions ensuring compliance with international trade regulations 
                    and efficient customs clearance.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {services.importExport.map((service, index) => (
                      <li key={index} className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-[#095b35] rounded-full mt-2"></div>
                        <span className="flex-1">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sourcing">
              <AccordionTrigger className="text-xl font-semibold text-[#03468a]">
                Premium Sourcing Solutions
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-[#095b35]">Beef</h3>
                    <p className="text-gray-700">{services.sourcing.beef}</p>
                    <h3 className="font-semibold text-[#095b35] mt-4">Seafood</h3>
                    <p className="text-gray-700">{services.sourcing.seafood}</p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-[#095b35]">Poultry</h3>
                    <p className="text-gray-700">{services.sourcing.poultry}</p>
                    <h3 className="font-semibold text-[#095b35] mt-4">Lamb & Goat</h3>
                    <p className="text-gray-700">{services.sourcing.lambGoat}</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="value-added">
              <AccordionTrigger className="text-xl font-semibold text-[#03468a]">
                Value-Added Services
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {services.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-[#095b35] rounded-full mt-2"></div>
                      <span className="flex-1">{feature}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

     
      </section>
    </main>
  );
}