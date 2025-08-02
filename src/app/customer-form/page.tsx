'use client';
import { useState } from 'react';

type SubmitStatus = {
  success: boolean;
  message: string;
} | null;

export default function BecomeCustomerForm() {
  const initialFormState = {
    firstName: '', fullName: '', title: '', date: '', signature: '', contactName: '',
    phone: '', fax: '', email: '', address: '', city: '', state: '', postcode: '',
    businessSince: '', businessType: '', postalAddress: '', province: '',
    bankName: '', bankAddress: '', bankPhone: '', bankCity: '', bankPostcode: '',
    institutionNumber: '', accountNumber: '', transitNumber: '', businessName: '',
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
      const payload = {
        ...form,
        firstName: form.firstName || form.fullName.split(" ")[0] || "",
      };

      const response = await fetch('https://bostangroupinc.com/api/customer-application', {
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
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred. Please try again later.';
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
          <h2 className="text-3xl font-bold text-[#095b35]">Become a Customer</h2>
          <p className="text-sm text-gray-500 mt-1">
            Please fill in the form below to apply for an account.
          </p>
        </div>

        {submitStatus && (
          <div
            className={`text-center py-2 px-4 rounded-md ${
              submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Inputs */}
          {Object.entries(form).map(([key, value]) => (
            <Input
              key={key}
              name={key}
              label={key.charAt(0).toUpperCase() + key.slice(1)}
              value={value}
              onChange={handleChange}
              type={key === 'email' ? 'email' : key === 'date' ? 'date' : 'text'}
              required={key === 'fullName' || key === 'email'}
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
        value={value} // ✅ Controlled input
        onChange={onChange}
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#095b35]/50 text-sm"
      />
    </div>
  );
}
