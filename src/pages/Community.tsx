
import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Heart, Award, Calendar, MapPin } from 'lucide-react';

const communityEvents = [
  {
    id: 1,
    title: "Art in the Park",
    description: "Join us for a day of creativity in the park! We'll have pottery painting stations, demonstrations, and fun for the whole family.",
    date: "June 15, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "South Park, Oshkosh",
    image: "https://images.unsplash.com/photo-1607113284389-2aeaf0952a56?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Community Art Show",
    description: "A showcase of pottery and artwork created by our studio members and local artists. Come see amazing creations and meet the artists!",
    date: "August 8-10, 2025",
    time: "Various Times",
    location: "Fire Escape Art Studio",
    image: "https://images.unsplash.com/photo-1577720580479-7d839d829c1a?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Pottery for a Purpose",
    description: "A special fundraising event where proceeds from pottery painting will benefit local children's art programs.",
    date: "September 22, 2025",
    time: "12:00 PM - 8:00 PM",
    location: "Fire Escape Art Studio",
    image: "https://images.unsplash.com/photo-1630664296929-0a88acb6c242?q=80&w=2070&auto=format&fit=crop"
  }
];

const partnerships = [
  {
    id: 1,
    name: "Oshkosh Public Schools",
    description: "We work with local schools to provide art education experiences and field trips.",
    logo: "https://placehold.co/200x200/FFBF00/FFF?text=OPS"
  },
  {
    id: 2,
    name: "Oshkosh Community Foundation",
    description: "Through grants from the Oshkosh Community Foundation, we provide art programs to underserved youth.",
    logo: "https://placehold.co/200x200/2EC4B6/FFF?text=OCF"
  },
  {
    id: 3,
    name: "Senior Activity Centers",
    description: "We bring mobile pottery painting to senior centers throughout Winnebago County.",
    logo: "https://placehold.co/200x200/FF6B35/FFF?text=SAC"
  },
  {
    id: 4,
    name: "Oshkosh Downtown Alliance",
    description: "We participate in downtown events and initiatives to promote arts in our community.",
    logo: "https://placehold.co/200x200/FF5C8D/FFF?text=ODA"
  }
];

const Community = () => {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">Community Involvement</h1>
            <p className="text-xl text-white/90 animate-fade-in" style={{ animationDelay: '100ms' }}>
              At Fire Escape Art Studio, we believe in the power of art to strengthen communities. 
              Learn about our events, partnerships, and initiatives that give back.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-white">
        <div className="studio-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-studio-pink/10 rounded-full text-studio-pink text-sm font-medium mb-4">
                Our Community Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Art Creates Connection</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We believe that art has the power to bring people together, foster understanding, and build stronger communities. 
                  That's why community involvement is at the heart of everything we do at Fire Escape Art Studio.
                </p>
                <p>
                  From partnering with local schools and organizations to hosting community events and fundraisers, 
                  we're committed to making art accessible to everyone in Oshkosh and the surrounding areas.
                </p>
                <p>
                  Our studio serves as a creative hub where people from all walks of life can come together, 
                  express themselves, and connect through the shared experience of creating art.
                </p>
              </div>
              <div className="mt-8 space-x-4">
                <Button className="bg-studio-pink hover:bg-studio-pink/90">Our Initiatives</Button>
                <Button variant="outline" className="border-studio-pink text-studio-pink hover:bg-studio-pink/10">
                  Get Involved
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1560421683-6856ea585c78?q=80&w=2574&auto=format&fit=crop" 
                  alt="Community art event" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 w-40">
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto text-studio-pink mb-2" />
                  <p className="font-bold">1,200+</p>
                  <p className="text-sm text-muted-foreground">Community Members Served</p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 w-40">
                <div className="text-center">
                  <Heart className="h-8 w-8 mx-auto text-studio-pink mb-2" />
                  <p className="font-bold">$15,000+</p>
                  <p className="text-sm text-muted-foreground">Raised for Causes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Events */}
      <section className="py-20 bg-studio-cream">
        <div className="studio-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-studio-orange/10 rounded-full text-studio-orange text-sm font-medium mb-4">
              Upcoming Events
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Community Events Calendar</h2>
            <p className="text-muted-foreground">
              Join us for these upcoming community events and activities. Mark your calendars and become part of our creative community!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {communityEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <Calendar className="w-4 h-4 mr-2 text-studio-orange" />
                      <span>{event.date} | {event.time}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-studio-orange" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-studio-orange hover:bg-studio-orange/90">Learn More</Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-studio-teal hover:bg-studio-teal/90">
              View Full Events Calendar
            </Button>
          </div>
        </div>
      </section>

      {/* Community Partnerships */}
      <section className="py-20 bg-white">
        <div className="studio-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-studio-teal/10 rounded-full text-studio-teal text-sm font-medium mb-4">
              Our Partners
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Community Partnerships</h2>
            <p className="text-muted-foreground">
              We collaborate with these wonderful organizations to bring art to our community. 
              Through these partnerships, we expand our reach and impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerships.map((partner) => (
              <Card key={partner.id} className="p-6 flex flex-col md:flex-row items-center gap-6 hover:shadow-lg transition-all duration-300">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                  <p className="text-muted-foreground">{partner.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 bg-studio-cream rounded-lg max-w-3xl mx-auto text-center">
            <Award className="h-12 w-12 mx-auto text-studio-teal mb-4" />
            <h3 className="text-2xl font-bold mb-3">Become a Partner</h3>
            <p className="text-muted-foreground mb-6">
              Interested in partnering with Fire Escape Art Studio? We're always looking for new ways to collaborate 
              with local businesses, schools, and organizations to bring art to our community.
            </p>
            <Button className="bg-studio-teal hover:bg-studio-teal/90">
              Contact Us About Partnerships
            </Button>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-studio-pink/10">
        <div className="studio-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-1 bg-studio-pink/20 rounded-full text-studio-pink text-sm font-medium mb-4">
                Get Involved
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Volunteer With Us</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We offer various volunteer opportunities for community members who want to share their time and talents. 
                  Whether you're an art enthusiast or simply enjoy working with people, we have a place for you.
                </p>
                <p>
                  Our volunteers help with community events, assist in classes, support administrative tasks, 
                  and contribute to special projects. It's a great way to connect with others while supporting arts in the community.
                </p>
                <p>
                  Volunteers receive special perks, including studio discounts and invitations to special events. 
                  Most importantly, you'll be helping to make art accessible to everyone in our community.
                </p>
              </div>
              <div className="mt-8">
                <Button className="bg-studio-pink hover:bg-studio-pink/90">
                  Apply to Volunteer
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1769&auto=format&fit=crop" 
                alt="Volunteers at art event" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-studio-pink text-white">
        <div className="studio-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Creative Community</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            From special events to volunteer opportunities, there are many ways to get involved with 
            Fire Escape Art Studio and help bring the joy of art to our community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="w-full sm:w-auto bg-white text-studio-pink hover:bg-white/90">
              Subscribe to Our Newsletter
            </Button>
            <Button className="w-full sm:w-auto bg-studio-charcoal text-white hover:bg-studio-charcoal/90">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
