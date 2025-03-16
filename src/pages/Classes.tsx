
import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Users, Palette } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const classes = [
  {
    id: 1,
    title: "Wheel Throwing Basics",
    description: "Learn the fundamentals of working with clay on the pottery wheel. Perfect for beginners!",
    instructor: "Michael Rodriguez",
    date: "Every Saturday",
    time: "10:00 AM - 12:00 PM",
    price: "$45",
    category: "pottery",
    ageGroup: "adults",
    image: "https://images.unsplash.com/photo-1565104271227-905cf5b8773c?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Kids Pottery Painting",
    description: "A fun class designed especially for young artists to explore pottery painting.",
    instructor: "Sarah Johnson",
    date: "Every Tuesday",
    time: "4:00 PM - 5:30 PM",
    price: "$30",
    category: "painting",
    ageGroup: "kids",
    image: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Advanced Wheel Techniques",
    description: "Take your wheel throwing skills to the next level with advanced techniques and forms.",
    instructor: "Michael Rodriguez",
    date: "Every Sunday",
    time: "1:00 PM - 3:30 PM",
    price: "$55",
    category: "pottery",
    ageGroup: "adults",
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=1972&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Fluid Art Workshop",
    description: "Create stunning abstract designs using fluid art techniques on canvas.",
    instructor: "Emily Parker",
    date: "Second Friday of each month",
    time: "6:00 PM - 8:00 PM",
    price: "$40",
    category: "painting",
    ageGroup: "adults",
    image: "https://images.unsplash.com/photo-1576074645502-d0aec27c80d0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Family Pottery Day",
    description: "A special class where families can create pottery together. All ages welcome!",
    instructor: "Jennifer Wilson",
    date: "First Saturday of each month",
    time: "2:00 PM - 4:00 PM",
    price: "$35 per person",
    category: "pottery",
    ageGroup: "family",
    image: "https://images.unsplash.com/photo-1609258612794-3b42d6ce53c6?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Teen Art Night",
    description: "A creative space just for teens to explore various art forms and techniques.",
    instructor: "Sarah Johnson",
    date: "Every Thursday",
    time: "6:00 PM - 8:00 PM",
    price: "$35",
    category: "mixed",
    ageGroup: "teens",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2080&auto=format&fit=crop"
  }
];

const ClassCard = ({ cls }: { cls: typeof classes[0] }) => (
  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
    <div className="h-48 overflow-hidden">
      <img src={cls.image} alt={cls.title} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold">{cls.title}</h3>
        <span className="bg-studio-orange text-white px-3 py-1 rounded-full text-sm font-medium">{cls.price}</span>
      </div>
      <p className="text-muted-foreground mb-4">{cls.description}</p>
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm">
          <Palette className="w-4 h-4 mr-2 text-studio-teal" />
          <span>Instructor: {cls.instructor}</span>
        </div>
        <div className="flex items-center text-sm">
          <Calendar className="w-4 h-4 mr-2 text-studio-teal" />
          <span>{cls.date}</span>
        </div>
        <div className="flex items-center text-sm">
          <Clock className="w-4 h-4 mr-2 text-studio-teal" />
          <span>{cls.time}</span>
        </div>
      </div>
      <Button className="w-full">Register Now</Button>
    </div>
  </Card>
);

const Classes = () => {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">Classes & Workshops</h1>
            <p className="text-xl text-white/90 animate-fade-in" style={{ animationDelay: '100ms' }}>
              Explore our variety of classes and workshops for all ages and skill levels. 
              From pottery wheel throwing to painting techniques, there's something for everyone!
            </p>
          </div>
        </div>
      </section>

      {/* Class Filtering Section */}
      <section className="py-20 bg-white">
        <div className="studio-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">Find Your Perfect Class</h2>
            <p className="text-muted-foreground">
              Browse our current class offerings and filter by category or age group to find the perfect creative experience for you.
            </p>
          </div>

          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="flex flex-wrap justify-center w-full max-w-2xl mx-auto mb-6">
              <TabsTrigger value="all">All Classes</TabsTrigger>
              <TabsTrigger value="pottery">Pottery</TabsTrigger>
              <TabsTrigger value="painting">Painting</TabsTrigger>
              <TabsTrigger value="mixed">Mixed Media</TabsTrigger>
              <TabsTrigger value="kids">Kids</TabsTrigger>
              <TabsTrigger value="adults">Adults</TabsTrigger>
              <TabsTrigger value="family">Family</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {classes.map((cls) => (
                <ClassCard key={cls.id} cls={cls} />
              ))}
            </TabsContent>

            <TabsContent value="pottery" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {classes.filter(cls => cls.category === 'pottery').map((cls) => (
                <ClassCard key={cls.id} cls={cls} />
              ))}
            </TabsContent>

            <TabsContent value="painting" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {classes.filter(cls => cls.category === 'painting').map((cls) => (
                <ClassCard key={cls.id} cls={cls} />
              ))}
            </TabsContent>

            <TabsContent value="mixed" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {classes.filter(cls => cls.category === 'mixed').map((cls) => (
                <ClassCard key={cls.id} cls={cls} />
              ))}
            </TabsContent>

            <TabsContent value="kids" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {classes.filter(cls => cls.ageGroup === 'kids').map((cls) => (
                <ClassCard key={cls.id} cls={cls} />
              ))}
            </TabsContent>

            <TabsContent value="adults" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {classes.filter(cls => cls.ageGroup === 'adults').map((cls) => (
                <ClassCard key={cls.id} cls={cls} />
              ))}
            </TabsContent>

            <TabsContent value="family" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {classes.filter(cls => cls.ageGroup === 'family').map((cls) => (
                <ClassCard key={cls.id} cls={cls} />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Class Policies */}
      <section className="py-16 bg-studio-cream">
        <div className="studio-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title">Class Policies</h2>
            <div className="bg-white rounded-lg shadow-md p-8 space-y-4">
              <div>
                <h3 className="text-xl font-bold mb-2 text-studio-teal">Registration</h3>
                <p className="text-muted-foreground">
                  Pre-registration and payment are required for all classes. You can register online, by phone, or in person at the studio.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-studio-teal">Cancellations</h3>
                <p className="text-muted-foreground">
                  We require 48-hour notice for cancellations to receive a refund or class credit. 
                  No-shows or late cancellations will not receive refunds or credits.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-studio-teal">Materials</h3>
                <p className="text-muted-foreground">
                  All class materials are included in the price unless otherwise specified. 
                  Please wear clothes that can get dirty or bring an apron.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-studio-teal">Class Sizes</h3>
                <p className="text-muted-foreground">
                  Classes have minimum and maximum enrollment requirements. If a class doesn't meet the minimum, 
                  participants will be notified and offered alternate options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-studio-orange text-white">
        <div className="studio-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Creative?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Register for a class today and begin your creative journey with us! 
            For any questions about our classes, please contact us.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="w-full sm:w-auto bg-white text-studio-orange hover:bg-white/90">
              Register for a Class
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

export default Classes;
