import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export const metadata = {
  title: "About Us | Bostan Group Inc.",
  description: "A premier supplier of high-quality meat and seafood products, serving traders, distributors, and supermarkets globally.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      {/* Enhanced Hero Section */}
      <section className="relative py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#03468a] to-[#095b35] text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Bostan Group Inc.
          </h1>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Your trusted partner for premium meat and seafood products, delivering quality and excellence globally.
          </p>
          
          {/* Added Welcome Paragraph with beautiful styling */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 max-w-5xl mx-auto mt-8 text-left">
            <p className="text-lg leading-relaxed">
              Welcome to Bostan Group, where our passion for providing high-quality meat and seafood products drives everything we do. 
              Established with a commitment to excellence, we are proud to serve a diverse clientele, including traders, distributors, 
              wholesalers, and supermarkets. Our mission is to be your trusted partner in delivering premium products that meet the 
              evolving needs of your customers.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              With years of industry experience, our team is dedicated to building strong relationships with our partners while providing 
              exceptional service and support. We understand that every business has unique needs, and we work closely with you to 
              ensure we meet those needs efficiently and reliably.
            </p>
          </div>
        </div>
      </section>

      {/* Product Sections */}
      {[
        {
          title: "Premium Beef Sourcing",
          img: "https://ext.same-assets.com/3330872014/3199121422.jpeg",
          content: `Welcome to our company, where we pride ourselves on delivering the finest beef sourced from across the globe. While we have a strong commitment to Canadian beef, our extensive supply network allows us to meet the diverse needs of our customers by sourcing exceptional beef from various countries renowned for their quality. We understand that quality,safety, and consistency are paramount...`
        },
        {
          title: "Seafood Excellence",
          img: "seafoodexcelelnece.jfif",
          content: `Welcome to our seafood section, where we proudly offer an extensive selection of the freshest and highest-quality seafood sourced from oceans and farms around the globe. Our shrimp collection is unmatched, featuring all sizes available with shell, peeled, and deveined options...`
        },
        {
          title: "Premium Poultry",
          img: "/poultrynew.jfif",
          content: `Welcome to our poultry section, where we specialize in providing a comprehensive range of poultry products tailored to meet the diverse needs of our customers. Our selection includes all kinds of poultry, from light fowl to heavy fowl...`
        },
        {
          title: "Lamb & Goat Specialists",
          img: "lamb.jpg",
          content: `Welcome to our Lamb and Goat section, where we take pride in being the best supplier for traders and distributors seeking high-quality lamb and goat products. Our extensive selection encompasses everything from whole carcasses to a diverse  array of cuts...`
        }
      ].map((section, index) => (
        <section key={index} className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={`order-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={section.img}
                  alt={section.title}
                  fill
                  className="object-cover"
                  priority={index < 2}
                />
              </div>
            </div>
            <div className={`order-2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
              <h2 className="text-3xl font-bold text-[#095b35] mb-6">{section.title}</h2>
              <div className="prose prose-lg text-gray-600">
                {section.content.split('\n').map((paragraph, i) => (
                  <p key={i} className="mb-4 last:mb-0">{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

     

  
    </main>
  );
}