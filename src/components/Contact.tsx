import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import FAQ from './FAQ';

const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 18.994499,
  lng: 73.111748
};

export default function Contact() {
  return (
    <>
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-600">
              Have questions about our services? Reach out to us and our team will
              get back to you shortly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="bg-blue-500 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4" />
                  <p>
                    Office No 11,13 And 14, 1st Floor,Yashokiran Co Op Hsg
                    Society, near Ballaleshwar Temple, Manek Nagar, HOC Colony,
                    Panvel, Navi Mumbai, Maharashtra, India
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4" />
                  <p>
                    +91 9082909010
                    <br />
                    +91 8888886788
                  </p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4" />
                  <p>info@omestateservices.com</p>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 mr-4" />
                  <p>Monday - Friday: 9:00 AM - 9:30 PM</p>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-blue-200">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="hover:text-blue-200">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/om_estate_services"
                    className="hover:text-blue-200"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/om-estate-services-aa035910a/"
                    className="hover:text-blue-200"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
      <FAQ />
    </>
  );
}