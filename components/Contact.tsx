
'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    year: '',
    make: '',
    model: '',
    condition: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Get Your Free Quote Today!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to turn your scrap car into instant cash? Contact us now for a free, no-obligation quote. We respond to all inquiries within 30 minutes during business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-blue-600 text-white rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Call Now for Instant Quote</h3>
              <div className="flex items-center mb-4">
                <i className="ri-phone-fill w-6 h-6 flex items-center justify-center mr-4"></i>
                <div>
                   <a className="text-2xl font-bold" href='tel:+919210450410'>9210 450 410</a> 
                  <div className="text-blue-100">Available 7 days a week</div>
                </div>
              </div>
              <div className="text-blue-100 text-sm">
                Monday - Friday: 8AM - 7PM<br/>
                Saturday - Sunday: 9AM - 5PM
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <i className="ri-map-pin-fill w-6 h-6 flex items-center justify-center text-blue-600 mr-4 mt-1"></i>
                <div>
                  <div className="font-semibold text-gray-900">Service Area</div>
                  <div className="text-gray-600">We serve the entire metropolitan area and surrounding counties. Free pickup within 50 miles.</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <i className="ri-time-fill w-6 h-6 flex items-center justify-center text-blue-600 mr-4 mt-1"></i>
                <div>
                  <div className="font-semibold text-gray-900">Quick Response</div>
                  <div className="text-gray-600">Most quotes provided within 30 minutes. Same-day pickup available in many cases.</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <i className="ri-money-dollar-circle-fill w-6 h-6 flex items-center justify-center text-blue-600 mr-4 mt-1"></i>
                <div>
                  <div className="font-semibold text-gray-900">Instant Payment</div>
                  <div className="text-gray-600">Cash paid on the spot. No waiting for checks to clear or bank transfers to process.</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form id="contact-form" onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Quote</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                  <input
                    type="number"
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    placeholder="2010"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="make" className="block text-sm font-medium text-gray-700 mb-2">Make</label>
                  <input
                    type="text"
                    id="make"
                    name="make"
                    value={formData.make}
                    onChange={handleChange}
                    placeholder="Toyota"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-2">Model</label>
                  <input
                    type="text"
                    id="model"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    placeholder="Camry"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="condition" className="block text-sm font-medium text-gray-700 mb-2">Vehicle Condition</label>
                <div className="relative">
                  <select
                    id="condition"
                    name="condition"
                    value={formData.condition}
                    onChange={handleChange}
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                    required
                  >
                    <option value="">Select condition</option>
                    <option value="running">Running (drives but may have issues)</option>
                    <option value="not-running">Not Running (doesn't start)</option>
                    <option value="damaged">Damaged (accident, flood, etc.)</option>
                    <option value="parts-only">Parts Only (severely damaged)</option>
                  </select>
                  <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 flex items-center justify-center pointer-events-none"></i>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  maxLength={500}
                  placeholder="Tell us more about your vehicle's condition, location, or any special circumstances..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                ></textarea>
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.message.length}/500 characters
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                Get My Free Quote Now
              </button>

              {isSubmitted && (
                <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded-lg">
                  <div className="flex items-center">
                    <i className="ri-check-circle-fill w-5 h-5 flex items-center justify-center text-green-600 mr-2"></i>
                    <span className="text-green-800">Thank you! We'll contact you within 30 minutes with your quote.</span>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
