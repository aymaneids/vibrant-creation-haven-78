
import { useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Brush, Users, Palette } from 'lucide-react';

const activities = [
  {
    title: 'Paint-Your-Own Pottery',
    icon: <Palette className="w-10 h-10 text-studio-orange" />,
    description: 'Select from our wide variety of pottery pieces and paint them with your own unique design. Perfect for all ages and skill levels.',
    link: '/info',
    image: 'https://images.unsplash.com/photo-1590422749897-47726e632a0e?q=80&w=1974&auto=format&fit=crop'
  },
  {
    title: 'Classes & Workshops',
    icon: <Brush className="w-10 h-10 text-studio-teal" />,
    description: 'Learn new skills with our rotating selection of classes including wheel throwing, fluid art, canvas painting, and more.',
    link: '/classes',
    image: 'https://images.unsplash.com/photo-1559638753-d8ffd2d88d7b?q=80&w=1972&auto=format&fit=crop'
  },
  {
    title: 'Private Parties & Events',
    icon: <Users className="w-10 h-10 text-studio-yellow" />,
    description: 'Celebrate special occasions with a private art party. Perfect for birthdays, team building, bridal showers, and more.',
    link: '/parties',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop'
  }
];

const FeaturedActivities = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-animation');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.activity-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-20 bg-studio-cream">
      <div className="studio-container" ref={sectionRef}>
        <h2 className="section-title mb-12">Our Creative Experiences</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div 
              key={activity.title} 
              className={`activity-card opacity-0`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex justify-center">{activity.icon}</div>
                  <h3 className="text-xl font-bold text-center mb-3">{activity.title}</h3>
                  <p className="text-center text-muted-foreground mb-6">{activity.description}</p>
                  <div className="flex justify-center">
                    <Link to={activity.link}>
                      <Button className="bg-studio-orange hover:bg-studio-orange/90 text-white">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedActivities;
