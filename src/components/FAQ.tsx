const faqs = [
  {
    question: 'What documents are required for property registration?',
    answer: 'The typical documents required include sale deed, title documents, identity proof, property tax receipts, and NOCs from relevant authorities. The exact requirements may vary based on the property type and location.'
  },
  {
    question: 'How long does the property registration process take?',
    answer: 'With our streamlined processes, most property registrations can be completed within 7-14 working days, depending on the complexity of the case and the responsiveness of government departments.'
  },
  {
    question: 'What are the charges for your services?',
    answer: 'Our service charges vary based on the type of service and complexity of the case. We offer transparent pricing with no hidden charges. Contact us for a detailed quote tailored to your specific needs.'
  },
  {
    question: 'Do I need to visit government offices during the registration process?',
    answer: 'No. Our service is designed to handle all government office visits on your behalf. However, your presence may be required for specific signatures or verifications, which we will coordinate at your convenience.'
  },
  {
    question: 'Can you handle property registrations in different cities?',
    answer: 'Yes, we provide property registration services across multiple cities in India. Our network of professionals ensures seamless service delivery regardless of the property location.'
  },
  {
    question: 'What if there are issues with the property title?',
    answer: 'Our title verification service identifies any potential issues with the property title. If issues are found, our legal team will advise you on the necessary steps to resolve them before proceeding with the registration.'
  }
];

export default function FAQ() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to commonly asked questions about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-4">
                {faq.question}
              </h3>
              <p className="text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}