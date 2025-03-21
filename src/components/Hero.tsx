import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              We Transmute{' '}
              <span className="text-primary-teal">Names</span>
              <br />
              into{' '}
              <span className="text-primary-red">Titles</span>
            </h1>
            <p className="text-gray-600 mb-8">
              Your trusted partner in property document registration. We make the process
              seamless and hassle-free.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="bg-primary-teal text-white px-6 py-3 rounded-md hover:bg-primary-teal/90">
                Contact Us
              </Link>
              <Link to="/services" className="border border-primary-teal text-primary-teal px-6 py-3 rounded-md hover:bg-primary-teal/10">
                Explore Services
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
              alt="Property"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-4xl font-bold text-primary-teal mb-2">50,000+</h3>
              <p className="text-gray-600">Documents Registered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}