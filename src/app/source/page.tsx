"use client";
import { NextPage } from "next";
import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface Country {
  name: string;
  products: string[];
  coordinates: [number, number];
  details: string;
}

const ProductSourcesPage: NextPage = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [position, setPosition] = useState<{ coordinates: [number, number]; zoom: number }>({
    coordinates: [0, 20],
    zoom: 1,
  });

const sourceCountries: Country[] = [
  { name: "Italy", products: ["Parma Ham", "Parmigiano Reggiano"], coordinates: [12.567, 42.833], details: "Renowned for artisanal cured meats and aged cheeses from Northern Italy." },
  { name: "New Zealand", products: ["Lamb", "Grass-fed Beef"], coordinates: [174.0, -41.3], details: "Free-range livestock raised in pristine environments with strict welfare standards." },
  { name: "Australia", products: ["Wagyu Beef", "Lamb"], coordinates: [133.775, -25.274], details: "Premium Wagyu beef and lamb from expansive Australian stations." },
  { name: "Chile", products: ["Salmon", "Sea Bass"], coordinates: [-71.543, -35.675], details: "Sustainable seafood from the cold, clean waters of Patagonia." },
  { name: "Brazil", products: ["Beef", "Poultry"], coordinates: [-53.2, -10.333], details: "Large-scale production with export-grade traceability systems." },
  { name: "Uruguay", products: ["Grass-fed Beef", "Lamb"], coordinates: [-55.5, -32.5], details: "Premium grass-fed beef from free-range cattle in natural pastures." },
  { name: "Argentina", products: ["Angus Beef", "Lamb"], coordinates: [-60.0, -60.0], details: "World-renowned beef production with strict quality controls." },
  { name: "China", products: ["Pork", "Tea", "Rice"], coordinates: [104.1954, 35.8617], details: "Diverse agricultural production with focus on pork, tea, and rice exports." },
  { name: "United Kingdom", products: ["Beef", "Lamb", "Cheese"], coordinates: [-3.4360, 55.3781], details: "High-quality beef and lamb with strong traceability systems and protected designation of origin cheeses." },
  { name: "Ireland", products: ["Dairy", "Beef", "Seafood"], coordinates: [-8.2439, 53.4129], details: "Grass-fed dairy and beef products with sustainable farming practices, plus premium seafood exports." },
  { name: "USA", products: ["Beef", "Corn", "Soybeans", "Poultry"], coordinates: [-95.7129, 37.0902], details: "Large-scale production of grain-fed beef, poultry, and major commodity crops with advanced agricultural technology." },
];

  

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Hero Section */}
      <header className="bg-gradient-to-br from-[#095b35] to-[#03468a] text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Global Food Network
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-200">
            Connecting premium producers with world markets
          </p>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-7xl space-y-16">
        {/* Map Section */}
        <section className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#095b35] to-[#03468a]">
                Interactive Supply Map
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our global network of trusted partners and production centers
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="relative w-full h-[500px] bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                  scale: 150,
                  center: [0, 20],
                }}
                className="w-full h-full"
              >
                <ZoomableGroup
                  center={position.coordinates}
                  zoom={position.zoom}
                  onMoveEnd={({ coordinates, zoom }) => {
                    setPosition({ coordinates, zoom });
                  }}
                >
                  <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                      geographies.map((geo) => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill="#e0e7ff"
                          stroke="#cbd5e1"
                          strokeWidth={0.5}
                          style={{
                            default: { outline: "none" },
                            hover: { fill: "#c7d2fe", cursor: "pointer" },
                            pressed: { fill: "#a5b4fc" },
                          }}
                        />
                      ))
                    }
                  </Geographies>

                  {sourceCountries.map((country, index) => (
                    <Marker key={country.name} coordinates={country.coordinates}>
                      <g
                        onClick={() => setSelectedCountry(country)}
                        className="cursor-pointer group"
                      >
                        <circle
                          r={6}
                          fill={index % 2 === 0 ? "#22c55e" : "#3b82f6"}
                          stroke="#fff"
                          strokeWidth={2}
                          className="group-hover:scale-125 transition-transform"
                        />
                        <text
                          x={8}
                          y={4}
                          textAnchor="start"
                          fontSize={12}
                          fill="#334155"
                          className="font-semibold"
                        >
                          {country.name}
                        </text>
                      </g>
                    </Marker>
                  ))}
                </ZoomableGroup>
              </ComposableMap>

              {/* Zoom Controls */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button
                  onClick={() => setPosition((prev) => ({ ...prev, zoom: Math.min(prev.zoom * 1.5, 8) }))}
                  className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                >
                  +
                </button>
                <button
                  onClick={() => setPosition((prev) => ({ ...prev, zoom: Math.max(prev.zoom / 1.5, 1) }))}
                  className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                >
                  -
                </button>
              </div>
            </div>

            {/* Selected Country Details */}
            {selectedCountry && (
              <div className="mt-8 bg-white border-l-4 border-[#095b35] p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedCountry.name}</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-[#03468a]">Key Products</h4>
                        <ul className="space-y-2">
                          {selectedCountry.products.map((product) => (
                            <li key={product} className="flex items-center text-gray-600">
                              <span className="w-2 h-2 bg-[#095b35] rounded-full mr-2" />
                              {product}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-[#03468a]">Production Details</h4>
                        <p className="text-gray-600 leading-relaxed">{selectedCountry.details}</p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedCountry(null)}
                    className="text-gray-400 hover:text-gray-600 transition"
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Additional Content Sections */}
        <section className="space-y-12">
          {/* Stats Section */}
          <section className="space-y-12">
  {/* Stats Section */}
  <div className="text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-8">
      Global Reach, Local Quality
    </h2>
    <div className="flex justify-center">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-xs">
        <div className="text-4xl font-bold text-[#22c55e] mb-2">100%</div>
        <div className="text-gray-600">Customer Satisfaction</div>
      </div>
    </div>
  </div>
</section>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-r from-[#095b35] to-[#03468a] text-white p-12 rounded-2xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Global Network</h3>
                    <p className="text-gray-200">Sourcing from 5 continents</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Premium Quality</h3>
                    <p className="text-gray-200">Stringent quality controls</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🚚</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Fast Logistics</h3>
                    <p className="text-gray-200">Global cold chain network</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📜</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Certifications</h3>
                    <p className="text-gray-200">HACCP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductSourcesPage;