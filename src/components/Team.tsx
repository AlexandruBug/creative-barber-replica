
import React, { useEffect, useRef } from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

interface BarberProps {
  name: string;
  role: string;
  image: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
}

const BarberCard: React.FC<BarberProps> = ({ name, role, image, instagram, facebook, twitter }) => {
  return (
    <div className="animate-on-scroll group">
      <div className="relative overflow-hidden rounded-lg image-zoom mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-barber-dark to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center space-x-4">
          {instagram && (
            <a 
              href={instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-gold transition-colors duration-300"
            >
              <Instagram size={20} className="text-white" />
            </a>
          )}
          {facebook && (
            <a 
              href={facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-gold transition-colors duration-300"
            >
              <Facebook size={20} className="text-white" />
            </a>
          )}
          {twitter && (
            <a 
              href={twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-gold transition-colors duration-300"
            >
              <Twitter size={20} className="text-white" />
            </a>
          )}
        </div>
      </div>
      <h3 className="font-serif text-xl font-semibold">{name}</h3>
      <p className="text-gold">{role}</p>
    </div>
  );
};

const Team = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animated');
              }, 150 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="team" ref={sectionRef} className="py-20 px-6 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Meet Our Team
          </span>
          <h2 className="section-title animate-on-scroll">Expert Barbers</h2>
          <p className="section-subtitle animate-on-scroll max-w-2xl mx-auto">
            Our highly skilled team of barbers is dedicated to providing you with the best grooming experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BarberCard
            name="Alexander Smith"
            role="Master Barber"
            image="https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=1480&auto=format&fit=crop"
            instagram="#"
            facebook="#"
            twitter="#"
          />
          <BarberCard
            name="Michael Johnson"
            role="Senior Stylist"
            image="https://images.unsplash.com/photo-1570057633712-639b72a38513?q=80&w=1287&auto=format&fit=crop"
            instagram="#"
            facebook="#"
          />
          <BarberCard
            name="David Williams"
            role="Beard Specialist"
            image="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1287&auto=format&fit=crop"
            instagram="#"
            twitter="#"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
