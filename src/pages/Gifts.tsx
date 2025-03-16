
import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift, DollarSign, ShoppingCart, Info, Check } from 'lucide-react';

const giftCertificates = [
  {
    id: 1,
    amount: 25,
    description: "Perfect for a small pottery painting session or a contribution toward a class."
  },
  {
    id: 2,
    amount: 50,
    description: "Great for a pottery painting session for two or a single class registration."
  },
  {
    id: 3,
    amount: 75,
    description: "Ideal for a family painting session or a specialized workshop."
  },
  {
    id: 4,
    amount: 100,
    description: "Our most popular option! Perfect for multiple sessions or classes."
  },
  {
    id: 5,
    amount: 200,
    description: "The ultimate gift for the art enthusiast in your life!"
  }
];

const giftItems = [
  {
    id: 1,
    name: "Handmade Pottery Collection",
    price: "$45-$120",
    description: "Browse our collection of handmade pottery pieces created by local artisans and studio staff.",
    image: "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Artist Paint Kit",
    price: "$35",
    description: "A curated set of high-quality paints, brushes, and tools for the artist in your life.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Pottery Tool Set",
    price: "$45",
    description: "Professional-grade pottery tools for wheel throwing and hand building enthusiasts.",
    image: "https://images.unsplash.com/photo-1591112872139-e21d01d7e97f?q=80&w=1974&auto=format&fit=crop"
  }
];

const Gifts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-studio-yellow">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-64 w-64 -top-20 -right-20 rounded-full bg-white/10"></div>
          <div className="absolute h-96 w-96 -bottom-40 -left-40 rounded-full bg-white/10"></div>
        </div>
        <div className="studio-container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">Gift Certificates & Art Gifts</h1>
            <p className="text-xl text-white/90 animate-fade-in" style={{ animationDelay: '100ms' }}>
              Give the gift of creativity with our gift certificates and handmade art items.
              Perfect for birthdays, holidays, or just because!
            </p>
          </div>
        </div>
      </section>

      {/* Gift Certificates Section */}
      <section className="py-20 bg-white">
        <div className="studio-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-studio-yellow/10 rounded-full text-studio-yellow text-sm font-medium mb-4">
              Gift Certificates
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Perfect Creative Gift</h2>
            <p className="text-muted-foreground">
              Our gift certificates make the perfect present for anyone who enjoys art and creativity. 
              They can be used for pottery painting, classes, workshops, or merchandise in our studio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {giftCertificates.map((certificate) => (
              <Card key={certificate.id} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-studio-yellow/10 flex items-center justify-center">
                    <DollarSign className="h-8 w-8 text-studio-yellow" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-3">${certificate.amount}</h3>
                <p className="text-center text-muted-foreground mb-6">{certificate.description}</p>
                <Button className="w-full bg-studio-yellow hover:bg-studio-yellow/90 text-white">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-6 bg-studio-cream rounded-lg shadow-md max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Info className="mr-2 h-5 w-5 text-studio-yellow" />
              Gift Certificate Information
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-studio-teal flex-shrink-0 mt-0.5" />
                <span>Gift certificates are available in any denomination, not just the values shown above.</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-studio-teal flex-shrink-0 mt-0.5" />
                <span>Certificates can be purchased online or in-studio and never expire.</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-studio-teal flex-shrink-0 mt-0.5" />
                <span>Online purchases can be sent via email or printed at home.</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-studio-teal flex-shrink-0 mt-0.5" />
                <span>Physical gift certificates are available in-studio with decorative envelopes.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gift Shop Items */}
      <section className="py-20 bg-studio-cream">
        <div className="studio-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-studio-orange/10 rounded-full text-studio-orange text-sm font-medium mb-4">
              Our Gift Shop
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Handmade Gifts & Art Supplies</h2>
            <p className="text-muted-foreground">
              Browse our selection of handmade pottery, art kits, and supplies. 
              Each piece is unique and makes a wonderful gift for art lovers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {giftItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <span className="text-studio-orange font-semibold">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <Button className="w-full bg-studio-teal hover:bg-studio-teal/90">
                    <Gift className="mr-2 h-4 w-4" /> Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg mb-4">
              For our full selection of gift items, please visit our studio in person.
            </p>
            <Button className="bg-studio-orange hover:bg-studio-orange/90">
              Visit Our Studio
            </Button>
          </div>
        </div>
      </section>

      {/* Custom Gift Ideas */}
      <section className="py-20 bg-white">
        <div className="studio-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">Custom Gift Ideas</h2>
            <p className="text-muted-foreground">
              Looking for something unique? Here are some custom gift options that we can help you create:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?q=80&w=1973&auto=format&fit=crop" 
                alt="Custom gift package" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="bg-studio-cream p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-studio-orange">Custom Gift Baskets</h3>
                <p className="text-muted-foreground">
                  We can create custom gift baskets combining pottery items, art supplies, and gift certificates tailored to your budget.
                </p>
              </div>
              <div className="bg-studio-cream p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-studio-teal">Private Party Gift Certificates</h3>
                <p className="text-muted-foreground">
                  Give the gift of a private party experience for birthdays, team building, or special celebrations.
                </p>
              </div>
              <div className="bg-studio-cream p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-studio-yellow">Custom Pottery Commissions</h3>
                <p className="text-muted-foreground">
                  Work with our artists to create a one-of-a-kind pottery piece for someone special.
                </p>
              </div>
              <div className="mt-6">
                <Button className="bg-studio-pink hover:bg-studio-pink/90 text-white">
                  Contact Us About Custom Gifts
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-studio-yellow text-white">
        <div className="studio-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Give the Gift of Creativity Today</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Whether you choose a gift certificate or a handmade item, you're giving someone the opportunity 
            to explore their creative side and make memories that will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="w-full sm:w-auto bg-white text-studio-yellow hover:bg-white/90">
              Purchase a Gift Certificate
            </Button>
            <Button className="w-full sm:w-auto bg-studio-charcoal text-white hover:bg-studio-charcoal/90">
              Visit Our Gift Shop
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gifts;
