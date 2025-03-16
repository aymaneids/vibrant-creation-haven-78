
import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { X } from 'lucide-react';

interface Image {
  src: string;
  alt: string;
  category?: string;
}

interface ImageGalleryProps {
  images: Image[];
  title?: string;
  subtitle?: string;
  categories?: string[];
}

const ImageGallery = ({ images, title, subtitle, categories }: ImageGalleryProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredImages, setFilteredImages] = useState<Image[]>(images);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [revealed, setRevealed] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredImages(images.filter(image => image.category === selectedCategory));
    } else {
      setFilteredImages(images);
    }
  }, [selectedCategory, images]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openModal = (image: Image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Close modal when clicking outside of the image
  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Close modal with escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div ref={galleryRef}>
      {title && <h2 className="section-title mb-4">{title}</h2>}
      {subtitle && <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">{subtitle}</p>}
      
      {/* Category filters */}
      {categories && categories.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === null 
                ? 'bg-studio-orange text-white shadow-md' 
                : 'bg-muted hover:bg-muted/80'
            }`}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category 
                  ? 'bg-studio-orange text-white shadow-md' 
                  : 'bg-muted hover:bg-muted/80'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}
      
      {/* Gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredImages.map((image, index) => (
          <div 
            key={`${image.src}-${index}`} 
            className={`transform ${revealed ? 'opacity-100' : 'opacity-0 translate-y-8'} transition-all duration-500`}
            style={{ transitionDelay: `${Math.min(index * 100, 1000)}ms` }}
          >
            <Card 
              className="overflow-hidden cursor-pointer h-64 hover:shadow-lg transition-all duration-300"
              onClick={() => openModal(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </Card>
          </div>
        ))}
      </div>
      
      {/* Image modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={handleModalClick}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-studio-orange transition-colors"
            onClick={closeModal}
          >
            <X size={32} />
          </button>
          <div className="max-w-4xl max-h-[90vh] overflow-hidden animate-scale-in">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
