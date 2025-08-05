
'use client';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Mumbai, Maharashtra',
      vehicle: '2008 Maruti Swift',
      // amount: '₹85,000',
      rating: 5,
      comment: 'Extremely professional service! They handled everything from documentation to pickup. Got the best price in the market and the entire process was completed in just one day. Highly recommend CashCars!',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20businessman%20in%20formal%20attire%20smiling%20confidently%2C%20middle-aged%20male%20with%20clean%20appearance%2C%20corporate%20headshot%20style%20photo%2C%20friendly%20demeanor%20against%20neutral%20background&width=100&height=100&seq=customer-rajesh&orientation=squarish'
    },
    {
      name: 'Priya Sharma',
      location: 'Delhi NCR',
      vehicle: '2010 Honda City',
      // amount: '₹1,25,000',
      rating: 5,
      comment: 'I was worried about the paperwork hassles, but CashCars team handled everything smoothly. They even helped with RC cancellation and provided all certificates. Excellent customer service and fair pricing.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20businesswoman%20smiling%20warmly%2C%20well-dressed%20female%20professional%20in%20corporate%20attire%2C%20confident%20and%20friendly%20expression%2C%20clean%20headshot%20against%20simple%20background&width=100&height=100&seq=customer-priya&orientation=squarish'
    },
    {
      name: 'Amit Patel',
      location: 'Ahmedabad, Gujarat',
      vehicle: '2006 Hyundai Santro',
      // amount: '₹45,000',
      rating: 5,
      comment: 'My car was in very poor condition, but they still offered a fair price. Free pickup service was very convenient. The team was punctual and professional. Will definitely recommend to others!',
      image: 'https://readdy.ai/api/search-image?query=Cheerful%20Indian%20man%20in%20casual%20business%20attire%2C%20friendly%20smile%20and%20approachable%20personality%2C%20middle-aged%20professional%20with%20positive%20demeanor%2C%20headshot%20style%20photograph&width=100&height=100&seq=customer-amit&orientation=squarish'
    },
    {
      name: 'Deepika Singh',
      location: 'Bangalore, Karnataka',
      vehicle: '2012 Toyota Corolla',
      // amount: '₹2,15,000',
      rating: 5,
      comment: 'Outstanding experience! They provided instant quote online, same-day pickup, and immediate payment. The environmental compliance certificate gave me peace of mind. Truly professional service.',
      image: 'https://readdy.ai/api/search-image?query=Elegant%20Indian%20woman%20professional%20with%20warm%20smile%2C%20contemporary%20business%20attire%2C%20confident%20and%20trustworthy%20appearance%2C%20clean%20portrait%20style%20photo%20against%20neutral%20backdrop&width=100&height=100&seq=customer-deepika&orientation=squarish'
    },
    {
      name: 'Suresh Reddy',
      location: 'Hyderabad, Telangana',
      vehicle: '2009 Tata Indica',
      // amount: '₹55,000',
      rating: 5,
      comment: 'Had multiple quotes from different companies, but CashCars offered the best price with transparent evaluation. No hidden charges and all promises were kept. Great experience overall!',
      image: 'https://readdy.ai/api/search-image?query=Distinguished%20Indian%20gentleman%20in%20professional%20attire%2C%20confident%20businessman%20with%20friendly%20demeanor%2C%20mature%20professional%20with%20trustworthy%20appearance%2C%20headshot%20photography%20style&width=100&height=100&seq=customer-suresh&orientation=squarish'
    },
    {
      name: 'Kavita Joshi',
      location: 'Pune, Maharashtra',
      vehicle: '2007 Ford Figo',
      // amount: '₹65,000',
      rating: 5,
      comment: 'The team was very knowledgeable and explained the entire process clearly. They handled the RTO paperwork efficiently and provided regular updates. Stress-free experience from start to finish.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20woman%20with%20pleasant%20smile%2C%20business%20casual%20attire%2C%20approachable%20and%20confident%20personality%2C%20clean%20corporate%20headshot%20style%20against%20simple%20background&width=100&height=100&seq=customer-kavita&orientation=squarish'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`ri-star-${i < rating ? 'fill' : 'line'} w-4 h-4 flex items-center justify-center ${
          i < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      ></i>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Over 15,000 satisfied customers across India have trusted us with their vehicle scrapping needs. Here's what they have to say about our service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  <div className="flex mt-1">{renderStars(testimonial.rating)}</div>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.comment}"</p>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Vehicle: {testimonial.vehicle}</span>
                  {/* <span className="font-bold text-green-600 text-lg">{testimonial.amount}</span> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15,000+</div>
              <div className="text-gray-600 font-medium">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">4.9/5</div>
              <div className="text-gray-600 font-medium">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">24 Hrs</div>
              <div className="text-gray-600 font-medium">Average Processing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
