
'use client';

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: 'ri-shield-check-fill',
      title: 'Government Authorized',
      description: 'Licensed by Ministry of Road Transport & Highways with all necessary permits and certifications.',
      color: 'blue'
    },
    {
      icon: 'ri-money-rupee-circle-fill',
      title: 'Best Price Guarantee',
      description: 'Market-competitive rates with price matching guarantee. No hidden charges or deductions.',
      color: 'green'
    },
    {
      icon: 'ri-truck-fill',
      title: 'Free Doorstep Service',
      description: 'Complimentary vehicle pickup from anywhere within the city limits. No transportation costs.',
      color: 'orange'
    },
    {
      icon: 'ri-time-fill',
      title: '24-Hour Processing',
      description: 'Complete the entire scrapping process within 24 hours from pickup to payment receipt.',
      color: 'purple'
    },
    {
      icon: 'ri-file-shield-fill',
      title: 'Complete Documentation',
      description: 'Handle all paperwork including RC cancellation and provide Certificate of Destruction.',
      color: 'red'
    },
    {
      icon: 'ri-customer-service-fill',
      title: 'Professional Support',
      description: 'Dedicated customer support team available 7 days a week to assist with all your queries.',
      color: 'indigo'
    }
  ];

  const certifications = [
    { name: 'MoRTH Licensed', description: 'Ministry of Road Transport & Highways' },
    { name: 'PCB Certified', description: 'Pollution Control Board Approved' },
    { name: 'ISO 14001', description: 'Environmental Management System' },
    { name: 'OHSAS 18001', description: 'Occupational Health & Safety' }
  ];

  const getColorClasses = (color: string) => {
    const colors: {[key: string]: {bg: string, text: string, hover: string}} = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', hover: 'hover:bg-blue-200' },
      green: { bg: 'bg-green-100', text: 'text-green-600', hover: 'hover:bg-green-200' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', hover: 'hover:bg-orange-200' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', hover: 'hover:bg-purple-200' },
      red: { bg: 'bg-red-100', text: 'text-red-600', hover: 'hover:bg-red-200' },
      indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', hover: 'hover:bg-indigo-200' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why CashCars is India's #1 Choice
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by over 15,000 customers across India, we provide transparent, efficient, and environmentally responsible vehicle scrapping services with unmatched customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const colorClasses = getColorClasses(benefit.color);
            return (
              <div key={index} className={`bg-gray-50 rounded-xl p-8 ${colorClasses.hover} transition-all duration-300 hover:shadow-lg`}>
                <div className={`${colorClasses.bg} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                  <i className={`${benefit.icon} w-8 h-8 flex items-center justify-center ${colorClasses.text}`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Licensed & Certified Operations</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our facility operates under strict government guidelines and environmental standards. All certifications are regularly audited and renewed to ensure compliance.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <i className="ri-award-fill w-6 h-6 flex items-center justify-center text-yellow-400 mr-3"></i>
                    <div>
                      <div className="font-semibold">{cert.name}</div>
                      <div className="text-sm text-gray-400">{cert.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
                <div className="text-sm text-gray-300">Customer Satisfaction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-sm text-gray-300">Support Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-sm text-gray-300">Cities Covered</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">Zero</div>
                <div className="text-sm text-gray-300">Hidden Charges</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
