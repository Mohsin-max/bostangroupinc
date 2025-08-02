// 'use client';
// import { useState } from 'react';

// type SubmitStatus = {
//   success: boolean;
//   message: string;
// } | null;

// export default function VendorApplicationForm() {

//   const initialFormState = {
//     companyName: '',
//     legalName: '',
//     businessType: '',
//     yearEstablished: '',
//     primaryContactPerson: '',
//     title: '',
//     emailAddress: '',
//     phoneNumber: '',
//     website: '',
//     productDescription: '',
//     manufacturerOrDistributor: '',
//     productionCapacity: '',
//     importedMaterials: '',
//     importCountries: '',
//     domesticMaterials: '',
//     domesticDescription: '',
//     additionalInfo: '',
//     representativeName: '',
//     representativeTitle: '',
//     signature: '',
//     date: '',
//   };

//   const [form, setForm] = useState(initialFormState);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     try {
//       const response = await fetch('https://bostangroupinc.com/api/vendor-application', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form),
//       });

//       const contentType = response.headers.get('content-type');
//       if (!contentType || !contentType.includes('application/json')) {
//         const text = await response.text();
//         throw new Error(`Expected JSON but got: ${text.substring(0, 100)}...`);
//       }

//       const data = await response.json();

//       if (response.ok) {
//         setSubmitStatus({
//           success: true,
//           message: 'Thank you! Your vendor application has been submitted successfully.',
//         });
//         setForm(initialFormState); // ✅ Reset form
//       } else {
//         throw new Error(data.message || 'Failed to submit application');
//       }
//     } catch (error) {
//       const errorMessage =
//         error instanceof Error
//           ? error.message
//           : 'An unexpected error occurred. Please try again later.';
//       setSubmitStatus({ success: false, message: errorMessage });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 pb px-4">
//       <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
//         <h1 className="text-3xl font-bold text-[#095b35] mb-6 text-center">
//           Vendor Application Form
//         </h1>

//         {submitStatus && (
//           <div
//             className={`text-center py-2 px-4 mb-4 rounded-md ${
//               submitStatus.success
//                 ? 'bg-green-100 text-green-700'
//                 : 'bg-red-100 text-red-700'
//             }`}
//           >
//             {submitStatus.message}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6 text-sm">
//           {/* Section 1 */}
//           <Section title="1. General Information">
//             <Input name="companyName" label="Company Name" value={form.companyName} onChange={handleChange} required />
//             <Input name="legalName" label="Legal Name (if different)" value={form.legalName} onChange={handleChange} />
//             <Input name="businessType" label="Business Type" value={form.businessType} onChange={handleChange} />
//             <Input name="yearEstablished" label="Year Established" value={form.yearEstablished} onChange={handleChange} />
//             <Input name="primaryContactPerson" label="Primary Contact Person" value={form.primaryContactPerson} onChange={handleChange} />
//             <Input name="title" label="Title" value={form.title} onChange={handleChange} />
//             <Input name="emailAddress" label="Email Address" type="email" value={form.emailAddress} onChange={handleChange} required />
//             <Input name="phoneNumber" label="Phone Number" value={form.phoneNumber} onChange={handleChange} />
//             <Input name="website" label="Website" value={form.website} onChange={handleChange} />
//           </Section>

//           {/* Section 2 */}
//           <Section title="2. Product/Service Information">
//             <Textarea name="productDescription" label="Describe your products/services" value={form.productDescription} onChange={handleChange} />
//             <Input name="manufacturerOrDistributor" label="Manufacturer or Distributor?" value={form.manufacturerOrDistributor} onChange={handleChange} />
//             <Textarea name="productionCapacity" label="Production capacity or service capability" value={form.productionCapacity} onChange={handleChange} />
//           </Section>

//           {/* Section 3 */}
//           <Section title="3. Sourcing and Supply Chain">
//             <Input name="importedMaterials" label="Imported Products/Materials (Yes/No)" value={form.importedMaterials} onChange={handleChange} />
//             <Input name="importCountries" label="If yes, what countries?" value={form.importCountries} onChange={handleChange} />
//             <Input name="domesticMaterials" label="Domestically Sourced Products/Materials (Yes/No)" value={form.domesticMaterials} onChange={handleChange} />
//             <Textarea name="domesticDescription" label="If yes, describe domestic sourcing" value={form.domesticDescription} onChange={handleChange} />
//           </Section>

