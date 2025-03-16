
import { NavLink } from 'react-router-dom';
import { Map, Phone, Mail, Instagram, Clock, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-studio-charcoal text-white pt-16 pb-8">
      <div className="studio-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Studio Info */}
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-2xl font-bold text-studio-orange mb-4">Fire Escape Art Studio</h3>
            <p className="text-white/90 max-w-sm">
              A creative space where people of all ages and skill levels can explore their artistic side through pottery painting and various art classes.
            </p>
            <div className="pt-4">
              <a 
                href="https://www.instagram.com/fireescapeartstudio/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
              >
                <Instagram size={20} />
                <span>@fireescapeartstudio</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <NavLink to="/" className="text-white/80 hover:text-studio-orange transition-colors py-1">
                Home
              </NavLink>
              <NavLink to="/about" className="text-white/80 hover:text-studio-orange transition-colors py-1">
                About Us
              </NavLink>
              <NavLink to="/parties" className="text-white/80 hover:text-studio-orange transition-colors py-1">
                Parties
              </NavLink>
              <NavLink to="/classes" className="text-white/80 hover:text-studio-orange transition-colors py-1">
                Classes
              </NavLink>
              <NavLink to="/gallery" className="text-white/80 hover:text-studio-orange transition-colors py-1">
                Gallery
              </NavLink>
              <NavLink to="/info" className="text-white/80 hover:text-studio-orange transition-colors py-1">
                Studio Info
              </NavLink>
              <NavLink to="/community" className="text-white/80 hover:text-studio-orange transition-colors py-1">
                Community
              </NavLink>
              <NavLink to="/gifts" className="text-white/80 hover:text-studio-orange transition-colors py-1">
                Gift Cards
              </NavLink>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h3 className="text-xl font-bold mb-4">Visit Us</h3>
            <div className="flex items-start space-x-3">
              <MapPin size={20} className="text-studio-orange flex-shrink-0 mt-1" />
              <p className="text-white/90">
                927 Oregon Street<br />
                Oshkosh, Wisconsin 54902
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={18} className="text-studio-orange flex-shrink-0" />
              <a href="tel:+19203037600" className="text-white/90 hover:text-white transition-colors">
                (920) 303-7600
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={18} className="text-studio-orange flex-shrink-0" />
              <a href="mailto:info@fireescapeartstudio.com" className="text-white/90 hover:text-white transition-colors">
                info@fireescapeartstudio.com
              </a>
            </div>
            <div className="flex items-start space-x-3 pt-1">
              <Clock size={18} className="text-studio-orange flex-shrink-0 mt-1" />
              <div className="text-white/90">
                <p className="mb-1">Tuesday - Saturday: 11am - 7pm</p>
                <p>Sunday: 12pm - 5pm</p>
                <p>Monday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Fire Escape Art Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
