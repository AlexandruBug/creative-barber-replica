
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 transition-all duration-300 ${scrolled ? 'scrolled' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="font-serif text-2xl md:text-3xl font-bold text-barber-dark">
          Creative<span className="text-gold">Barber</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#home" className="nav-link">Home</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#team" className="nav-link">Our Team</a>
          <a href="#gallery" className="nav-link">Gallery</a>
          <a href="#booking" className="btn-outline">Book Now</a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-barber-dark focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden flex flex-col items-center justify-center space-y-6 pt-20`}
      >
        <a 
          href="#home" 
          className="nav-link text-xl" 
          onClick={() => setIsOpen(false)}
        >
          Home
        </a>
        <a 
          href="#services" 
          className="nav-link text-xl" 
          onClick={() => setIsOpen(false)}
        >
          Services
        </a>
        <a 
          href="#team" 
          className="nav-link text-xl" 
          onClick={() => setIsOpen(false)}
        >
          Our Team
        </a>
        <a 
          href="#gallery" 
          className="nav-link text-xl" 
          onClick={() => setIsOpen(false)}
        >
          Gallery
        </a>
        <a 
          href="#booking" 
          className="btn-gold mt-4" 
          onClick={() => setIsOpen(false)}
        >
          Book Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
