import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'What documents are required for property registration?',
    answer: 'The typical documents required include sale deed, title documents, identity proof, property tax receipts, and NOCs from relevant authorities.'
  },
  {
    question: 'How long does the property registration process take?',
    answer: 'With our streamlined processes, most property registrations can be completed within 7-14 working days, depending on the complexity.'
  },
  {
    question: 'What are the charges for your services?',
    answer: 'Our service charges vary based on the type of service and complexity of the case. We offer transparent pricing with no hidden charges.'
  }
];

export default function HomeFAQ() {
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
        current + 1 >= faqs.length - (itemsPerView - 1) ? 0 : current + 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const previous = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((current) =>
        current === 0 ? faqs.length - itemsPerView : current - 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Common Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Quick answers to frequently asked questions about our services.
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
              {faqs.map((faq, index) => (
                <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white h-full p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <h3 className="text-xl font-semibold mb-4">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">
                      {faq.answer}
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
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center text-primary-teal hover:text-primary-red transition-colors duration-200"
          >
            View All FAQs
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}