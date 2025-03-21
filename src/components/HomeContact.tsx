import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomeContact() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600">
            Have questions about our services? Reach out to us and our team will
            get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 mr-4 text-primary-teal" />
                <p className="text-gray-600">
                  Office No 11,13 And 14, 1st Floor,Yashokiran Co Op Hsg
                  Society, near Ballaleshwar Temple, Manek Nagar, HOC Colony,
                  Panvel, Navi Mumbai, Maharashtra, India
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4 text-primary-teal" />
                <p className="text-gray-600">
                  +91 9082909010
                  <br />
                  +91 8888886788
                </p>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-4 text-primary-teal" />
                <p className="text-gray-600">info@omestateservices.com</p>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-4 text-primary-teal" />
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 9:30 PM</p>
              </div>
            </div>
          </div>

          <div className="bg-primary-teal p-8 rounded-lg text-white">
            <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
            <p className="mb-8">
              Fill out our contact form and we'll get back to you as soon as possible.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-primary-teal px-6 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}