
'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-['Pacifico'] text-blue-600">
              CashCars
            </Link>
            <span className="ml-3 text-sm text-gray-500 hidden md:block">India's #1 Car Scrapping Service</span>
          </div>
          
          <nav className="hidden lg:flex space-x-8">
            <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">
              About Us
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">
              Services
            </Link>
            <Link href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">
              How It Works
            </Link>
            <Link href="#why-choose-us" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">
              Why Choose Us
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">
              Reviews
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href='tel:+919971885255' className="hidden md:flex items-center text-blue-600 font-semibold hover:text-blue-700">
              <i className="ri-phone-fill w-5 h-5 flex items-center justify-center mr-2"></i>
              9971 885 255 
            </Link>
            <Link href="#contact" className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors cursor-pointer whitespace-nowrap font-semibold">
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
