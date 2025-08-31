'use client';

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-2xl font-bold">Crop</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of innovative agricultural solutions, committed to 
              enhancing crop productivity and promoting sustainable farming practices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                'Home',
                'About Us',
                'Products',
                'Services',
                'Contact',
                'Blog'
              ].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-6">Products</h3>
            <ul className="space-y-3">
              {[
                'Fertilizers',
                'Pesticides',
                'Fungicides',
                'Herbicides',
                'Plant Growth Regulators',
                'Bio Products'
              ].map((product) => (
                <li key={product}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">info@cropchemicals.com</p>
                  <p className="text-gray-300">sales@cropchemicals.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+91 98765 43210</p>
                  <p className="text-gray-300">+91 87654 32109</p>
                </div>
              </div>
              
              <div className="pt-4">
                <h4 className="font-semibold mb-2">Follow Us</h4>
                <p className="text-gray-300 text-sm">
                  Stay updated with our latest products and agricultural insights
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Crop Chemicals. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-green-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;