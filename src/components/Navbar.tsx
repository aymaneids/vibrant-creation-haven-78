
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  // Handle scroll effect for transparent navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'py-4 bg-transparent'
      }`}
    >
      <div className="studio-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="z-10 flex items-center space-x-2">
            <span className="text-xl md:text-2xl font-bold text-studio-orange">
              Fire Escape
            </span>
            <span className="text-xl md:text-2xl font-bold">Art Studio</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({isActive}) => 
              `nav-link ${isActive ? 'active' : ''}`
            }>
              Home
            </NavLink>
            <NavLink to="/about" className={({isActive}) => 
              `nav-link ${isActive ? 'active' : ''}`
            }>
              About
            </NavLink>
            <NavLink to="/parties" className={({isActive}) => 
              `nav-link ${isActive ? 'active' : ''}`
            }>
              Parties
            </NavLink>
            <NavLink to="/classes" className={({isActive}) => 
              `nav-link ${isActive ? 'active' : ''}`
            }>
              Classes
            </NavLink>
            <NavLink to="/gallery" className={({isActive}) => 
              `nav-link ${isActive ? 'active' : ''}`
            }>
              Gallery
            </NavLink>
            <NavLink to="/info" className={({isActive}) => 
              `nav-link ${isActive ? 'active' : ''}`
            }>
              Info
            </NavLink>
            <NavLink to="/community" className={({isActive}) => 
              `nav-link ${isActive ? 'active' : ''}`
            }>
              Community
            </NavLink>
            <NavLink to="/gifts" className={({isActive}) => 
              `nav-link ${isActive ? 'active' : ''}`
            }>
              Gift Cards
            </NavLink>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-20 text-foreground hover:text-studio-orange transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="animate-fade-in" />
            ) : (
              <Menu size={24} className="animate-fade-in" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-sm pt-20 px-6 z-10 animate-fade-in overflow-y-auto shadow-lg">
          <nav className="flex flex-col space-y-6 py-6">
            <NavLink to="/" className="text-xl font-medium py-2 border-b border-gray-100">
              Home
            </NavLink>
            <NavLink to="/about" className="text-xl font-medium py-2 border-b border-gray-100">
              About
            </NavLink>
            <NavLink to="/parties" className="text-xl font-medium py-2 border-b border-gray-100">
              Parties
            </NavLink>
            <NavLink to="/classes" className="text-xl font-medium py-2 border-b border-gray-100">
              Classes
            </NavLink>
            <NavLink to="/gallery" className="text-xl font-medium py-2 border-b border-gray-100">
              Gallery
            </NavLink>
            <NavLink to="/info" className="text-xl font-medium py-2 border-b border-gray-100">
              Info
            </NavLink>
            <NavLink to="/community" className="text-xl font-medium py-2 border-b border-gray-100">
              Community
            </NavLink>
            <NavLink to="/gifts" className="text-xl font-medium py-2 border-b border-gray-100">
              Gift Cards
            </NavLink>
          </nav>
          <div className="mt-8 flex flex-col space-y-4">
            <Button className="w-full py-6 text-base bg-studio-orange hover:bg-studio-orange/90">
              Book a Class
            </Button>
            <Button className="w-full py-6 text-base bg-studio-teal hover:bg-studio-teal/90">
              Reserve a Party
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
