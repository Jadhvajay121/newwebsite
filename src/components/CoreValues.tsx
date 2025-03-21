import { Shield, Target, Users, BookOpen, Clock, CheckSquare } from 'lucide-react';

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

export default function CoreValues() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These principles guide everything we do, from how we serve our clients to how we build our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
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
          ))}
        </div>
      </div>
    </div>
  );
}