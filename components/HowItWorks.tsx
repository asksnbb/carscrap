
'use client';

import Link from "next/link";

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Get Instant Valuation',
      description: 'Share your vehicle details through our online form or call us directly. Our experts will provide you with an instant quote based on current market rates and your car\'s condition.',
      icon: 'ri-search-fill',
      details: ['Vehicle inspection checklist', 'Market rate analysis', 'Instant quote generation', 'No obligation assessment']
    },
    {
      number: '02',
      title: 'Schedule Free Pickup',
      description: 'Once you accept our offer, schedule a convenient pickup time. Our certified team will visit your location with all necessary equipment and documentation.',
      icon: 'ri-calendar-fill',
      details: ['Flexible timing options', 'Professional collection team', 'All equipment provided', 'Doorstep convenience']
    },
    {
      number: '03',
      title: 'Vehicle Inspection & Documentation',
      description: 'Our team will conduct a final inspection, complete all legal paperwork, and initiate the RC cancellation process with local RTO authorities.',
      icon: 'ri-file-check-fill',
      details: ['Final condition assessment', 'RC cancellation initiation', 'Legal compliance check', 'Document verification']
    },
    {
      number: '04',
      title: 'Instant Payment & Certificate',
      description: 'Receive immediate payment through your preferred method and get a Certificate of Destruction for your records. The entire process is completed within 24 hours.',
      icon: 'ri-money-dollar-circle-fill',
      details: ['Multiple payment options', 'Certificate of Destruction', '24-hour completion', 'Receipt and documentation']
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Simple 4-Step Vehicle Scrapping Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From initial quote to final payment, our streamlined process ensures a hassle-free experience with complete transparency and legal compliance.
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 hidden lg:block" style={{transform: 'translateY(-50%)'}}></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative z-10">
                  <div className="text-center mb-6">
                    <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      {step.number}
                    </div>
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className={`${step.icon} w-6 h-6 flex items-center justify-center text-blue-600`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 text-center mb-6 leading-relaxed">{step.description}</p>
                  
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center">
                        <i className="ri-check-fill w-4 h-4 flex items-center justify-center text-green-600 mr-3"></i>
                        <span className="text-sm text-gray-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have chosen our professional car scrapping service. Get your instant quote today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap">
              Get Instant Quote
            </Link>
            <a href="tel:+919210450410" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors whitespace-nowrap">
              Call: 9210 450 410
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
