
import { useEffect } from 'react';
import ImageGallery from '@/components/ImageGallery';
import { Button } from '@/components/ui/button';
import { Camera, Upload, Instagram } from 'lucide-react';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?q=80&w=1976&auto=format&fit=crop",
    alt: "Painted ceramic mug",
    category: "Pottery"
  },
  {
    src: "https://images.unsplash.com/photo-1565104271227-905cf5b8773c?q=80&w=1974&auto=format&fit=crop",
    alt: "Hands making pottery on wheel",
    category: "Classes"
  },
  {
    src: "https://images.unsplash.com/photo-1561566472-38d911e8a55f?q=80&w=2070&auto=format&fit=crop",
    alt: "Colorful clay bowls",
    category: "Pottery"
  },
  {
    src: "https://images.unsplash.com/photo-1556195332-95503f664ced?q=80&w=2071&auto=format&fit=crop",
    alt: "Child painting pottery",
    category: "Events"
  },
  {
    src: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=2069&auto=format&fit=crop",
    alt: "Art supplies and brushes",
    category: "Studio"
  },
  {
    src: "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?q=80&w=2070&auto=format&fit=crop",
    alt: "Glazed pottery pieces",
    category: "Pottery"
  },
  {
    src: "https://images.unsplash.com/photo-1528817403928-f2113902480c?q=80&w=1974&auto=format&fit=crop",
    alt: "Party at the studio",
    category: "Events"
  },
  {
    src: "https://images.unsplash.com/photo-1606760398933-1fd3dc70a3cf?q=80&w=1974&auto=format&fit=crop",
    alt: "Finished ceramic plates",
    category: "Pottery"
  },
  {
    src: "https://images.unsplash.com/photo-1607113284389-2aeaf0952a56?q=80&w=2070&auto=format&fit=crop",
    alt: "Community art event",
    category: "Events"
  },
  {
    src: "https://images.unsplash.com/photo-1582201957482-c7bb77c04e26?q=80&w=2035&auto=format&fit=crop",
    alt: "Pottery wheel class",
    category: "Classes"
  },
  {
    src: "https://images.unsplash.com/photo-1605639737041-93c7bcf8a7d6?q=80&w=1974&auto=format&fit=crop",
    alt: "Studio interior",
    category: "Studio"
  },
  {
    src: "https://images.unsplash.com/photo-1546773740-391b7e8e15a3?q=80&w=1950&auto=format&fit=crop",
    alt: "Painting a ceramic piece",
    category: "Pottery"
  },
  {
    src: "https://images.unsplash.com/photo-1564114968738-5b84cdf251ba?q=80&w=2070&auto=format&fit=crop",
    alt: "Child's birthday party",
    category: "Events"
  },
  {
    src: "https://images.unsplash.com/photo-1575316648814-98fec18766b5?q=80&w=2070&auto=format&fit=crop",
    alt: "Clay sculpture class",
    category: "Classes"
  },
  {
    src: "https://images.unsplash.com/photo-1633575956251-89d68abf9d82?q=80&w=2070&auto=format&fit=crop",
    alt: "Handmade pottery display",
    category: "Pottery"
  },
  {
    src: "https://images.unsplash.com/photo-1606509036992-4399d5c5afe4?q=80&w=1770&auto=format&fit=crop",
    alt: "Pottery painting session",
    category: "Events"
  }
];

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-studio-pink">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-64 w-64 -top-20 -right-20 rounded-full bg-white/10"></div>
          <div className="absolute h-96 w-96 -bottom-40 -left-40 rounded-full bg-white/10"></div>
        </div>
        <div className="studio-container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">Gallery</h1>
            <p className="text-xl text-white/90 animate-fade-in" style={{ animationDelay: '100ms' }}>
              Explore photos of our studio, events, classes, and beautiful pottery created by our customers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-20 bg-white">
        <div className="studio-container">
          <ImageGallery 
            images={galleryImages} 
            title="Our Creative Community"
            subtitle="Browse through a collection of photos showcasing the creative work and experiences at Fire Escape Art Studio."
            categories={["Pottery", "Classes", "Events", "Studio"]}
          />

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Want to see more? Follow us on Instagram for daily inspiration and updates!
            </p>
            <Button className="bg-studio-pink hover:bg-studio-pink/90">
              <Instagram className="mr-2 h-4 w-4" />
              Follow Us on Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* Share Your Art Section */}
      <section className="py-20 bg-studio-cream">
        <div className="studio-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-studio-orange/10 rounded-full text-studio-orange text-sm font-medium mb-4">
              Share Your Art
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Be Featured in Our Gallery</h2>
            <p className="text-muted-foreground">
              Proud of your pottery creation? We'd love to showcase your artwork in our gallery! 
              Share your masterpiece with us and join our creative community.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">How to Share Your Art</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-studio-orange flex items-center justify-center text-white mr-3 flex-shrink-0">1</span>
                    <span>Tag us on Instagram with #FireEscapeStudio</span>
                  </p>
                  <p className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-studio-orange flex items-center justify-center text-white mr-3 flex-shrink-0">2</span>
                    <span>Email your photos to gallery@fireescape.com</span>
                  </p>
                  <p className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-studio-orange flex items-center justify-center text-white mr-3 flex-shrink-0">3</span>
                    <span>Show our staff when you pick up your pottery</span>
                  </p>
                </div>
                <div className="mt-6">
                  <Button className="bg-studio-orange hover:bg-studio-orange/90">
                    <Upload className="mr-2 h-4 w-4" />
                    Submit Your Photos
                  </Button>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1576074645502-d0aec27c80d0?q=80&w=2070&auto=format&fit=crop" 
                  alt="Colorful pottery" 
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20 bg-white">
        <div className="studio-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-studio-pink/10 rounded-full text-studio-pink text-sm font-medium mb-4">
              Social Media
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Follow Us on Instagram</h2>
            <p className="text-muted-foreground">
              Stay connected with us on Instagram for daily inspiration, upcoming events, and a behind-the-scenes look at our studio.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.slice(0, 8).map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <div className="relative group">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-studio-pink/0 group-hover:bg-studio-pink/20 transition-all duration-300 flex items-center justify-center">
                      <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300" size={32} />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#E1306C] hover:bg-[#E1306C]/90">
              <Instagram className="mr-2 h-4 w-4" />
              Visit Our Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-studio-orange text-white">
        <div className="studio-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Own Masterpiece?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Now that you've seen what others have created, it's your turn! 
            Visit our studio to paint your own pottery or join one of our classes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="w-full sm:w-auto bg-white text-studio-orange hover:bg-white/90">
              <Camera className="mr-2 h-4 w-4" />
              View Our Classes
            </Button>
            <Button className="w-full sm:w-auto bg-studio-charcoal text-white hover:bg-studio-charcoal/90">
              Plan Your Visit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
