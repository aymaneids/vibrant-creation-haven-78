
import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from 'react-router-dom';
import { CalendarIcon, Users, Gift, Briefcase, Cake, Heart } from 'lucide-react';
import ImageGallery from '@/components/ImageGallery';

const partyTypes = [
  {
    id: "birthdays",
    icon: <Cake className="h-10 w-10 text-studio-orange" />,
    title: "Birthday Parties",
    description: "Make your celebration extra special with a creative pottery painting party. Perfect for children and adults alike!",
    details: [
      "2-hour party duration",
      "Private party room",
      "Pottery piece included for each guest",
      "All painting supplies provided",
      "Dedicated party host",
      "Set-up and clean-up included"
    ],
    pricing: "Starting at $25 per person (minimum 8 guests)"
  },
  {
    id: "corporate",
    icon: <Briefcase className="h-10 w-10 text-studio-teal" />,
    title: "Corporate Events",
    description: "Build team bonding and spark creativity with a unique corporate event. Great for team building and employee appreciation!",
    details: [
      "2-3 hour event duration",
      "Private studio space",
      "Choice of pottery painting or workshop",
      "All materials provided",
      "Customizable to your team's needs",
      "Optional catering arrangements"
    ],
    pricing: "Starting at $35 per person (minimum 10 guests)"
  },
  {
    id: "bridal",
    icon: <Heart className="h-10 w-10 text-studio-pink" />,
    title: "Bridal Showers",
    description: "Celebrate the bride-to-be with a creative and memorable bridal shower. Create keepsakes to remember the special day!",
    details: [
      "2-hour event duration",
      "Private party area",
      "Special pottery options for bridal parties",
      "All painting supplies included",
      "Dedicated host",
      "Gift for the bride-to-be"
    ],
    pricing: "Starting at $30 per person (minimum 8 guests)"
  },
  {
    id: "groups",
    icon: <Users className="h-10 w-10 text-studio-yellow" />,
    title: "Group Events",
    description: "Perfect for scout troops, school field trips, church groups, and more. Create together and make lasting memories!",
    details: [
      "1.5-2 hour event duration",
      "Group pricing available",
      "Age-appropriate projects",
      "All materials provided",
      "Educational components available",
      "Flexible scheduling options"
    ],
    pricing: "Starting at $18 per person (minimum 10 guests)"
  }
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1557721267-7901d0cb6339?q=80&w=1974&auto=format&fit=crop",
    alt: "Birthday party",
    category: "Birthdays"
  },
  {
    src: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?q=80&w=1974&auto=format&fit=crop",
    alt: "Corporate event",
    category: "Corporate"
  },
  {
    src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2070&auto=format&fit=crop",
    alt: "Bridal shower",
    category: "Bridal"
  },
  {
    src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1969&auto=format&fit=crop",
    alt: "Group event",
    category: "Groups"
  },
  {
    src: "https://images.unsplash.com/photo-1542587222-f9172e5eba29?q=80&w=1974&auto=format&fit=crop",
    alt: "Children painting",
    category: "Birthdays"
  },
  {
    src: "https://images.unsplash.com/photo-1581366458479-f88a5014af5d?q=80&w=1974&auto=format&fit=crop",
    alt: "Team building",
    category: "Corporate"
  }
];

