// 'use client';
// import { useState } from 'react';

// type SubmitStatus = {
//   success: boolean;
//   message: string;
// } | null;

// export default function BecomeCustomerForm() {

//     const initialFormState = {
//     businessName: '',
//     contactName: '',
//     phone: '',
//     fax: '',
//     email: '',
//     address: '',
//     city: '',
//     state: '',
//     postCode: '',
//     inBusinessSince: '',
//     soloTrader: '',
//     partnerShip: '',
//     limitedLiability: '',
//     other: '',

//     postalAddress: "",
//     postalCity: "",
//     postalTelephone: "",
//     postalProvince: "",
//     postalPostcode: "",
//     postalFax: "",
//     postalEmail: "",

//     bankName: "",
//     bankAddress: "",
//     bankCity: "",
//     bankPhone: "",
//     bankState: "",
//     bankPostcode: "",
//     institutionNumber: "",
//     accountNumber: "",
//     transitNumber: "",


//     bussinessCompanyName1: "",
//     bussinesscontactName1: "",
//     bussinessaddress1: "",
//     bussinesscity1: "",
//     bussinesspostcode1: "",
//     bussinessphone1: "",
//     bussinessemail1: "",

//     bussinesscompanyName2: "",
//     bussinesscontactName2: "",
//     bussinessaddress2: "",
//     bussinesscity2: "",
//     bussinesspostcode2: "",
//     bussinessphone2: "",
//     bussinessemail2: "",

//     bussinesscompanyName3: "",
//     bussinesscontactName3: "",
//     bussinessaddress3: "",
//     bussinesscity3: "",
//     bussinesspostcode3: "",
//     bussinessphone3: "",
//     bussinessemail3: "",

//     bussinesscompanyName4: "",
//     bussinesscontactName4: "",
//     bussinessaddress4: "",
//     bussinesscity4: "",
//     bussinesspostcode4: "",
//     bussinessphone4: "",
//     bussinessemail4: "",

//     printName: "",
//     title: "",
//     date: ""


//   };

//   const [form, setForm] = useState(initialFormState);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     try {
//       const payload = {
//         ...form,
//         firstName: form.firstName || form.fullName.split(" ")[0] || "",
//       };

//       const response = await fetch('https://bostangroupinc.com/api/customer-application', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload),
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
//           message: 'Thank you! Your application has been submitted successfully. We will contact you soon.',
//         });

//         // Reset form
//         setForm(initialFormState);
//       } else {
//         throw new Error(data.message || 'Failed to submit application');
//       }
//     } catch (error) {
//       const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred. Please try again later.';
//       setSubmitStatus({
//         success: false,
//         message: errorMessage,
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f8fdf8] flex items-center justify-center py-10 px-4">
//       <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-8 space-y-6 border border-gray-200">
//         <div className="text-center">
//           <h2 className="text-3xl font-bold text-[#095b35]">Become a Customer</h2>
//           <p className="text-sm text-gray-500 mt-1">
//             Please fill in the form below to apply for an account.
//           </p>
//         </div>

//         {submitStatus && (
//           <div
//             className={`text-center py-2 px-4 rounded-md ${
//               submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
//             }`}
//           >
//             {submitStatus.message}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {/* Inputs */}
//           {Object.entries(form).map(([key, value]) => (
//             <Input
//               key={key}
//               name={key}
//               label={key.charAt(0).toUpperCase() + key.slice(1)}
//               value={value}
//               onChange={handleChange}
//               type={key === 'email' ? 'email' : key === 'date' ? 'date' : 'text'}
//               required={key === 'fullName' || key === 'email'}
//             />
//           ))}

//           <div className="md:col-span-2 mt-4 text-center">
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="bg-[#095b35] text-white font-semibold py-2 px-6 rounded-full hover:bg-[#074827] transition disabled:opacity-50"
//             >
//               {isSubmitting ? 'Submitting...' : 'Submit Application'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// type InputProps = {
//   name: string;
//   label: string;
//   type?: string;
//   required?: boolean;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   value: string;
// };

// function Input({ name, label, type = 'text', required = false, onChange, value }: InputProps) {
//   return (
//     <div className="flex flex-col">
//       <label htmlFor={name} className="mb-1 text-gray-700 text-sm">{label}</label>
//       <input
//         id={name}
//         name={name}
//         type={type}
//         required={required}
//         placeholder={label}
//         value={value} // ✅ Controlled input
//         onChange={onChange}
//         className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#095b35]/50 text-sm"
//       />
//     </div>
//   );
// }




'use client';
import { useState } from 'react';

type SubmitStatus = {
  success: boolean;
  message: string;
} | null;

