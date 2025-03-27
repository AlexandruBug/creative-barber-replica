
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrolled = window.scrollY;
      const parallaxElement = heroRef.current.querySelector('.parallax');
      if (parallaxElement) {
        // Move the background more slowly than the scroll for parallax effect
        (parallaxElement as HTMLElement).style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative flex items-center justify-center full-height overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 parallax bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop")',
          transform: 'scale(1.1)', // Slightly larger to allow for movement
        }}
      ></div>
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
          Premium Grooming <span className="text-gold">Experience</span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
          Where tradition meets modern style to create the ultimate barber experience
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '400ms' }}>
          <a href="#booking" className="btn-gold w-full sm:w-auto">Book Appointment</a>
          <a href="#services" className="btn-outline w-full sm:w-auto bg-white/10 backdrop-blur-sm">Our Services</a>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
