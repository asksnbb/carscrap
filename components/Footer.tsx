
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-['Pacifico'] text-blue-400 mb-4">
              Scrap Gaadi
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for scrap car removal and automotive recycling. Turn your unwanted vehicle into instant cash today.
            </p>
            <div className="flex space-x-4">
              <i className="ri-facebook-fill w-6 h-6 flex items-center justify-center text-blue-400 hover:text-blue-300 cursor-pointer"></i>
              <i className="ri-twitter-fill w-6 h-6 flex items-center justify-center text-blue-400 hover:text-blue-300 cursor-pointer"></i>
              <i className="ri-instagram-line w-6 h-6 flex items-center justify-center text-blue-400 hover:text-blue-300 cursor-pointer"></i>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-gray-300 hover:text-white cursor-pointer">About Us</Link></li>
              <li><Link href="#services" className="text-gray-300 hover:text-white cursor-pointer">Services</Link></li>
              <li><Link href="#how-it-works" className="text-gray-300 hover:text-white cursor-pointer">How It Works</Link></li>
              <li><Link href="#testimonials" className="text-gray-300 hover:text-white cursor-pointer">Reviews</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Scrap Car Removal</li>
              <li>Cash for Junk Cars</li>
              <li>Free Car Towing</li>
              <li>Auto Recycling</li>
              <li>Title Transfer Help</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <i className="ri-phone-fill w-5 h-5 flex items-center justify-center mr-3"></i>
                <a className="text-gray-300" href='tel:+919210450410'>9210 450 410</a>
              </div>
              <div className="flex items-center">
                <i className="ri-mail-fill w-5 h-5 flex items-center justify-center mr-3"></i>
                <span className="text-gray-300">scrabgaadi14@gmail.com</span>
              </div>
              <div className="flex items-start">
                <i className="ri-map-pin-fill w-5 h-5 flex items-center justify-center mr-3 mt-1"></i>
                <span className="text-gray-300">Serving entire metro area<br/>Free pickup within 50 miles</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2025 CashCars. All rights reserved. Licensed auto recycling business.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-300 hover:text-white cursor-pointer">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-gray-300 hover:text-white cursor-pointer">Terms of Service</Link>
              <Link href="/sitemap" className="text-gray-300 hover:text-white cursor-pointer">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
