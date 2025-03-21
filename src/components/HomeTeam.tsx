import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const team = [
  {
    name: 'Vaibhav',
    role: 'CEO & MD',
    image: 'https://imgur.com/kp5G6YK.png',
    bio: 'With over 20 years of experience in real estate and property registration, Vaibhav founded Om Estate Services to simplify property transactions for clients across India.'
  },
  {
    name: 'Nilam',
    role: 'Vice President',
    image: 'https://i.imgur.com/yLZ135P.png',
    bio: 'Nilam, as Vice President, brings extensive leadership and strategic planning to Om Estate Services, focusing on driving growth and operational efficiency.'
  },
  {
    name: 'Vinod',
    role: 'Field Operations',
    image: 'https://i.imgur.com/DmM9Xtg.png',
    bio: 'Vinod, in Field Operations, ensures smooth and efficient on-site operations, managing property visits and client interactions with expertise.'
  },
  {
    name: 'Sharayu',
    role: 'Administration',
    image: 'https://i.imgur.com/2xmBT6v.png',
    bio: 'Sharayu handles administrative tasks, ensuring smooth office operations and efficient record-keeping.'
  },
  {
    name: 'Prathamesh',
    role: 'Field Operations',
    image: 'https://i.imgur.com/nSLkUaf.png',
    bio: 'Prathamesh excels in field operations, providing on-site support and managing property-related activities.'
  }
];

export default function HomeTeam() {
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
        current + 1 >= team.length - (itemsPerView - 1) ? 0 : current + 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const previous = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((current) =>
        current === 0 ? team.length - itemsPerView : current - 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our dedicated professionals are committed to making your property
            registration process seamless and hassle-free.
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
              {team.map((member, index) => (
                <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-gray-50 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2">
                      {member.name}
                    </h3>
                    <div className="text-primary-teal text-center mb-4">
                      {member.role}
                    </div>
                    <p className="text-gray-600 text-center text-sm">
                      {member.bio}
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

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: team.length - (itemsPerView - 1) }).map(
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

        <div className="text-center mt-12">
          <Link
            to="/team"
            className="inline-flex items-center text-primary-teal hover:text-primary-red transition-colors duration-200"
          >
            View All Team Members
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}