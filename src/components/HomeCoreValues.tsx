import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, Target, Users, BookOpen, Clock, CheckSquare } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We uphold the highest standards of honesty and ethical conduct in all our dealings, ensuring transparency and trust.'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in every aspect of our service, constantly improving and innovating to deliver the best results.'
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'Our clients are at the center of everything we do. We listen, understand, and deliver solutions tailored to their unique needs.'
  },
  {
    icon: BookOpen,
    title: 'Expertise',
    description: 'We maintain deep knowledge of property laws and regulations, ensuring accurate and up-to-date guidance for all clients.'
  },
  {
    icon: Clock,
    title: 'Efficiency',
    description: 'We value our clients\' time and work diligently to complete all processes efficiently without compromising on quality.'
  },
  {
    icon: CheckSquare,
    title: 'Accountability',
    description: 'We take ownership of our actions and responsibilities, ensuring reliability and dependability in all our commitments.'
  }
];

export default function HomeCoreValues() {
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
        current + 1 >= values.length - (itemsPerView - 1) ? 0 : current + 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const previous = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((current) =>
        current === 0 ? values.length - itemsPerView : current - 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These principles guide everything we do, from how we serve our clients to how we build our team.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out transform"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {values.map((value, index) => (
                <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-gray-50 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="w-16 h-16 mx-auto mb-6 bg-primary-teal/10 rounded-full flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-primary-teal" />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {value.description}
                    </p>
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

          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: values.length - (itemsPerView - 1) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'bg-primary-teal w-6' : 'bg-gray-300'
                  }`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}