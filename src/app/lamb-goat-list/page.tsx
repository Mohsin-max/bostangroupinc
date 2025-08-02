export default function lambGoatList() {

    return (
        <div className="max-w-5xl mx-auto px-6 py-16 bg-gray-50">
            <h1 className="text-4xl font-bold text-center text-[#0D413E] mb-12">
                Lamb & Goat Products
            </h1>

            <div className="space-y-16">
                {/* Lamb */}
                <section className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
                    <h2 className="text-2xl font-semibold text-[#0D413E] border-b pb-2 mb-4">
                        Lamb
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Whole Lamb: A complete lamb carcass.</li>
                        <li>Lamb Leg: Can be bone-in or boneless.</li>
                        <li>Boneless Lamb Leg: Prepared for easy cooking.</li>
                        <li>Lamb Shoulder: Can be bone-in or boneless.</li>
                        <li>Boneless Lamb Shoulder: Prepared for easy cooking.</li>
                        <li>Lamb Shoulder Tubes: Boneless lamb shoulder rolled or tied.</li>
                        <li>Lamb Chops: Various cuts from the loin, rib, or shoulder.</li>
                        <li>Lamb Rack: Rib portion of the lamb.</li>
                        <li>Lamb Shanks: Lower portion of the leg.</li>
                        <li>Ground Lamb: Made from minced lamb meat.</li>
                        <li>Lamb Liver: The liver portion of the lamb.</li>
                        <li>Lamb Kidney: The kidney portion of the lamb.</li>
                        <li>Lamb Heart: The heart portion of the lamb.</li>
                    </ul>
                </section>

                {/* Goat */}
                <section className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
                    <h2 className="text-2xl font-semibold text-[#0D413E] border-b pb-2 mb-4">
                        Goat
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Goat Carcasses: Whole goat, typically sold for further processing.</li>
                        <li>Goat 6-Way Cuts: Goat divided into six primary primal cuts (e.g., two shoulders, two legs, two loins/saddles, etc., depending on common butchering practices).</li>
                    </ul>
                </section>
            </div>
        </div>

    )
}