//           {/* Section 4 */}
//           <Section title="4. Company Info (Additional)">
//             <Textarea name="additionalInfo" label="Additional Information" value={form.additionalInfo} onChange={handleChange} />
//           </Section>

//           {/* Section 5 */}
//           <Section title="5. Agreement and Submission">
//             <Input name="representativeName" label="Authorized Representative Name" value={form.representativeName} onChange={handleChange} />
//             <Input name="representativeTitle" label="Title" value={form.representativeTitle} onChange={handleChange} />
//             <Input name="signature" label="Signature" value={form.signature} onChange={handleChange} />
//             <Input name="date" label="Date" type="date" value={form.date} onChange={handleChange} />
//           </Section>

//           <div className="text-center pt-4">
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="bg-[#095b35] text-white px-6 py-2 rounded-full hover:bg-[#074827] transition disabled:opacity-50"
//             >
//               {isSubmitting ? 'Submitting...' : 'Submit Application'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// function Section({ title, children }: { title: string; children: React.ReactNode }) {
//   return (
//     <div>
//       <h2 className="text-md font-semibold mb-2 text-[#095b35]">{title}</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
//     </div>
//   );
// }

// function Input({
//   name,
//   label,
//   type = 'text',
//   required = false,
//   value,
//   onChange,
// }: {
//   name: string;
//   label: string;
//   type?: string;
//   required?: boolean;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }) {
//   return (
//     <div className="flex flex-col">
//       <label htmlFor={name} className="mb-1 font-medium">{label}</label>
//       <input
//         id={name}
//         name={name}
//         type={type}
//         required={required}
//         placeholder={label}
//         value={value}
//         onChange={onChange}
//         className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#095b35]/50"
//       />
//     </div>
//   );
// }

// function Textarea({
//   name,
//   label,
//   required = false,
//   value,
//   onChange,
// }: {
//   name: string;
//   label: string;
//   required?: boolean;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
// }) {
//   return (
//     <div className="md:col-span-2 flex flex-col">
//       <label htmlFor={name} className="mb-1 font-medium">{label}</label>
//       <textarea
//         id={name}
//         name={name}
//         required={required}
//         placeholder={label}
//         value={value}
//         onChange={onChange}
//         rows={3}
//         className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#095b35]/50"
//       ></textarea>
//     </div>
//   );
// }






// -----------------------------------------------------------------




'use client';
import { useState } from 'react';

type SubmitStatus = {
  success: boolean;
  message: string;
} | null;

