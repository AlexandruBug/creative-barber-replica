
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Team from '../components/Team';
import Gallery from '../components/Gallery';
import Booking from '../components/Booking';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  // Animation observer setup
  useEffect(() => {
    // Observer for scroll animations
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll:not(.animated)');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animated');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      elements.forEach((el) => {
        observer.observe(el);
      });

      return observer;
    };

    const observer = animateOnScroll();

    return () => {
      if (observer) {
        document.querySelectorAll('.animate-on-scroll').forEach((el) => {
          observer.unobserve(el);
        });
      }
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Team />
      <Gallery />
      <Booking />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
