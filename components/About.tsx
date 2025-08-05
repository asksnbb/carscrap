
'use client';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Choose CashCars for Your Vehicle Disposal?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are India's most trusted car scrapping company with over 13 years of experience in automotive recycling. Our certified processes ensure maximum value for your vehicle while maintaining environmental compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Authorized Vehicle Scrapping Facility
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4 mt-1">
                  <i className="ri-shield-check-fill w-6 h-6 flex items-center justify-center text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Government Authorized</h4>
                  <p className="text-gray-600">Licensed by Ministry of Road Transport & Highways with all necessary permits for vehicle scrapping and recycling operations.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4 mt-1">
                  <i className="ri-recycle-fill w-6 h-6 flex items-center justify-center text-green-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Scientific Recycling</h4>
                  <p className="text-gray-600">Advanced dismantling process that recovers 95% of materials including steel, aluminum, plastics, and precious metals from catalytic converters.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4 mt-1">
                  <i className="ri-file-shield-fill w-6 h-6 flex items-center justify-center text-orange-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Complete Documentation</h4>
                  <p className="text-gray-600">We handle all paperwork including RC cancellation, NOC from RTO, and provide Certificate of Destruction for your records.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20automotive%20recycling%20team%20in%20safety%20gear%20working%20at%20modern%20car%20scrapyard%20facility%2C%20workers%20dismantling%20vehicles%20for%20parts%20recovery%2C%20clean%20industrial%20environment%20with%20organized%20operations%2C%20eco-friendly%20car%20disposal%20process%2C%20professional%20staff%20with%20safety%20equipment&width=600&height=400&seq=about-team&orientation=landscape"
              alt="Professional car recycling team"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15,000+</div>
              <div className="text-gray-600 font-medium">Vehicles Scrapped</div>
              <div className="text-sm text-gray-500 mt-1">Since 2010</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Cities Covered</div>
              <div className="text-sm text-gray-500 mt-1">Pan India Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">24 Hrs</div>
              <div className="text-gray-600 font-medium">Quick Processing</div>
              <div className="text-sm text-gray-500 mt-1">Fast Turnaround</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600 font-medium">Material Recovery</div>
              <div className="text-sm text-gray-500 mt-1">Zero Waste Goal</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
