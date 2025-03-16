
import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Star, Users, Palette, Sparkles } from 'lucide-react';

const values = [
  {
    icon: <Palette className="h-12 w-12 text-studio-orange" />,
    title: 'Creativity For All',
    description: 'We believe everyone has creative potential, regardless of age or experience.'
  },
  {
    icon: <Heart className="h-12 w-12 text-studio-pink" />,
    title: 'Community Connection',
    description: 'Our studio is a place to connect, share, and build meaningful relationships.'
  },
  {
    icon: <Star className="h-12 w-12 text-studio-yellow" />,
    title: 'Quality Experiences',
    description: 'We provide high-quality materials and instruction for the best creative experience.'
  },
  {
    icon: <Users className="h-12 w-12 text-studio-teal" />,
    title: 'Inclusive Environment',
    description: 'We create a welcoming space where everyone feels comfortable to create and express.'
  },
  {
    icon: <Sparkles className="h-12 w-12 text-studio-pink" />,
    title: 'Joy in Creation',
    description: 'We celebrate the joy that comes from making something with your own hands.'
  }
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-studio-orange">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-64 w-64 -top-20 -right-20 rounded-full bg-white/10"></div>
          <div className="absolute h-96 w-96 -bottom-40 -left-40 rounded-full bg-white/10"></div>
        </div>
        <div className="studio-container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">About Us</h1>
            <p className="text-xl text-white/90 animate-fade-in" style={{ animationDelay: '100ms' }}>
              Learn more about Fire Escape Art Studio, our mission, and the creative experiences we offer to the Oshkosh community.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="studio-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-1 bg-studio-orange/10 rounded-full text-studio-orange text-sm font-medium mb-4">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Fire Escape Art Studio Journey</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Fire Escape Art Studio was founded with a simple but powerful vision: to create a space where art is accessible to everyone. 
                  Located in the heart of Oshkosh, our studio opened its doors in 2015 and has since become a beloved creative hub in our community.
                </p>
                <p>
                  What started as a small paint-your-own pottery studio has grown into a vibrant art center offering a variety of creative experiences 
                  from pottery painting to wheel throwing classes, canvas painting, and specialized workshops for all ages.
                </p>
                <p>
                  Our name, "Fire Escape," represents both the firing process that transforms pottery and the idea that art provides an escape 
                  from everyday life—a chance to slow down, express yourself, and create something meaningful with your own hands.
                </p>
                <p>
                  Today, we continue to grow and evolve while staying true to our core mission: bringing the joy of art to everyone in our community.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1604079628040-94301bb21b91?q=80&w=1974&auto=format&fit=crop" 
                    alt="Studio interior" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=1770&auto=format&fit=crop" 
                    alt="Painting in progress" 
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1974&auto=format&fit=crop" 
                  alt="Colorful pottery display" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-studio-cream">
        <div className="studio-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-studio-orange/10 rounded-full text-studio-orange text-sm font-medium mb-4">
              Our Values
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Stand For</h2>
            <p className="text-muted-foreground">
              At Fire Escape Art Studio, our values guide everything we do. We believe in the power of creativity to transform lives, 
              build community, and bring joy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="studio-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-studio-orange/10 rounded-full text-studio-orange text-sm font-medium mb-4">
              Our Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet The Artists</h2>
            <p className="text-muted-foreground">
              Our team of passionate artists and instructors bring diverse skills and experiences to Fire Escape Art Studio. 
              We're all united by our love of art and our desire to share it with you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="h-80 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1974&auto=format&fit=crop" 
                  alt="Studio Owner" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Jennifer Wilson</h3>
                <p className="text-studio-orange mb-3">Studio Owner & Ceramics Instructor</p>
                <p className="text-muted-foreground">
                  Jennifer founded Fire Escape with a vision to create a welcoming space for artists of all levels. 
                  She has over 15 years of experience in ceramics and a passion for teaching.
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-80 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1541779408-c1f3942f3a71?q=80&w=1974&auto=format&fit=crop" 
                  alt="Pottery Instructor" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Michael Rodriguez</h3>
                <p className="text-studio-teal mb-3">Lead Pottery Instructor</p>
                <p className="text-muted-foreground">
                  Michael specializes in wheel throwing and sculptural ceramics. His patient teaching style 
                  makes learning pottery accessible and enjoyable for beginners.
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-80 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1614583225154-5fcdda07019e?q=80&w=2070&auto=format&fit=crop" 
                  alt="Painting Instructor" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                <p className="text-studio-yellow mb-3">Painting & Mixed Media Instructor</p>
                <p className="text-muted-foreground">
                  With a background in fine arts, Sarah brings creativity and technical expertise to our 
                  painting classes. She loves inspiring students to find their unique artistic voice.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-studio-orange text-white">
        <div className="studio-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Come Create With Us</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Now that you know more about us, we'd love to welcome you to our studio. Join us for a class, 
            book a private event, or stop by during our open hours to paint pottery!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/classes">
              <Button className="w-full sm:w-auto bg-white text-studio-orange hover:bg-white/90">
                View Our Classes
              </Button>
            </Link>
            <Link to="/parties">
              <Button className="w-full sm:w-auto bg-studio-charcoal text-white hover:bg-studio-charcoal/90">
                Book a Party
              </Button>
            </Link>
            <Link to="/info">
              <Button variant="outline" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white/10">
                Plan Your Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
