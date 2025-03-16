
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const StudioMap = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-studio-cream">
      <div className="studio-container">
        <h2 className="section-title mb-12">Visit Our Studio</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Map */}
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg transition-all duration-500">
            {mapLoaded && (
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2872.024910248963!2d-88.54678382386588!3d43.98209653342166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8803eb2e6a3e7a9d%3A0x3c07d0fbd51c9a2!2s927%20Oregon%20St%2C%20Oshkosh%2C%20WI%2054902%2C%20USA!5e0!3m2!1sen!2s!4v1707700945539!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Fire Escape Art Studio Map"
                className="animate-fade-in"
              ></iframe>
            )}
            {!mapLoaded && (
              <div className="h-full w-full flex items-center justify-center">
                <div className="animate-pulse text-gray-400">Loading map...</div>
              </div>
            )}
          </div>
          
          {/* Contact Info */}
          <Card className="p-8 shadow-lg animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-studio-orange">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-studio-orange flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p className="text-muted-foreground">
                    927 Oregon Street<br />
                    Oshkosh, Wisconsin 54902
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-studio-orange flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-muted-foreground">
                    <a href="tel:+19203037600" className="hover:text-studio-orange transition-colors">
                      (920) 303-7600
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-studio-orange flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@fireescapeartstudio.com" className="hover:text-studio-orange transition-colors">
                      info@fireescapeartstudio.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-studio-orange flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Hours</h4>
                  <div className="text-muted-foreground">
                    <p className="mb-1">Tuesday - Saturday: 11am - 7pm</p>
                    <p className="mb-1">Sunday: 12pm - 5pm</p>
                    <p>Monday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StudioMap;
