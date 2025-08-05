
'use client';

export default function Services() {
  const services = [
    {
      icon: 'ri-car-fill',
      title: 'End of Life Vehicle (ELV) Scrapping',
      description: 'Complete vehicle dismantling and recycling service for cars that have reached their end of life. We ensure maximum material recovery and proper disposal of hazardous components.',
      features: ['Government certified process', 'Certificate of Destruction', 'Material recovery up to 95%', 'Hazardous waste disposal']
    },
    {
      icon: 'ri-money-rupee-circle-fill',
      title: 'Instant Cash for Cars',
      description: 'Get the best market price for your old vehicle with instant payment. Our evaluation process considers current scrap metal rates and usable parts value.',
      features: ['Market-based pricing', 'Instant cash payment', 'No hidden charges', 'Price matching guarantee']
    },
    {
      icon: 'ri-truck-fill',
      title: 'Free Vehicle Collection',
      description: 'Complimentary pickup service from your location with all necessary equipment. Our trained team handles the entire collection process safely and efficiently.',
      features: ['Doorstep pickup service', 'Professional handling', 'No collection charges', 'Same day service available']
    },
    {
      icon: 'ri-file-text-fill',
      title: 'Complete Paperwork Assistance',
      description: 'We handle all legal formalities including RC cancellation, NOC from RTO, and provide all necessary certificates for your peace of mind.',
      features: ['RC cancellation support', 'RTO documentation', 'Legal compliance', 'Certificate provision']
    },
    {
      icon: 'ri-tools-fill',
      title: 'Spare Parts Recovery',
      description: 'Systematic extraction and cataloging of reusable automotive parts. These parts undergo quality testing before being made available for resale.',
      features: ['Quality tested parts', 'Inventory management', 'Parts authentication', 'Warranty coverage']
    },
    {
      icon: 'ri-leaf-fill',
      title: 'Environmental Compliance',
      description: 'Eco-friendly disposal following all environmental norms. We ensure proper treatment of fluids, batteries, and other hazardous materials.',
      features: ['Zero liquid discharge', 'Pollution Control Board certified', 'Hazmat handling', 'Environmental reporting']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Car Scrapping Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From vehicle collection to final recycling, we provide end-to-end automotive scrapping services that are environmentally responsible and financially rewarding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <i className={`${service.icon} w-8 h-8 flex items-center justify-center text-blue-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <i className="ri-check-fill w-4 h-4 flex items-center justify-center text-green-600 mr-3"></i>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Need Custom Scrapping Solution?</h3>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            We provide tailored services for fleet owners, insurance companies, and bulk vehicle disposal requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors whitespace-nowrap">
              Request Custom Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
