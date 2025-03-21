import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="text-xl font-semibold text-white">Om Estate Services</div>
            </div>
            <p className="text-sm mb-4">
              Your trusted partner in property document registration. Making property ownership seamless since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/testimonials" className="hover:text-white">Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/registration" className="hover:text-white">Property Registration</Link></li>
              <li><Link to="/services/verification" className="hover:text-white">Title Verification</Link></li>
              <li><Link to="/services/transfer" className="hover:text-white">Property Transfer</Link></li>
              <li><Link to="/services/documentation" className="hover:text-white">Legal Documentation</Link></li>
              <li><Link to="/services/stamp-duty" className="hover:text-white">Stamp Duty Assessment</Link></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Subscribe</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-md text-gray-900 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
            <p className="text-xs mt-2">
              By subscribing, you agree to our{' '}
              <Link to="/terms" className="text-blue-400 hover:text-blue-300">Terms</Link> and{' '}
              <Link to="/privacy" className="text-blue-400 hover:text-blue-300">Privacy Policy</Link>.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>© 2025 Om Estate Services Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}