export default function BecomeCustomerForm() {

  const initialFormState = {
    businessName: '',
    contactName: '',
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
    bussinessContactName1: "",
    bussinessAddress1: "",
    bussinessCity1: "",
    bussinessPostcode1: "",
    bussinessPhone1: "",
    bussinessEmail1: "",

    bussinessCompanyName2: "",
    bussinessContactName2: "",
    bussinessAddress2: "",
    bussinessCity2: "",
    bussinessPostcode2: "",
    bussinessPhone2: "",
    bussinessEmail2: "",

    bussinessCompanyName3: "",
    bussinessContactName3: "",
    bussinessAddress3: "",
    bussinessCity3: "",
    bussinessPostcode3: "",
    bussinessPhone3: "",
    bussinessEmail3: "",

    bussinessCompanyName4: "",
    bussinessContactName4: "",
    bussinessAddress4: "",
    bussinessCity4: "",
    bussinessPostcode4: "",
    bussinessPhone4: "",
    bussinessEmail4: "",


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
      const response = await fetch('https://bostangroupinc.com/api/customer-application', {
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
          Become a Customer
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
            <Textarea name="postalAddress" label="Postal Address" value={form.postalAddress} onChange={handleChange} />
            <Input name="postalCity" label="City" value={form.postalCity} onChange={handleChange} />
            <Input name="postalProvince" label="Province" value={form.postalProvince} onChange={handleChange} />
            <Input name="postalPostcode" label="Post Code" value={form.postalPostcode} onChange={handleChange} />
            <Input name="postalTelephone" label="Telephone" value={form.postalTelephone} onChange={handleChange} />
            <Input name="postalFax" label="Fax" value={form.postalFax} onChange={handleChange} />
            <Input name="postalEmail" label="Email" type='email' value={form.postalEmail} onChange={handleChange} required />
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
            <Input name="bussinessCompanyName1" label="Company Name" value={form.bussinessCompanyName1} onChange={handleChange} required />
            <Input name="bussinessContactName1" label="Contact Name" value={form.bussinessContactName1} onChange={handleChange} />
            <Textarea name="bussinessAddress1" label="Address" value={form.bussinessAddress1} onChange={handleChange} />
            <Input name="bussinessCity1" label="City" value={form.bussinessCity1} onChange={handleChange} />
            <Input name="bussinessPostcode1" label="Post Code" value={form.bussinessPostcode1} onChange={handleChange} />
            <Input name="bussinessPhone1" label="Phone" value={form.bussinessPhone1} onChange={handleChange} />
            <Input name="bussinessEmail1" label="Email" value={form.bussinessEmail1} onChange={handleChange} required />
          </Section>

          <Section title='Business/trade references (2)'>
            <Input name="bussinessCompanyName2" label="Company Name" value={form.bussinessCompanyName2} onChange={handleChange} required />
            <Input name="bussinessContactName2" label="Contact Name" value={form.bussinessContactName2} onChange={handleChange} />
            <Textarea name="bussinessAddress2" label="Address" value={form.bussinessAddress2} onChange={handleChange} />
            <Input name="bussinessCity2" label="City" value={form.bussinessCity2} onChange={handleChange} />
            <Input name="bussinessPostcode2" label="Post Code" value={form.bussinessPostcode2} onChange={handleChange} />
            <Input name="bussinessPhone2" label="Phone" value={form.bussinessPhone2} onChange={handleChange} />
            <Input name="bussinessEmail2" label="Email" value={form.bussinessEmail2} onChange={handleChange} required />
          </Section>

          <Section title='Business/trade references (3)'>
            <Input name="bussinessCompanyName3" label="Company Name" value={form.bussinessCompanyName3} onChange={handleChange} required />
            <Input name="bussinessContactName3" label="Contact Name" value={form.bussinessContactName3} onChange={handleChange} />
            <Textarea name="bussinessAddress3" label="Address" value={form.bussinessAddress3} onChange={handleChange} />
            <Input name="bussinessCity3" label="City" value={form.bussinessCity3} onChange={handleChange} />
            <Input name="bussinessPostcode3" label="Post Code" value={form.bussinessPostcode3} onChange={handleChange} />
            <Input name="bussinessPhone3" label="Phone" value={form.bussinessPhone3} onChange={handleChange} />
            <Input name="bussinessEmail3" label="Email" value={form.bussinessEmail3} onChange={handleChange} required />
          </Section>

          <Section title='Business/trade references (4)'>
            <Input name="bussinessCompanyName4" label="Company Name" value={form.bussinessCompanyName4} onChange={handleChange} required />
            <Input name="bussinessContactName4" label="Contact Name" value={form.bussinessContactName4} onChange={handleChange} />
            <Textarea name="bussinessAddress4" label="Address" value={form.bussinessAddress4} onChange={handleChange} />
            <Input name="bussinessCity4" label="City" value={form.bussinessCity4} onChange={handleChange} />
            <Input name="bussinessPostcode4" label="Post Code" value={form.bussinessPostcode4} onChange={handleChange} />
            <Input name="bussinessPhone4" label="Phone" value={form.bussinessPhone4} onChange={handleChange} />
            <Input name="bussinessEmail4" label="Email" value={form.bussinessEmail4} onChange={handleChange} required />
          </Section>

          <label htmlFor="" className=''>
            <h4 className='mt-6 mb-3 text-[#095b35] font-semibold'>Agreement</h4>
            <p>I,
              , hereby request the opening of an account in my name with your Bostan
              Group. Additionally, I authorize the use of my debit card associated with this account to be charged for all
              upcoming and future invoices</p>
          </label>

          {/* Section 5 */}
          <Section title="Signatures">
            <Input name="printName" label="Print Name" value={form.printName} onChange={handleChange} />
            <Input name="title" label="Title" value={form.title} onChange={handleChange} />
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

