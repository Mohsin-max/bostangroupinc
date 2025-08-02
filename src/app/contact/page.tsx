"use client";
import { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import { RiFacebookFill, RiTwitterFill, RiLinkedinFill, RiInstagramFill } from "react-icons/ri";

// Define types for our form data
type FormData = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  inquiry: string;
  message: string;
};

type SubmitStatus = {
  success: boolean;
  message: string;
} | null;

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    inquiry: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  // Unified change handler for all input types
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus(null);

  try {
    const response = await fetch('https://bostangroupinc.com/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // First check if the response is JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      throw new Error(`Expected JSON but got: ${text.substring(0, 100)}...`);
    }

    const data = await response.json();
    
    if (response.ok) {
      setSubmitStatus({ 
        success: true, 
        message: 'Thank you! Your message has been sent successfully. We will contact you soon.' 
      });
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        inquiry: '',
        message: ''
      });
    } else {
      throw new Error(data.message || 'Failed to send message');
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred. Please try again later.';
    setSubmitStatus({ 
      success: false, 
      message: errorMessage 
    });
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <main className="flex min-h-screen flex-col bg-white text-black">
      <div className="container mx-auto py-12 px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#095b35] mb-4">Contact Bostan Group</h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-700">
            Get in touch with our expert team for premium protein sourcing solutions
          </p>
        </div>

        {/* Full-width Contact Form */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-6">
                <h2 className="text-2xl font-semibold text-[#03468a]">Quick Contacts</h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="font-semibold">Address:</p>
                    <p>Unit 122-2730 -39 AVE .N.E<br />
                    CALGARY AB, T1Y 7H6</p>
                  </div>
                  <div>
                    <p className="font-semibold">Business Hours:</p>
                    <p>9am – 5pm (Mon-Fri)</p>
                  </div>
                  <div>
                    <p className="font-semibold">Direct Line:</p>
                    <a href="tel:587-717-8930" className="text-[#095b35] hover:underline">587-717-8930</a>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-[#03468a] mb-4">Connect With Us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="text-[#03468a] hover:text-[#095b35]">
                      <RiFacebookFill size={28} />
                    </a>
                    <a href="#" className="text-[#03468a] hover:text-[#095b35]">
                      <RiTwitterFill size={28} />
                    </a>
                    <a href="#" className="text-[#03468a] hover:text-[#095b35]">
                      <RiLinkedinFill size={28} />
                    </a>
                    <a href="#" className="text-[#03468a] hover:text-[#095b35]">
                      <RiInstagramFill size={28} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Expanded Form */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl sm:text-4xl font-semibold text-[#095b35] mb-6">Business Inquiry Form</h2>
                
                {submitStatus && (
                  <div className={`mb-6 p-4 rounded-lg ${
                    submitStatus.success 
                      ? 'bg-green-100 text-green-800 border border-green-200' 
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#095b35] focus:border-transparent transition"
                        placeholder="John"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#095b35] focus:border-transparent transition"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#095b35] focus:border-transparent transition"
                      placeholder="Your business name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Business Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#095b35] focus:border-transparent transition"
                      placeholder="contact@yourcompany.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type *</label>
                    <select
                      id="inquiry"
                      name="inquiry"
                      value={formData.inquiry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#095b35] focus:border-transparent transition"
                      required
                    >
                      <option value="">Select inquiry type</option>
                      <option value="wholesale">Wholesale Order</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="product">Product Information</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#095b35] focus:border-transparent transition"
                      placeholder="Please include product quantities and specifications"
                      required
                    ></textarea>
                  </div>

                  <div className="flex justify-center">
                    <Button 
                      type="submit"
                      className={`bg-[#095b35] hover:bg-[#03468a] px-8 py-4 text-lg font-semibold transition-colors w-full sm:w-auto ${
                        isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : 'Submit Inquiry'}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Map Section */}
        <div className="rounded-xl overflow-hidden shadow-lg mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.207240509994!2d-114.05930782353555!3d51.06350477171907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716521bd2299cf%3A0x59d9d8f4a3e5c3d8!2s2730%2039%20Ave%20NE%2C%20Calgary%2C%20AB%20T1Y%207H6%2C%20Canada!5e0!3m2!1sen!2sus!4v1718907399507!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-xl"
          ></iframe>
        </div>
      </div>
    </main>
  );
}