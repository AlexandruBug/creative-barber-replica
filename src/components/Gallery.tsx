
import React, { useEffect, useRef, useState } from 'react';

// Gallery images
const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1336&auto=format&fit=crop",
    alt: "Classic men's haircut"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1622296089780-8ff3e3cdc7de?q=80&w=1376&auto=format&fit=crop",
    alt: "Modern fade haircut"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1584433144076-aade0aacd958?q=80&w=1486&auto=format&fit=crop",
    alt: "Beard trim and styling"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1519710889408-a67e1c7e0452?q=80&w=1376&auto=format&fit=crop",
    alt: "Vintage barber shop"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1629207619054-55c1ce733f56?q=80&w=1287&auto=format&fit=crop",
    alt: "Hot towel shave"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1593702288056-f5834cfbef17?q=80&w=1287&auto=format&fit=crop",
    alt: "Hair styling with products"
  }
];

interface ModalProps {
  image: { url: string; alt: string };
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

const Modal: React.FC<ModalProps> = ({ image, onClose, onPrev, onNext, hasPrev, hasNext }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };
    
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative max-w-6xl w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:text-gold transition-colors"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <button 
          onClick={onPrev}
          disabled={!hasPrev}
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm p-2 rounded-full ${!hasPrev ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gold transition-colors'}`}
        >
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
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        
        <img 
          src={image.url} 
          alt={image.alt} 
          className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl"
        />
        
        <button 
          onClick={onNext}
          disabled={!hasNext}
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm p-2 rounded-full ${!hasNext ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gold transition-colors'}`}
        >
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
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
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

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handlePrevImage = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedImage !== null && selectedImage < galleryImages.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  return (
    <section id="gallery" ref={sectionRef} className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Our Work
          </span>
          <h2 className="section-title animate-on-scroll">Gallery</h2>
          <p className="section-subtitle animate-on-scroll max-w-2xl mx-auto">
            Browse through our gallery of haircuts and styles to find your next look.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              onClick={() => handleImageClick(index)}
              className="cursor-pointer rounded-lg overflow-hidden image-zoom animate-on-scroll"
            >
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-64 md:h-72 object-cover transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <Modal 
            image={galleryImages[selectedImage]}
            onClose={handleCloseModal}
            onPrev={handlePrevImage}
            onNext={handleNextImage}
            hasPrev={selectedImage > 0}
            hasNext={selectedImage < galleryImages.length - 1}
          />
        )}
      </div>
    </section>
  );
};

export default Gallery;
