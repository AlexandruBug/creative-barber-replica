
import React from 'react';
import { Phone, MapPin, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-barber-light text-white">
      <div className="container mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-6">
              Creative<span className="text-gold">Barber</span>
            </h3>
            <p className="text-white/70 mb-6">
              Where traditional barbering meets modern style. We provide premium grooming services for the modern gentleman.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-white/10 hover:bg-gold transition-colors duration-300 p-2 rounded-full"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-gold transition-colors duration-300 p-2 rounded-full"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-gold transition-colors duration-300 p-2 rounded-full"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/70 hover:text-gold transition-colors duration-300 flex items-center">
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-gold transition-colors duration-300 flex items-center">
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  Services
                </a>
              </li>
              <li>
                <a href="#team" className="text-white/70 hover:text-gold transition-colors duration-300 flex items-center">
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  Our Team
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white/70 hover:text-gold transition-colors duration-300 flex items-center">
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  Gallery
                </a>
              </li>
              <li>
                <a href="#booking" className="text-white/70 hover:text-gold transition-colors duration-300 flex items-center">
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  Book Now
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock size={18} className="mr-3 mt-1 text-gold" />
                <div>
                  <span className="block text-white font-medium">Monday - Friday</span>
                  <span className="text-white/70">9:00 AM - 6:00 PM</span>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-3 mt-1 text-gold" />
                <div>
                  <span className="block text-white font-medium">Saturday</span>
                  <span className="text-white/70">9:00 AM - 4:00 PM</span>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-3 mt-1 text-gold" />
                <div>
                  <span className="block text-white font-medium">Sunday</span>
                  <span className="text-white/70">Closed</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-gold" />
                <span className="text-white/70">123 Barber Street, City Center, 10001</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-3 mt-1 text-gold" />
                <span className="text-white/70">+1 (234) 567-8901</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 mt-1 text-gold" />
                <span className="text-white/70">info@creativebarber.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 px-6 border-t border-white/10 bg-barber-dark">
        <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center">
          <p className="text-white/70 text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} CreativeBarber. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/70 hover:text-gold transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-white/70 hover:text-gold transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
