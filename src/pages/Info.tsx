
import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Clock, CalendarDays, MapPin, Phone, Mail, DollarSign, Footprints, Info as InfoIcon } from 'lucide-react';
import StudioMap from '@/components/StudioMap';

const Info = () => {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">Studio Information</h1>
            <p className="text-xl text-white/90 animate-fade-in" style={{ animationDelay: '100ms' }}>
              Everything you need to know about visiting Fire Escape Art Studio — 
              hours, location, pricing, and frequently asked questions.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-20 bg-white">
        <div className="studio-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Plan Your Visit</h2>
            <p className="text-muted-foreground">
              Find all the essential information you need to plan your visit to Fire Escape Art Studio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="h-12 w-12 rounded-full bg-studio-orange/10 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-studio-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3">Hours of Operation</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex justify-between">
                  <span>Monday - Thursday:</span>
                  <span className="font-medium">11:00 AM - 8:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Friday - Saturday:</span>
                  <span className="font-medium">10:00 AM - 9:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-medium">12:00 PM - 5:00 PM</span>
                </p>
              </div>
              <div className="mt-4 text-sm">
                <p className="text-studio-orange">
                  *Hours may vary during holidays and special events
                </p>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="h-12 w-12 rounded-full bg-studio-teal/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-studio-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3">Location</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>927 Oregon Street</p>
                <p>Oshkosh, Wisconsin 54902</p>
              </div>
              <div className="mt-4">
                <Button className="w-full bg-studio-teal hover:bg-studio-teal/90">
                  Get Directions
                </Button>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="h-12 w-12 rounded-full bg-studio-yellow/10 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-studio-yellow" />
              </div>
              <h3 className="text-xl font-bold mb-3">Contact Us</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-studio-yellow" />
                  <span>(920) 230-6762</span>
                </p>
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-studio-yellow" />
                  <span>info@fireescape.com</span>
                </p>
              </div>
              <div className="mt-4">
                <Button className="w-full bg-studio-yellow hover:bg-studio-yellow/90">
                  Contact Form
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-20 bg-studio-cream">
        <div className="studio-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-studio-orange/10 rounded-full text-studio-orange text-sm font-medium mb-4">
              Pricing
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pottery Painting Prices</h2>
            <p className="text-muted-foreground">
              Our paint-your-own pottery studio offers a wide selection of ceramic pieces at various price points. 
              All studio fees and materials are included in the price of your pottery.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <DollarSign className="h-8 w-8 text-studio-orange mr-3" />
                <h3 className="text-2xl font-bold">How Pricing Works</h3>
              </div>
              
              <p className="mb-6 text-muted-foreground">
                At Fire Escape Art Studio, pricing is simple. The price you see on the pottery piece includes:
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-studio-teal/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-studio-teal font-bold">1</span>
                  </div>
                  <div>
                    <span className="font-semibold">The ceramic piece itself</span>
                    <p className="text-sm text-muted-foreground">Choose from mugs, plates, figurines, and more</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-studio-teal/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-studio-teal font-bold">2</span>
                  </div>
                  <div>
                    <span className="font-semibold">Studio fee and all materials</span>
                    <p className="text-sm text-muted-foreground">Paint, brushes, glazing, and firing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-studio-teal/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-studio-teal font-bold">3</span>
                  </div>
                  <div>
                    <span className="font-semibold">Unlimited studio time</span>
                    <p className="text-sm text-muted-foreground">Take as long as you need to complete your masterpiece</p>
                  </div>
                </li>
              </ul>
              
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4">Pottery Price Ranges</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h5 className="font-bold text-studio-orange mb-2">Small Items</h5>
                    <p className="text-2xl font-bold mb-1">$12 - $24</p>
                    <p className="text-sm text-muted-foreground">Ornaments, small figurines, small bowls</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h5 className="font-bold text-studio-orange mb-2">Medium Items</h5>
                    <p className="text-2xl font-bold mb-1">$25 - $42</p>
                    <p className="text-sm text-muted-foreground">Mugs, plates, medium bowls, larger figurines</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h5 className="font-bold text-studio-orange mb-2">Large Items</h5>
                    <p className="text-2xl font-bold mb-1">$45 - $85+</p>
                    <p className="text-sm text-muted-foreground">Platters, large bowls, cookie jars, specialty items</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Button className="bg-studio-orange hover:bg-studio-orange/90">
                  View Our Pottery Selection
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Studio Map */}
      <section className="py-20 bg-white">
        <div className="studio-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-studio-teal/10 rounded-full text-studio-teal text-sm font-medium mb-4">
              Find Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Studio Location</h2>
            <p className="text-muted-foreground">
              We're conveniently located in downtown Oshkosh, with plenty of parking available nearby.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <StudioMap />
          </div>

          <div className="max-w-3xl mx-auto mt-8 p-6 bg-studio-cream rounded-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Footprints className="mr-2 h-5 w-5 text-studio-teal" />
              Getting Here
            </h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                <span className="font-medium">By Car:</span> We're located at 927 Oregon Street in Oshkosh. 
                Street parking is available, and there's a public lot just one block north of our location.
              </p>
              <p>
                <span className="font-medium">Public Transit:</span> GO Transit Route 5 stops just a block away from our studio.
              </p>
              <p>
                <span className="font-medium">Nearby Landmarks:</span> We're two blocks south of the Oshkosh Public Library 
                and four blocks east of the Leach Amphitheater.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-studio-cream">
        <div className="studio-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-studio-yellow/10 rounded-full text-studio-yellow text-sm font-medium mb-4">
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Find answers to our most commonly asked questions. If you don't see what you're looking for, 
              feel free to contact us directly.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="bg-white p-6 rounded-lg shadow-md">
              <AccordionItem value="item-1">
                <AccordionTrigger>Do I need to make a reservation for pottery painting?</AccordionTrigger>
                <AccordionContent>
                  Walk-ins are welcome for pottery painting during our regular hours! However, if you're coming with a group of 
                  6 or more people, we recommend making a reservation to ensure we have enough table space ready for you. 
                  During busy seasons (holidays, summer weekends), reservations are recommended for all groups.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>How long does it take to paint pottery?</AccordionTrigger>
                <AccordionContent>
                  Most people spend about 1-2 hours painting their pottery, but you're welcome to take as long as you need. 
                  The time depends on the complexity of your design and the size of your pottery piece. If you need to leave 
                  before finishing, we offer "Pottery To-Go" kits that allow you to finish at home.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>When will my pottery be ready to pick up?</AccordionTrigger>
                <AccordionContent>
                  After you finish painting, we apply glaze and fire your pottery in our kiln. The process typically takes 7-10 days. 
                  We'll call or email you when your piece is ready for pickup. If you're from out of town, we can ship your 
                  finished piece to you for an additional fee.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>Is the pottery food, microwave, and dishwasher safe?</AccordionTrigger>
                <AccordionContent>
                  Yes! All of our pottery is food safe, microwave safe, and dishwasher safe after it's been glazed and fired. 
                  Our glazes are lead-free and meet all safety standards for food-use items.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>Can children participate in pottery painting?</AccordionTrigger>
                <AccordionContent>
                  Absolutely! Pottery painting is perfect for all ages. We have pieces and projects suitable for children as young as 3, 
                  and our staff is experienced in helping young artists. We provide child-friendly brushes and have step stools 
                  available for our smaller guests.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6">
                <AccordionTrigger>Do you offer gift certificates?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer gift certificates in any denomination. They can be purchased in-studio or online through our website. 
                  Gift certificates never expire and can be used for pottery painting, classes, workshops, or merchandise.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7">
                <AccordionTrigger>What's the difference between a class and open studio time?</AccordionTrigger>
                <AccordionContent>
                  During open studio time, you can come in without a reservation to paint pottery at your own pace. Our staff is 
                  available to provide basic assistance and answer questions. Classes and workshops, on the other hand, are 
                  structured sessions led by an instructor who guides you through specific techniques or projects. Classes 
                  require advance registration and have specific start and end times.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-8">
                <AccordionTrigger>Can I bring food and drinks to the studio?</AccordionTrigger>
                <AccordionContent>
                  We allow snacks and non-alcoholic beverages in the studio. For private parties, you're welcome to bring in food 
                  and we can accommodate serving needs. We also have partnerships with several local restaurants that can deliver 
                  to the studio if you'd like to order food during your visit.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="max-w-3xl mx-auto mt-12 p-6 bg-white rounded-lg text-center shadow-md">
            <InfoIcon className="h-12 w-12 mx-auto text-studio-yellow mb-4" />
            <h3 className="text-2xl font-bold mb-3">Have More Questions?</h3>
            <p className="text-muted-foreground mb-6">
              We're here to help! If you have a question that wasn't answered above, please feel free to contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-studio-yellow hover:bg-studio-yellow/90">
                Contact Us
              </Button>
              <Button variant="outline" className="border-studio-yellow text-studio-yellow hover:bg-studio-yellow/10">
                Call (920) 230-6762
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Policies */}
      <section className="py-20 bg-white">
        <div className="studio-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-studio-orange/10 rounded-full text-studio-orange text-sm font-medium mb-4">
              Policies
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Studio Policies</h2>
            <p className="text-muted-foreground">
              To ensure everyone has a great experience at our studio, we maintain the following policies.
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 text-studio-orange">Pottery Pickup</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Pottery must be picked up within 60 days of completion</li>
                <li>• We'll contact you when your pieces are ready</li>
                <li>• ID required for pottery pickup</li>
                <li>• After 60 days, unclaimed pottery becomes studio property</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 text-studio-orange">Payment & Refunds</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• We accept cash, credit cards, and gift certificates</li>
                <li>• Payment is due at the time of service</li>
                <li>• No refunds on painted pottery once it enters the firing process</li>
                <li>• Class registrations can be refunded with 48-hour notice</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 text-studio-orange">Studio Etiquette</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Children under 12 must be supervised by an adult</li>
                <li>• Please be respectful of other painters and their space</li>
                <li>• Cell phones should be set to vibrate</li>
                <li>• No outside paints or materials on studio pottery</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 text-studio-orange">Damages & Firing</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• We take great care when handling and firing your pottery</li>
                <li>• Rarely, pieces may break or have glaze issues during firing</li>
                <li>• If this occurs, we offer a replacement piece to paint again</li>
                <li>• We cannot guarantee exact results for specialty glazes</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-studio-teal text-white">
        <div className="studio-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Creative?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Now that you know all about our studio, we can't wait to welcome you! 
            Stop by during our open hours or sign up for an upcoming class.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="w-full sm:w-auto bg-white text-studio-teal hover:bg-white/90">
              View Our Classes
            </Button>
            <Button className="w-full sm:w-auto bg-studio-charcoal text-white hover:bg-studio-charcoal/90">
              Plan Your Visit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Info;
