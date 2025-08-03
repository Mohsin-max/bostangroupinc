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
    companyName: '', legalName: '', businessType: '', yearEstablished: '',
    primaryContactPerson: '', title: '', emailAddress: '', phoneNumber: '',
    website: '', productDescription: '', manufacturerOrDistributor: '', productionCapacity: '',
    importedMaterials: '', importedCountries: '', domesticMaterials: '', domesticDescription: '',
    additionalInfo: '', representativeName: '', representativeTitle: '', signature: '', date: '', 
    submissionInstructions: ''
  };

  const [form, setForm] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const payload = { ...form };

      const response = await fetch('https://bostangroupinc.com/api/vendor-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
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
          message: 'Thank you! Your application has been submitted successfully. We will contact you soon.',
        });

        // Reset form
        setForm(initialFormState);
      } else {
        throw new Error(data.message || 'Failed to submit application');
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'An unexpected error occurred. Please try again later.';
      setSubmitStatus({
        success: false,
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fdf8] flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-8 space-y-6 border border-gray-200">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#095b35]">Vendor Application Form</h2>
          <p className="text-sm text-gray-500 mt-1">
            Please fill in the form below to apply for an account.
          </p>
        </div>

        {submitStatus && (
          <div
            className={`text-center py-2 px-4 rounded-md ${submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}
          >
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(form).map(([key, value]) => (
            <Input
              key={key}
              name={key}
              label={key.charAt(0).toUpperCase() + key.slice(1)}
              value={value}
              onChange={handleChange}
              type={key === 'email' ? 'email' : key === 'date' ? 'date' : 'text'}
              required={key === 'email'}
            />
          ))}

          <div className="md:col-span-2 mt-4 text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#095b35] text-white font-semibold py-2 px-6 rounded-full hover:bg-[#074827] transition disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

type InputProps = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

function Input({ name, label, type = 'text', required = false, onChange, value }: InputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-1 text-gray-700 text-sm">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={label}
        value={value}
        onChange={onChange}
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#095b35]/50 text-sm"
      />
    </div>
  );
}
