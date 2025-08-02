export default function poultryProductsList() {

    return (
        <div className="max-w-5xl mx-auto px-6 py-16 bg-gray-50">
            <h1 className="text-4xl font-bold text-center text-[#0D413E] mb-12">
                Poultry Products
            </h1>

            <div className="space-y-16">
                {/* Chicken */}
                <section className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
                    <h2 className="text-2xl font-semibold text-[#0D413E] border-b pb-2 mb-4">
                        Chicken
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Whole Chicken: A complete bird with all parts (breast, thighs, drumsticks, wings, back, and abdominal fat).</li>
                        <li>Leg Quarter: Includes the thigh, drumstick, and a portion of the back.</li>
                        <li>Whole Leg: Thigh and drumstick with the back portion removed.</li>
                        <li>Thigh with Back: The upper portion of the leg quarter, separated at the knee and including part of the back.</li>
                        <li>Leg (back attached): The entire leg with a portion of the back still attached.</li>
                        <li>Chicken Breast: Can be bone-in, skin-on, or boneless, skinless.</li>
                        <li>Chicken Breast Quarters: Breast with back and wing attached.</li>
                        <li>Chicken Thighs: Can be bone-in, skin-on, or boneless, skinless.</li>
                        <li>Chicken Drumsticks: Lower portion of the leg, bone-in, skin-on.</li>
                        <li>Chicken Wings: Can be whole, or separated into flats and drumettes.</li>
                        <li>Chicken Back: The back portion of the chicken, often sold with the leg quarter.</li>
                        <li>Ground Chicken: Made from minced chicken meat.</li>
                        <li>Chicken Tenders: Boneless, skinless fillets.</li>
                        <li>Chicken Giblets: Includes heart, liver, and gizzard.</li>
                        <li>Chicken Gizzard: The gizzard portion of the chicken.</li>
                    </ul>
                </section>

                {/* Turkey */}
                <section className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
                    <h2 className="text-2xl font-semibold text-[#0D413E] border-b pb-2 mb-4">
                        Turkey
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Whole Turkey: A complete bird with all parts.</li>
                        <li>Turkey Drumsticks: Lower portion of the turkey leg.</li>
                        <li>Smoked Turkey Drumsticks: Lower portion of the turkey leg, smoked.</li>
                        <li>Turkey Thighs: Can be bone-in, skin-on, or boneless, skinless.</li>
                        <li>Turkey Wings: Can be whole, or separated into drumettes and flats.</li>
                        <li>Smoked Turkey Wings: Whole or separated turkey wings, smoked.</li>
                        <li>Turkey Backs: The back portion of the turkey.</li>
                        <li>Turkey Necks: The neck portion of the turkey.</li>
                        <li>Ground Turkey: Made from minced turkey meat.</li>
                        <li>Turkey Gizzards and Hearts: Internal organs of the turkey.</li>
                    </ul>
                </section>

                {/* Fowl Chicken */}
                <section className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
                    <h2 className="text-2xl font-semibold text-[#0D413E] border-b pb-2 mb-4">
                        Fowl Chicken Products
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Fowl Breast Boneless Skinless: Breast meat from a fowl chicken, boneless and skinless.</li>
                        <li>Fowl Whole Chicken Heavy and Light: Entire fowl chickens, categorized by weight.</li>
                        <li>Fowl Leg Quarter BA: Fowl leg quarter with back attached.</li>
                        <li>Fowl Wings: Wings from a fowl chicken.</li>
                    </ul>
                </section>

                {/* Processed Poultry */}
                <section className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
                    <h2 className="text-2xl font-semibold text-[#0D413E] border-b pb-2 mb-4">
                        Processed Poultry Products
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Boneless, Skinless Chicken/Turkey Breast: Prepared for easy cooking and portion control.</li>
                        <li>Boneless, Skinless Chicken Thighs: Prepared for easy cooking and portion control.</li>
                        <li>Breaded Chicken Drumsticks: Chicken drumsticks coated in breadcrumbs for frying.</li>
                        <li>Chicken Cut Frying: Includes various parts like wings, drumsticks, and thighs.</li>
                        <li>Chicken Leg Quarters: Sold with the thigh, drumstick, and a portion of the back attached.</li>
                        <li>Chicken Leg with Back Attached: Includes the thigh and drumstick with a portion of the back.</li>
                    </ul>
                </section>
            </div>
        </div>

    );

}