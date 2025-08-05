
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Sitemap() {
  const sitemapSections = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', href: '/', description: 'Get instant cash for your scrap car' },
        { name: 'About Us', href: '/#about', description: 'Learn about our 13+ years of experience' },
        { name: 'Services', href: '/#services', description: 'Complete car scrapping solutions' },
        { name: 'How It Works', href: '/#how-it-works', description: 'Simple 4-step scrapping process' },
        { name: 'Why Choose Us', href: '/#why-choose-us', description: 'Why we\'re India\'s #1 choice' },
        { name: 'Testimonials', href: '/#testimonials', description: 'Customer reviews and experiences' },
        { name: 'Contact', href: '/#contact', description: 'Get your free quote today' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Scrap Car Removal', href: '/#services', description: 'Professional vehicle pickup service' },
        { name: 'Cash for Junk Cars', href: '/#services', description: 'Instant cash for old vehicles' },
        { name: 'Free Car Towing', href: '/#services', description: 'Complimentary towing service' },
        { name: 'Auto Recycling', href: '/#services', description: 'Eco-friendly vehicle disposal' },
        { name: 'Title Transfer Help', href: '/#services', description: 'Complete paperwork assistance' },
        { name: 'ELV Scrapping', href: '/#services', description: 'End-of-life vehicle processing' }
      ]
    },
    {
      title: 'Service Areas',
      links: [
        { name: 'Mumbai Car Scrapping', href: '/#contact', description: 'Scrap car services in Mumbai' },
        { name: 'Delhi NCR Vehicle Disposal', href: '/#contact', description: 'Car removal in Delhi region' },
        { name: 'Bangalore Auto Recycling', href: '/#contact', description: 'Vehicle scrapping in Bangalore' },
        { name: 'Chennai Car Removal', href: '/#contact', description: 'Scrap car pickup in Chennai' },
        { name: 'Pune Vehicle Scrapping', href: '/#contact', description: 'Car disposal services in Pune' },
        { name: 'Hyderabad Auto Disposal', href: '/#contact', description: 'Vehicle recycling in Hyderabad' }
      ]
    },
    {
      title: 'Legal & Information',
      links: [
        { name: 'Privacy Policy', href: '/privacy-policy', description: 'How we protect your information' },
        { name: 'Terms of Service', href: '/terms-of-service', description: 'Our service terms and conditions' },
        { name: 'Sitemap', href: '/sitemap', description: 'Complete website navigation' }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Website Sitemap
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete navigation guide to all pages and services on CashCars website. Find everything you need about our car scrapping and recycling services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sitemapSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-folder-fill w-6 h-6 flex items-center justify-center text-blue-600"></i>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <div key={linkIndex} className="border-l-4 border-blue-200 pl-4 hover:border-blue-500 transition-colors">
                      <Link href={link.href} className="block group">
                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                          {link.name}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{link.description}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Need Help Finding Something?</h3>
              <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
                Can't find what you're looking for? Our customer support team is ready to help you with any questions about our car scrapping services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact">
                  <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors whitespace-nowrap">
                    Get Free Quote
                  </button>
                </Link>
                <Link href="tel:123-456-7890">
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap">
                    Call: (123) 456-7890
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Navigation</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm">
              <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">Home</Link>
              <Link href="/#about" className="text-blue-600 hover:text-blue-800 font-medium">About</Link>
              <Link href="/#services" className="text-blue-600 hover:text-blue-800 font-medium">Services</Link>
              <Link href="/#how-it-works" className="text-blue-600 hover:text-blue-800 font-medium">Process</Link>
              <Link href="/#why-choose-us" className="text-blue-600 hover:text-blue-800 font-medium">Benefits</Link>
              <Link href="/#testimonials" className="text-blue-600 hover:text-blue-800 font-medium">Reviews</Link>
              <Link href="/#contact" className="text-blue-600 hover:text-blue-800 font-medium">Contact</Link>
              <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-800 font-medium">Privacy</Link>
              <Link href="/terms-of-service" className="text-blue-600 hover:text-blue-800 font-medium">Terms</Link>
            </div>
          </div>

          <div className="mt-8 text-center text-gray-600">
            <p className="mb-2">
              <strong>Service Areas:</strong> Mumbai, Delhi NCR, Bangalore, Chennai, Pune, Hyderabad, and 45+ cities across India
            </p>
            <p>
              <strong>Business Hours:</strong> Monday-Friday 8AM-7PM, Saturday-Sunday 9AM-5PM
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
