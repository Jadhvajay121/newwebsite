import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, StarHalf } from 'lucide-react';

const testimonials = [
  {
    text: 'Om Estate Services made my property registration process incredibly smooth. Their team handled all the paperwork and legal procedures efficiently, saving me a lot of time and hassle.',
    author: 'Laxman Varak',
    role: 'Property Owner',
    rating: 5,
  },
  {
    text: 'I was worried about the complexity of property registration, but Om Estate Services guided me through every step. Their expertise and professionalism are commendable.',
    author: 'Monica Doshi',
    role: 'First-time Homebuyer',
    rating: 5,
  },
  {
    text: 'As a real estate developer, I have worked with many service providers, but Om Estate Services stands out for their meticulous attention to detail and prompt service delivery.',
    author: 'Vikram Mehra',
    role: 'Real Estate Developer',
    rating: 4.5,
  },
  {
    text: 'The team at Om Estate Services is exceptional. They made the entire property documentation process seamless and stress-free.',
    author: 'Mandar Jadhav',
    role: 'Residential Property Owner',
    rating: 5,
  },
  {
    text: "Professional, punctual, and precise - that's how I would describe Om Estate Services. They handled my commercial property registration flawlessly.",
    author: 'Suresh Kumar',
    role: 'Business Owner',
    rating: 5,
  },
  {
    text: 'Their knowledge of property laws and registration procedures is impressive. They saved me from potential legal complications.',
    author: 'Meera Singh',
    role: 'Investment Consultant',
    rating: 4.5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const itemsPerView = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const next = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((current) =>
        current + 1 >= testimonials.length - (itemsPerView - 1)
          ? 0
          : current + 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const previous = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((current) =>
        current === 0 ? testimonials.length - itemsPerView : current - 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about our services.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className={`flex transition-transform duration-500 ease-in-out transform`}
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-gray-50 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="flex mb-4">
                      {[...Array(Math.floor(testimonial.rating))].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current"
                          />
                        )
                      )}
                      {testimonial.rating % 1 !== 0 && (
                        <StarHalf className="w-5 h-5 text-yellow-400 fill-current" />
                      )}
                    </div>
                    <p className="text-gray-600 italic mb-6">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary-teal/10 rounded-full flex items-center justify-center text-primary-teal font-semibold">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="font-semibold text-gray-900">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-gray-500">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={previous}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all duration-300 focus:outline-none transform hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-primary-teal" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all duration-300 focus:outline-none transform hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-primary-teal" />
          </button>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({
              length: testimonials.length - (itemsPerView - 1),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-primary-teal w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
