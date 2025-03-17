import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-950 to-purple-900 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">A Online Sports Store</h2>
            <p className="text-gray-300">
              Your one-stop destination for all sports equipment and gear. We provide high-quality products for athletes and sports enthusiasts.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="text-gray-300">
              <li className="mb-2 flex items-center justify-center md:justify-start">
                <FaEnvelope className="mr-2" />
                <a href="mailto:support@sportshub.com">ahnoor103308@gmail.com</a>
              </li>
              <li className="mb-2 flex items-center justify-center md:justify-start">
                <FaPhone className="mr-2" />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-all duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-all duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-all duration-300"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} SportsHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;