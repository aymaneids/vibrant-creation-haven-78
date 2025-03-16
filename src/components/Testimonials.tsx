
import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    text: 'We had my daughter\'s birthday party here and it was fantastic! The staff was so patient with all the children and everyone had a blast. Highly recommend for any age group.',
    rating: 5
  },
  {
    name: 'Michael Rodriguez',
    text: 'I took a wheel throwing class here and loved it. The instructor was knowledgeable and encouraging. Even as a complete beginner, I felt comfortable and created something I\'m proud of.',
    rating: 5
  },
  {
    name: 'Emily Parker',
    text: 'Fire Escape is my go-to place for a relaxing creative outlet. The atmosphere is so welcoming and the variety of pottery pieces is impressive. It\'s a perfect activity for date night!',
    rating: 5
  }
];

const Testimonials = () => {
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

    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="studio-container" ref={sectionRef}>
        <h2 className="section-title mb-12">What Our Customers Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`testimonial-card opacity-0`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card className="p-6 h-full border-t-4 border-t-studio-orange transition-all duration-300 hover:shadow-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-studio-yellow text-studio-yellow" />
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground italic">&ldquo;{testimonial.text}&rdquo;</p>
                <p className="font-semibold">— {testimonial.name}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
