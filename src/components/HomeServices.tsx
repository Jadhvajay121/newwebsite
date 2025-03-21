import { FileText, Search, ArrowRightCircle, Scale, Calculator, ClipboardCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: FileText,
    title: 'Property Registration',
    description: 'Complete registration of property documents with government authorities following all legal procedures.',
  },
  {
    icon: Search,
    title: 'Title Verification',
    description: 'Thorough verification of property titles to ensure clean and clear ownership before transaction.',
  },
  {
    icon: ArrowRightCircle,
    title: 'Property Transfer',
    description: 'End-to-end assistance in transferring property ownership from seller to buyer legally.',
  },
  {
    icon: Scale,
    title: 'Legal Documentation',
    description: 'Preparation and verification of all legal documents required for property transactions.',
  },
  {
    icon: Calculator,
    title: 'Stamp Duty Assessment',
    description: 'Accurate calculation and payment of stamp duty and registration fees as per government norms.',
  },
  {
    icon: ClipboardCheck,
    title: 'Property Mutation',
    description: 'Assistance in transferring property records in municipal and revenue departments after purchase.',
  },
];

export default function HomeServices() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive property document registration services to make your real estate
            journey smooth and hassle-free.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <service.icon className="h-12 w-12 text-primary-teal mb-6" />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link 
                to="/services" 
                className="text-primary-teal font-medium inline-flex items-center hover:text-primary-red transition-colors duration-200"
              >
                Learn More 
                <ArrowRightCircle className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}