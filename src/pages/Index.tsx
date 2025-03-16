
import Hero from '@/components/Hero';
import FeaturedActivities from '@/components/FeaturedActivities';
import Testimonials from '@/components/Testimonials';
import StudioMap from '@/components/StudioMap';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <FeaturedActivities />
      
      {/* About Quick Section */}
      <section className="py-20 bg-white">
        <div className="studio-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1621976360612-1394f30475a5?q=80&w=1974&auto=format&fit=crop" 
                  alt="Fire Escape Art Studio Interior" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-lg overflow-hidden shadow-xl hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1605048937812-a1f5e8145efc?q=80&w=1974&auto=format&fit=crop" 
                  alt="Pottery detail" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-studio-yellow rounded-lg shadow-xl hidden lg:block"></div>
            </div>
            
            <div className="lg:pl-8">
              <div className="inline-block px-4 py-1 bg-studio-orange/10 rounded-full text-studio-orange text-sm font-medium mb-4">
                About Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Welcome to Fire Escape Art Studio</h2>
              <p className="text-muted-foreground mb-5">
                Fire Escape Art Studio is a vibrant and welcoming creative space in the heart of Oshkosh. 
                We believe that everyone is an artist, and our mission is to provide a fun, relaxed 
                environment where people of all ages and abilities can explore their creativity.
              </p>
              <p className="text-muted-foreground mb-8">
                Whether you're painting pottery, taking a class, or celebrating a special occasion, 
                our studio is designed to inspire your imagination and create lasting memories.
              </p>
              <Link to="/about">
                <Button className="bg-studio-orange hover:bg-studio-orange/90 text-white group">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Map Contact Section */}
      <StudioMap />
      
      {/* Call to Action */}
      <section className="py-20 bg-studio-orange">
        <div className="studio-container text-center">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6 text-white">Ready to Unleash Your Creativity?</h2>
          <p className="text-white/90 max-w-xl mx-auto mb-8 text-lg">
            Join us at Fire Escape Art Studio and discover the joy of creating something beautiful with your own hands.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/classes">
              <Button className="w-full sm:w-auto bg-white text-studio-orange hover:bg-white/90 font-medium py-6 px-8">
                View Our Classes
              </Button>
            </Link>
            <Link to="/info">
              <Button className="w-full sm:w-auto bg-studio-charcoal text-white hover:bg-studio-charcoal/90 font-medium py-6 px-8">
                Plan Your Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