export default function VendorApplicationForm() {

  const initialFormState = {
    businessName: '',
    contactName: '',
    // businessType: '',
    phone: '',
    fax: '',
    email: '',
    address: '',
    city: '',
    state: '',
    postCode: '',
    inBusinessSince: '',
    soloTrader: '',
    partnerShip: '',
    limitedLiability: '',
    other: '',

    postalAddress: "",
    postalCity: "",
    postalTelephone: "",
    postalProvince: "",
    postalPostcode: "",
    postalFax: "",
    postalEmail: "",

    bankName: "",
    bankAddress: "",
    bankCity: "",
    bankPhone: "",
    bankState: "",
    bankPostcode: "",
    institutionNumber: "",
    accountNumber: "",
    transitNumber: "",


    bussinessCompanyName1: "",
    bussinesscontactName1: "",
    bussinessaddress1: "",
    bussinesscity1: "",
    bussinesspostcode1: "",
    bussinessphone1: "",
    bussinessemail1: "",

    bussinesscompanyName2: "",
    bussinesscontactName2: "",
    bussinessaddress2: "",
    bussinesscity2: "",
    bussinesspostcode2: "",
    bussinessphone2: "",
    bussinessemail2: "",

    bussinesscompanyName3: "",
    bussinesscontactName3: "",
    bussinessaddress3: "",
    bussinesscity3: "",
    bussinesspostcode3: "",
    bussinessphone3: "",
    bussinessemail3: "",

    bussinesscompanyName4: "",
    bussinesscontactName4: "",
    bussinessaddress4: "",
    bussinesscity4: "",
    bussinesspostcode4: "",
    bussinessphone4: "",
    bussinessemail4: "",

    printName: "",
    title: "",
    date: ""


  };

  const [form, setForm] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://bostangroupinc.com/api/vendor-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        throw new Error(`Expected JSON but got: ${text.substring(0, 100)}...`);
      }

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Thank you! Your vendor application has been submitted successfully.',
        });
        setForm(initialFormState); // ✅ Reset form
      } else {
        throw new Error(data.message || 'Failed to submit application');
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'An unexpected error occurred. Please try again later.';
      setSubmitStatus({ success: false, message: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-[#095b35] mb-6 text-center">
          Vendor Application Form
        </h1>

        {submitStatus && (
          <div
            className={`text-center py-2 px-4 mb-4 rounded-md ${submitStatus.success
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
              }`}
          >
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 text-sm">
          {/* Section 1 */}
          <Section title="Business contact information">
            <Input name="businessName" label="Business Name" value={form.businessName} onChange={handleChange} required />
            <Input name="contactName" label="Contact Name" value={form.contactName} onChange={handleChange} />
            <Input name="phone" label="Phone" value={form.phone} onChange={handleChange} />
            <Input name="fax" label="Fax" value={form.fax} onChange={handleChange} />
            <Input name="email" label="Email" value={form.email} onChange={handleChange} required />
            <Input name="address" label="Address" value={form.address} onChange={handleChange} />
            <Input name="city" label="City" value={form.city} onChange={handleChange} />
            <Input name="state" label="State" value={form.state} onChange={handleChange} />
            <Input name="postCode" label="Post Code" value={form.postCode} onChange={handleChange} />
            <Input name="inBusinessSince" label="In Business Since" value={form.inBusinessSince} onChange={handleChange} />
            <Input name="soloTrader" label="Solo Trader" value={form.soloTrader} onChange={handleChange} />
            <Input name="partnerShip" label="Partner Ship" value={form.partnerShip} onChange={handleChange} />
            <Input name="limitedLiability" label="Limited Liability" value={form.limitedLiability} onChange={handleChange} />
            <Input name="other" label="Other" value={form.other} onChange={handleChange} />
          </Section>

          {/* Section 2 */}
          <Section title="Business and credit information">
            <Textarea name="productDescription" label="Postal Address" value={form.postalAddress} onChange={handleChange} />
            <Input name="postalCity" label="City" value={form.postalCity} onChange={handleChange} />
            <Input name="postalProvince" label="Province" value={form.postalProvince} onChange={handleChange} />
            <Input name="postalPostcode" label="Post Code" value={form.postalPostcode} onChange={handleChange} />
            <Input name="postalTelephone" label="Telephone" value={form.postalTelephone} onChange={handleChange} />
            <Input name="postalFax" label="Fax" value={form.postalFax} onChange={handleChange} />
            <Input name="postalEmail" label="Email" type='email' value={form.postalEmail} onChange={handleChange} />
            <Input name="bankName" label="Bank Name" value={form.bankName} onChange={handleChange} />
            <Textarea name="bankAddress" label="Bank Address" value={form.bankAddress} onChange={handleChange} />
            <Input name="bankPhone" label="Phone" value={form.bankPhone} onChange={handleChange} />
            <Input name="bankCity" label="City" value={form.bankCity} onChange={handleChange} />
            <Input name="bankState" label="State" value={form.bankState} onChange={handleChange} />
            <Input name="bankPostcode" label="Post Code" value={form.bankPostcode} onChange={handleChange} />
            <Input name="institutionNumber" label="Instituition Number" value={form.institutionNumber} onChange={handleChange} />
            <Input name="accountNumber" label="Account Number" value={form.accountNumber} onChange={handleChange} />
            <Input name="transitNumber" label="Transit Numbe" value={form.transitNumber} onChange={handleChange} />
          </Section>

          {/* Section 3 */}
          <Section title="Business/trade references (1)">
            <Input name="bussinessCompanyName1" label="Company Name" value={form.bussinessCompanyName1} onChange={handleChange} />
            <Input name="bussinesscontactName1" label="Contact Name" value={form.bussinesscontactName1} onChange={handleChange} />
            <Textarea name="bussinessaddress1" label="Address" value={form.bussinessaddress1} onChange={handleChange} />
            <Input name="bussinesscity1" label="City" value={form.bussinesscity1} onChange={handleChange} />
            <Input name="bussinesspostcode1" label="Post Code" value={form.bussinesspostcode1} onChange={handleChange} />
            <Input name="bussinessphone1" label="Phone" value={form.bussinessphone1} onChange={handleChange} />
            <Input name="bussinessemail1" label="Email" value={form.bussinessemail1} onChange={handleChange} />
          </Section>

          <Section title='Business/trade references (2)'>
            <Input name="bussinessCompanyName2" label="Company Name" value={form.bussinesscompanyName2} onChange={handleChange} />
            <Input name="bussinesscontactName2" label="Contact Name" value={form.bussinesscontactName2} onChange={handleChange} />
            <Textarea name="bussinessaddress2" label="Address" value={form.bussinessaddress2} onChange={handleChange} />
            <Input name="bussinesscity2" label="City" value={form.bussinesscity2} onChange={handleChange} />
            <Input name="bussinesspostcode2" label="Post Code" value={form.bussinesspostcode2} onChange={handleChange} />
            <Input name="bussinessphone2" label="Phone" value={form.bussinessphone2} onChange={handleChange} />
            <Input name="bussinessemail2" label="Email" value={form.bussinessemail2} onChange={handleChange} />
          </Section>

          <Section title='Business/trade references (3)'>
            <Input name="bussinessCompanyName3" label="Company Name" value={form.bussinesscompanyName3} onChange={handleChange} />
            <Input name="bussinesscontactName3" label="Contact Name" value={form.bussinesscontactName3} onChange={handleChange} />
            <Textarea name="bussinessaddress3" label="Address" value={form.bussinessaddress3} onChange={handleChange} />
            <Input name="bussinesscity3" label="City" value={form.bussinesscity3} onChange={handleChange} />
            <Input name="bussinesspostcode3" label="Post Code" value={form.bussinesspostcode3} onChange={handleChange} />
            <Input name="bussinessphone3" label="Phone" value={form.bussinessphone3} onChange={handleChange} />
            <Input name="bussinessemail3" label="Email" value={form.bussinessemail3} onChange={handleChange} />
          </Section>

          <Section title='Business/trade references (4)'>
            <Input name="bussinessCompanyName4" label="Company Name" value={form.bussinesscompanyName4} onChange={handleChange} />
            <Input name="bussinesscontactName4" label="Contact Name" value={form.bussinesscontactName4} onChange={handleChange} />
            <Textarea name="bussinessaddress4" label="Address" value={form.bussinessaddress4} onChange={handleChange} />
            <Input name="bussinesscity4" label="City" value={form.bussinesscity4} onChange={handleChange} />
            <Input name="bussinesspostcode4" label="Post Code" value={form.bussinesspostcode4} onChange={handleChange} />
            <Input name="bussinessphone4" label="Phone" value={form.bussinessphone4} onChange={handleChange} />
            <Input name="bussinessemail4" label="Email" value={form.bussinessemail4} onChange={handleChange} />
          </Section>

          {/* Section 4 */}
          {/* <Section title="Agreement" >
            <p>I,
              , hereby request the opening of an account in my name with your Bostan
              Group. Additionally, I authorize the use of my debit card associated with this account to be charged for all
              upcoming and future invoices</p>
          </Section> */}

          <label htmlFor="" className=''>
            <h4 className='mt-6 mb-3 text-[#095b35] font-semibold'>Agreement</h4>
            <p>I,
              , hereby request the opening of an account in my name with your Bostan
              Group. Additionally, I authorize the use of my debit card associated with this account to be charged for all
              upcoming and future invoices</p>
          </label>

          {/* Section 5 */}
          <Section title="Signatures">
            <Input name="representativeName" label="Print Name" value={form.printName} onChange={handleChange} />
            <Input name="representativeTitle" label="Title" value={form.title} onChange={handleChange} />
            <Input name="date" type='date' label="Signature" value={form.date} onChange={handleChange} />
          </Section>

          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#095b35] text-white px-6 py-2 rounded-full hover:bg-[#074827] transition disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-md font-semibold mb-2 text-[#095b35]">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
    </div>
  );
}

function Input({
  name,
  label,
  type = 'text',
  required = false,
  value,
  onChange,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-1 font-medium">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={label}
        value={value}
        onChange={onChange}
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#095b35]/50"
      />
    </div>
  );
}

function Textarea({
  name,
  label,
  required = false,
  value,
  onChange,
}: {
  name: string;
  label: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div className="md:col-span-2 flex flex-col">
      <label htmlFor={name} className="mb-1 font-medium">{label}</label>
      <textarea
        id={name}
        name={name}
        required={required}
        placeholder={label}
        value={value}
        onChange={onChange}
        rows={3}
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#095b35]/50"
      ></textarea>
    </div>
  );
}

