
import React, { useEffect, useRef } from 'react';
import { Scissors, Briefcase, Droplet, User } from 'lucide-react';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description, price }) => {
  return (
    <div className="service-card animate-on-scroll">
      <div className="flex justify-between items-start">
        <div className="text-gold mb-4">
          {icon}
        </div>
        <div className="text-gold font-serif font-bold text-xl">{price}</div>
      </div>
      <h3 className="font-serif text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Services = () => {
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
    <section id="services" ref={sectionRef} className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Our Services
          </span>
          <h2 className="section-title animate-on-scroll">Premium Barber Services</h2>
          <p className="section-subtitle animate-on-scroll max-w-2xl mx-auto">
            Experience the ultimate in men's grooming with our comprehensive range of services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={<Scissors size={28} />}
            title="Classic Haircut"
            description="Traditional haircut with scissor and clipper techniques for a timeless look."
            price="$30"
          />
          <ServiceCard
            icon={<Briefcase size={28} />}
            title="Beard Trim & Shape"
            description="Expert beard shaping and styling to define your facial features."
            price="$25"
          />
          <ServiceCard
            icon={<Scissors size={28} />}
            title="Luxury Haircut"
            description="Premium haircut with personalized styling and hot towel finish."
            price="$45"
          />
          <ServiceCard
            icon={<Droplet size={28} />}
            title="Hair Treatment"
            description="Nourishing scalp treatments to promote healthy hair growth."
            price="$35"
          />
          <ServiceCard
            icon={<User size={28} />}
            title="Kids Haircut"
            description="Gentle haircuts for boys, with a fun and comfortable experience."
            price="$20"
          />
          <ServiceCard
            icon={<Briefcase size={28} />}
            title="Hot Towel Shave"
            description="Traditional straight razor shave with hot towel preparation."
            price="$40"
          />
        </div>

        <div className="text-center mt-12">
          <a href="#booking" className="btn-gold animate-on-scroll inline-block">
            Book Your Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
