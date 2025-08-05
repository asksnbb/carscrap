
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: January 2024
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose max-w-none">
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
                <p className="text-gray-700 mb-4">
                  By accessing or using CashCars services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
                </p>
                <p className="text-gray-700 mb-4">
                  CashCars is a licensed automotive recycling business authorized by the Ministry of Road Transport & Highways and certified by the Pollution Control Board.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Services Provided</h2>
                <p className="text-gray-700 mb-4">
                  CashCars provides the following services:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Vehicle valuation and quote services</li>
                  <li>End-of-life vehicle scrapping and recycling</li>
                  <li>Free vehicle pickup and towing</li>
                  <li>Documentation assistance for vehicle transfer</li>
                  <li>RC cancellation and NOC processing</li>
                  <li>Certificate of Destruction issuance</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Obligations</h2>
                <p className="text-gray-700 mb-4">
                  As a customer, you agree to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Provide accurate and complete vehicle information</li>
                  <li>Hold legal title to the vehicle being scrapped</li>
                  <li>Remove all personal belongings from the vehicle</li>
                  <li>Provide necessary documentation (RC, insurance, etc.)</li>
                  <li>Be present or authorize a representative during pickup</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Pricing and Payment</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Quote Validity:</strong> All quotes are valid for 7 days from the date of issue. Final pricing may vary based on actual vehicle condition during inspection.
                  </p>
                  <p>
                    <strong>Payment Terms:</strong> Payment is made upon vehicle pickup after final inspection and documentation completion. We offer multiple payment methods including cash, bank transfer, and digital payments.
                  </p>
                  <p>
                    <strong>Price Adjustments:</strong> Final price may be adjusted if vehicle condition significantly differs from the information provided during quote request.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Vehicle Pickup and Transfer</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Pickup Service:</strong> Free pickup is provided within our service area. Additional charges may apply for locations beyond standard coverage.
                  </p>
                  <p>
                    <strong>Title Transfer:</strong> Vehicle ownership must be legally transferred to CashCars before processing. We assist with all necessary paperwork.
                  </p>
                  <p>
                    <strong>Vehicle Condition:</strong> Vehicles are accepted in any condition. However, hazardous modifications or illegal alterations may result in additional processing fees.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Environmental Compliance</h2>
                <p className="text-gray-700 mb-4">
                  CashCars operates in full compliance with environmental regulations:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>All fluids are drained and disposed of according to PCB guidelines</li>
                  <li>Hazardous materials are handled by certified professionals</li>
                  <li>Material recovery follows scientific recycling processes</li>
                  <li>Environmental compliance certificates are provided</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  CashCars' liability is limited to the agreed purchase price of the vehicle. We are not responsible for:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Personal belongings left in the vehicle</li>
                  <li>Indirect or consequential damages</li>
                  <li>Delays due to weather or circumstances beyond our control</li>
                  <li>Third-party claims related to the scrapped vehicle</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellation Policy</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Customer Cancellation:</strong> You may cancel the service up to 2 hours before scheduled pickup without penalty. Late cancellations may incur a service fee.
                  </p>
                  <p>
                    <strong>CashCars Cancellation:</strong> We reserve the right to refuse service for vehicles with legal issues, safety hazards, or incomplete documentation.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>
                <p className="text-gray-700 mb-4">
                  Any disputes arising from our services will be resolved through:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Direct negotiation with our customer service team</li>
                  <li>Mediation by a neutral third party if required</li>
                  <li>Jurisdiction of courts in [Your City/State] for legal proceedings</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  For questions about these Terms of Service, contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <i className="ri-phone-fill w-5 h-5 flex items-center justify-center text-blue-600 mr-3"></i>
                      <span>Phone: (123) 456-7890</span>
                    </div>
                    <div className="flex items-center">
                      <i className="ri-mail-fill w-5 h-5 flex items-center justify-center text-blue-600 mr-3"></i>
                      <span>Email: legal@cashcars.com</span>
                    </div>
                    <div className="flex items-center">
                      <i className="ri-time-fill w-5 h-5 flex items-center justify-center text-blue-600 mr-3"></i>
                      <span>Business Hours: Monday-Friday 8AM-7PM, Weekend 9AM-5PM</span>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                <p className="text-gray-700 mb-4">
                  We reserve the right to modify these terms at any time. Material changes will be communicated to customers via email or website notification. Continued use of our services constitutes acceptance of updated terms.
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
