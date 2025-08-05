
'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white min-h-[700px] flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.8), rgba(29, 78, 216, 0.8)), url('https://readdy.ai/api/search-image?query=Professional%20car%20scrapyard%20with%20organized%20stacks%20of%20recycled%20vehicles%2C%20modern%20automotive%20recycling%20facility%20with%20clean%20environment%2C%20industrial%20setting%20with%20blue%20sky%20background%2C%20eco-friendly%20car%20disposal%20business%2C%20organized%20metal%20recycling%20yard%20with%20cranes%20and%20machinery&width=1200&height=600&seq=hero-scrap&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <div className="container mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              India's #1 Trusted Car Scrap Removal Service
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Get maximum cash for your old, damaged, or unwanted vehicle. We provide hassle-free car removal services across all major cities with instant payment, free pickup, and proper documentation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="#contact" className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors cursor-pointer whitespace-nowrap text-center">
                Get Instant Quote
              </Link>
              <Link href="tel:+919971885255" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap text-center">
                Call Now: 9971 885 255
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <i className="ri-money-dollar-circle-fill w-8 h-8 flex items-center justify-center mr-3 text-green-400"></i>
                <div>
                  <div className="font-semibold text-lg">Best Price Guaranteed</div>
                  <div className="text-blue-100">Up to ₹5 Lakh for your car</div>
                </div>
              </div>
              <div className="flex items-center">
                <i className="ri-truck-fill w-8 h-8 flex items-center justify-center mr-3 text-green-400"></i>
                <div>
                  <div className="font-semibold text-lg">Free Doorstep Pickup</div>
                  <div className="text-blue-100">Same day collection</div>
                </div>
              </div>
              <div className="flex items-center">
                <i className="ri-file-text-fill w-8 h-8 flex items-center justify-center mr-3 text-green-400"></i>
                <div>
                  <div className="font-semibold text-lg">Complete Paperwork</div>
                  <div className="text-blue-100">Legal RC cancellation</div>
                </div>
              </div>
              <div className="flex items-center">
                <i className="ri-leaf-fill w-8 h-8 flex items-center justify-center mr-3 text-green-400"></i>
                <div>
                  <div className="font-semibold text-lg">Eco-Friendly Process</div>
                  <div className="text-blue-100">100% green recycling</div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Quick Price Calculator</h3>
              <div className="space-y-4">
                <input type="text" placeholder="Enter your car brand" className="w-full px-4 py-3 rounded-lg text-gray-900" />
                <input type="text" placeholder="Car model" className="w-full px-4 py-3 rounded-lg text-gray-900" />
                <input type="number" placeholder="Manufacturing year" className="w-full px-4 py-3 rounded-lg text-gray-900" />
                <select className="w-full px-4 py-3 rounded-lg text-gray-900 pr-8">
                  <option>Select condition</option>
                  <option>Excellent</option>
                  <option>Good</option>
                  <option>Fair</option>
                  <option>Poor</option>
                </select>
                <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                  Get Instant Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