const Parties = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-studio-teal">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-64 w-64 -top-20 -right-20 rounded-full bg-white/10"></div>
          <div className="absolute h-96 w-96 -bottom-40 -left-40 rounded-full bg-white/10"></div>
        </div>
        <div className="studio-container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">Private Parties & Events</h1>
            <p className="text-xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
              Celebrate special occasions with a creative twist! Our private parties and events are perfect for birthdays, team building, bridal showers, and more.
            </p>
            <Button className="bg-white text-studio-teal hover:bg-white/90 text-lg py-6 px-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Book Your Event Now
            </Button>
          </div>
        </div>
      </section>

      {/* Party Types Section */}
      <section className="py-20 bg-white">
        <div className="studio-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-studio-teal/10 rounded-full text-studio-teal text-sm font-medium mb-4">
              Our Events
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Find the Perfect Event Package</h2>
            <p className="text-muted-foreground">
              We offer a variety of event packages to suit your needs. Whether you're celebrating a birthday, 
              planning a team building activity, or hosting a special occasion, we have options for you.
            </p>
          </div>

          <Tabs defaultValue="birthdays" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-transparent h-auto mb-8">
              {partyTypes.map((type) => (
                <TabsTrigger 
                  key={type.id} 
                  value={type.id}
                  className="data-[state=active]:bg-studio-teal data-[state=active]:text-white py-3"
                >
                  <div className="flex flex-col items-center">
                    <div className="mb-2">{type.icon}</div>
                    <span>{type.title}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {partyTypes.map((type) => (
              <TabsContent key={type.id} value={type.id} className="mt-0">
                <Card className="p-6 md:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
                      <p className="text-muted-foreground mb-6">{type.description}</p>
                      
                      <h4 className="font-bold text-lg mb-3">What's Included:</h4>
                      <ul className="space-y-2 mb-6">
                        {type.details.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-studio-teal mr-2">•</span>
                            <span className="text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="bg-muted p-4 rounded-lg mb-6">
                        <span className="font-bold">Pricing:</span> {type.pricing}
                      </div>
                      
                      <Button className="bg-studio-teal hover:bg-studio-teal/90 text-white">
                        Book This Event
                      </Button>
                    </div>
                    
                    <div className="h-72 lg:h-full rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src={galleryImages.find(img => img.category === type.id.charAt(0).toUpperCase() + type.id.slice(1))?.src || galleryImages[0].src} 
                        alt={type.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Party Gallery */}
      <section className="py-20 bg-studio-cream">
        <div className="studio-container">
          <ImageGallery 
            title="Event Gallery" 
            subtitle="Take a look at some of our past parties and events to get inspired for your own celebration!"
            images={galleryImages}
            categories={["Birthdays", "Corporate", "Bridal", "Groups"]}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="studio-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-studio-orange/10 rounded-full text-studio-orange text-sm font-medium mb-4">
              Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Everything you need to know about booking and hosting an event at Fire Escape Art Studio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">How far in advance should I book?</h3>
              <p className="text-muted-foreground">
                We recommend booking at least 2-3 weeks in advance, especially for weekend events. 
                Popular times like holidays may require more notice.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Can I bring my own food and drinks?</h3>
              <p className="text-muted-foreground">
                Yes! You're welcome to bring your own food and non-alcoholic beverages. 
                We have refrigerator space and serving areas available.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">How many people can you accommodate?</h3>
              <p className="text-muted-foreground">
                Our studio can accommodate groups of up to 40 people. For larger groups, 
                please contact us to discuss options.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">When will our pottery be ready?</h3>
              <p className="text-muted-foreground">
                Pottery needs to be glazed and fired after painting, which takes approximately 
                1-2 weeks. We'll contact you when your pieces are ready for pickup.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Is a deposit required?</h3>
              <p className="text-muted-foreground">
                Yes, a 50% deposit is required to secure your reservation. The remaining balance 
                is due on the day of your event.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">What if someone can't attend?</h3>
              <p className="text-muted-foreground">
                Final guest count is required 48 hours before your event. After that time, 
                you will be charged for the confirmed number of guests.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-studio-teal text-white">
        <div className="studio-container text-center">
          <div className="inline-flex items-center justify-center bg-white/20 w-16 h-16 rounded-full mb-6">
            <CalendarIcon className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Event?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Contact us today to check availability and discuss your event details. We'll help you create a memorable and creative celebration!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-studio-teal hover:bg-white/90 font-medium py-6 px-8">
              Book Online
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-medium py-6 px-8">
              Call (920) 303-7600
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Parties;
