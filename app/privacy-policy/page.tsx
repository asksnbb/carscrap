
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: January 2024
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose max-w-none">
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <p className="text-gray-700 mb-4">
                  At CashCars, we collect information you provide directly to us when you:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Request a quote for your vehicle</li>
                  <li>Schedule a pickup appointment</li>
                  <li>Contact us through our website or phone</li>
                  <li>Sign documents for vehicle transfer</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  This information may include your name, phone number, email address, vehicle details (make, model, year, VIN), and location information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Provide vehicle valuation and quotes</li>
                  <li>Schedule and coordinate vehicle pickup</li>
                  <li>Process vehicle transfer documentation</li>
                  <li>Communicate with you about our services</li>
                  <li>Comply with legal requirements and regulations</li>
                  <li>Improve our services and customer experience</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
                <p className="text-gray-700 mb-4">
                  We may share your information with:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li><strong>Government Agencies:</strong> RTO authorities for vehicle registration cancellation and compliance</li>
                  <li><strong>Service Partners:</strong> Authorized towing and transportation companies</li>
                  <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Secure data transmission protocols</li>
                  <li>Restricted access to personal information</li>
                  <li>Regular security assessments and updates</li>
                  <li>Secure document storage and disposal</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <p className="text-gray-700 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Access your personal information we hold</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information (subject to legal requirements)</li>
                  <li>Opt-out of marketing communications</li>
                  <li>File a complaint about our privacy practices</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Website Data</h2>
                <p className="text-gray-700 mb-4">
                  Our website uses cookies and similar technologies to improve your browsing experience, analyze website traffic, and personalize content. You can control cookie preferences through your browser settings.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <i className="ri-phone-fill w-5 h-5 flex items-center justify-center text-blue-600 mr-3"></i>
                      <span>Phone: (123) 456-7890</span>
                    </div>
                    <div className="flex items-center">
                      <i className="ri-mail-fill w-5 h-5 flex items-center justify-center text-blue-600 mr-3"></i>
                      <span>Email: privacy@cashcars.com</span>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-map-pin-fill w-5 h-5 flex items-center justify-center text-blue-600 mr-3 mt-1"></i>
                      <span>Address: CashCars Privacy Officer<br/>123 Business District<br/>Your City, State 12345</span>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                <p className="text-gray-700 mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
                </p>
              </section>

            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
