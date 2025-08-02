import Link from "next/link";
import { FaLeaf, FaShieldAlt, FaGlobeAmericas, FaHandshake, FaTruck, FaClipboardCheck, FaUsers, FaChartLine } from "react-icons/fa";

export const metadata = {
  title: "Our Commitment | Bostan Group Inc.",
  description: "Discover Bostan Group's unwavering commitment to quality, sustainability, and excellence in meat and seafood distribution.",
};

export default function CommitmentPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f8fafc]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#095b35] to-[#03468a] text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Commitment</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Dedicated to excellence in every aspect of our business - from sourcing to delivery
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/10 backdrop-blur-sm"></div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#095b35] mb-4">Our Mission</h2>
            <div className="w-24 h-1 bg-[#03468a] mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              To provide the highest quality meat and seafood products through sustainable practices, 
              while building lasting relationships with our partners worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Commitment Pillars */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#095b35] mb-4">Our Commitment Pillars</h2>
            <div className="w-24 h-1 bg-[#03468a] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <FaLeaf className="w-12 h-12 text-[#095b35] mx-auto mb-4" />,
                title: "Sustainable Sourcing",
                description: "We partner with suppliers who share our commitment to environmental stewardship and ethical practices. Our seafood is sourced from sustainable fisheries, and our meat products come from responsibly managed farms.",
                bgColor: "bg-green-50"
              },
              {
                icon: <FaShieldAlt className="w-12 h-12 text-[#095b35] mx-auto mb-4" />,
                title: "Quality Assurance",
                description: "Every product undergoes rigorous quality checks to meet international standards. Our HACCP-certified processes ensure food safety from farm to fork.",
                bgColor: "bg-blue-50"
              },
              {
                icon: <FaTruck className="w-12 h-12 text-[#095b35] mx-auto mb-4" />,
                title: "Reliable Logistics",
                description: "Our temperature-controlled supply chain guarantees product integrity during transit. We've invested in advanced cold storage solutions to maintain freshness.",
                bgColor: "bg-gray-50"
              },
              {
                icon: <FaClipboardCheck className="w-12 h-12 text-[#095b35] mx-auto mb-4" />,
                title: "Regulatory Compliance",
                description: "We strictly adhere to all international food safety regulations and maintain full traceability throughout our supply chain for complete transparency.",
                bgColor: "bg-purple-50"
              }
            ].map((pillar, index) => (
              <div key={index} className={`${pillar.bgColor} p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow`}>
                <div className="text-center">
                  {pillar.icon}
                  <h3 className="text-xl font-bold text-[#03468a] mb-3">{pillar.title}</h3>
                  <p className="text-gray-600">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#095b35] mb-4">Our Certifications</h2>
            <div className="w-24 h-1 bg-[#03468a] mx-auto mb-8" />
            <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
              Our certifications demonstrate our adherence to the highest industry standards and our commitment to continuous improvement.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "HACCP Certified", icon: "HACCP" },
              { name: "ISO 22000", icon: "ISO" },
              { name: "BAP Certified", icon: "BAP" },
              { name: "Halal Certified", icon: "Halal" }
            ].map((cert, index) => (
              <div key={index} className="bg-[#f8fafc] p-6 rounded-lg border border-gray-200 text-center">
                <div className="h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-[#095b35]">{cert.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#03468a]">{cert.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Commitment */}
      <section className="py-16 my-10 bg-gradient-to-r from-[#095b35] to-[#03468a] text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Team's Promise</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaUsers className="w-10 h-10 text-white mx-auto mb-4" />,
                title: "Expert Team",
                description: "Our professionals average 15+ years in the industry, bringing unparalleled expertise to your business."
              },
              {
                icon: <FaChartLine className="w-10 h-10 text-white mx-auto mb-4" />,
                title: "Continuous Improvement",
                description: "We regularly review and enhance our processes to deliver better quality and service."
              },
              {
                icon: <FaHandshake className="w-10 h-10 text-white mx-auto mb-4" />,
                title: "Customer Focus",
                description: "Your success is our priority. We tailor solutions to meet your specific business needs."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
                <div className="text-center">
                  {item.icon}
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/90">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[#095b35] mb-6">Partner With Confidence</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the Bostan Group difference - where quality, reliability, and partnership come together to deliver exceptional results.
          </p>
         
        </div>
      </section>
    </main>
  );
}