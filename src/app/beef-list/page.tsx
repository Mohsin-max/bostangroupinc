export default function beefList() {

    return (
        <div className="max-w-5xl mx-auto px-6 py-16 bg-gray-50">
            <h1 className="text-4xl font-bold text-center text-[#0D413E] mb-12">
                Beef Products
            </h1>

            <div className="space-y-16">
                {/* Boneless Beef Cuts */}
                <section className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
                    <h2 className="text-2xl font-semibold text-[#0D413E] border-b pb-2 mb-4">
                        Boneless Beef Cuts
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Boneless Beef Striploin: Lean and tender steak.</li>
                        <li>Boneless Beef Ribeye: Well-marbled and flavorful steak.</li>
                        <li>Boneless Beef Tenderloin: The most tender beef cut.</li>
                        <li>Boneless Beef Sirloin: Versatile and flavorful steak.</li>
                        <li>Boneless Beef Round (various cuts): Including Top Round, Bottom Round, Eye of Round.</li>
                        <li>Boneless Beef Chuck (various cuts): Including Chuck Roast, Flat Iron Steak, Denver Steak.</li>
                        <li>Boneless Beef Brisket: Popular for slow cooking and smoking.</li>
                        <li>Boneless Beef Flank Steak: Flavorful and lean.</li>
                        <li>Boneless Beef Skirt Steak: Thin and flavorful, good for grilling.</li>
                        <li>Boneless Beef Short Ribs: Meaty and flavorful, ideal for braising.</li>
                        <li>Ground Beef: Made from minced beef meat, various lean-to-fat ratios.</li>
                        <li>Beef Liver: The liver portion of the beef.</li>
                        <li>Beef Tongue: The tongue portion of the beef.</li>
                        <li>Beef Oxtail: The tail portion of the beef, rich in flavor.</li>
                    </ul>
                </section>

                {/* Note */}
                <section className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <p className="text-gray-700 text-center">
                        <strong>Note:</strong> Some products can be sold with or without the skin, bones, or with various cuts and preparations.
                    </p>
                </section>
            </div>
        </div>

    )

}