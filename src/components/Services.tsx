import { useState } from 'react';
import { FileText, Search, ArrowRightCircle, Scale, Calculator, ClipboardCheck, CheckCircle } from 'lucide-react';

const services = [
  {
    id: 'registration',
    title: 'Property Registration',
    description: 'We handle the complete registration process of your property documents with relevant government authorities, ensuring all legal procedures are followed correctly.',
    features: [
      'Complete documentation preparation',
      'Verification of property details',
      'Coordination with government authorities',
      'Timely completion of registration process',
      'Regular updates on registration status'
    ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80'
  },
  {
    id: 'verification',
    title: 'Title Verification',
    description: 'Our thorough title verification service ensures that the property you\'re purchasing has a clean and clear title, free from any legal encumbrances.',
    features: [
      'Comprehensive background check',
      'Verification of ownership history',
      'Identification of potential legal issues',
      'Examination of encumbrances and liens',
      'Detailed title verification report'
    ],
    image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 'transfer',
    title: 'Property Transfer',
    description: 'We provide end-to-end assistance in transferring property ownership from seller to buyer, ensuring all legal requirements are met.',
    features: [
      'Preparation of transfer documents',
      'Guidance on stamp duty and registration fees',
      'Coordination between buyer and seller',
      'Handling of legal formalities',
      'Smooth transfer of ownership'
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 'documentation',
    title: 'Legal Documentation',
    description: 'Our team prepares and verifies all necessary legal documents for your property transactions, ensuring they comply with current laws and regulations.',
    features: [
      'Drafting of sale deeds and agreements',
      'Preparation of lease agreements',
      'Creation of power of attorney documents',
      'Review of existing legal documents',
      'Legal compliance verification'
    ],
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 'stamp-duty',
    title: 'Stamp Duty Assessment',
    description: 'We provide accurate calculation and payment of stamp duty and registration fees as per current government norms, helping you avoid any penalties.',
    features: [
      'Up-to-date stamp duty calculation',
      'Registration fee assessment',
      'Guidance on payment procedures',
      'Assistance with e-payment systems',
      'Documentation of payment receipts'
    ],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 'mutation',
    title: 'Property Mutation',
    description: 'We assist in transferring property records in municipal and revenue departments after purchase, ensuring all records reflect the current ownership.',
    features: [
      'Filing of mutation applications',
      'Document preparation for mutation',
      'Coordination with municipal authorities',
      'Regular follow-up on mutation status',
      'Resolution of any disputes or objections'
    ],
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Services' },
    { id: 'registration', label: 'Registration' },
    { id: 'verification', label: 'Verification' },
    { id: 'transfer', label: 'Transfer' },
    { id: 'documentation', label: 'Documentation' }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.id === activeTab);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Comprehensive property document registration services designed to make your real
            estate journey smooth and hassle-free.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4 overflow-x-auto py-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'bg-primary-teal text-white'
                    : 'text-gray-600 hover:text-primary-teal'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-20">
          {filteredServices.map((service, index) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-12 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Key Features:</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-teal flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="mt-8 bg-primary-teal text-white px-6 py-3 rounded-md hover:bg-primary-teal/90 transition-colors duration-200">
                  Learn More
                </button>
              </div>
              <div className="w-full lg:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Simplify Your Property Registration?
          </h2>
          <p className="text-gray-600 mb-8">
            Contact us today to learn how our expert team can assist you with all your property registration needs.
          </p>
          <button className="bg-primary-teal text-white px-8 py-4 rounded-md hover:bg-primary-teal/90 transition-colors duration-200 text-lg font-medium">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}