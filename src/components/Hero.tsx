
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1605048578067-b67aa49fa810?q=80&w=2070&auto=format&fit=crop"
          alt="Colorful pottery" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Content */}
      <div className="studio-container relative z-20 pt-20 pb-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow-lg transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Fire Escape Art Studio
          </h1>
          <div className={`h-1 w-32 mx-auto bg-studio-orange mb-6 transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
          <h2 className={`text-xl md:text-2xl text-white/90 mb-8 text-shadow transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Unleash Your Creativity with Paint-Your-Own Pottery, Classes, and Events in Oshkosh, WI
          </h2>
          
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link to="/classes">
              <Button className="w-full sm:w-auto text-base bg-studio-orange hover:bg-studio-orange/90 text-white py-6 px-8 shadow-lg">
                View Class Calendar
              </Button>
            </Link>
            <Link to="/parties">
              <Button className="w-full sm:w-auto text-base bg-studio-teal hover:bg-studio-teal/90 text-white py-6 px-8 shadow-lg">
                Book a Party
              </Button>
            </Link>
            <Link to="/info">
              <Button className="w-full sm:w-auto text-base bg-white hover:bg-white/90 text-studio-charcoal py-6 px-8 shadow-lg">
                Visit Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce-soft">
          <button 
            onClick={scrollToFeatures}
            aria-label="Scroll down"
            className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity"
          >
            <span className="text-sm mb-2">Explore</span>
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
