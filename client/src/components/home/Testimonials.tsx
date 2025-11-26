import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/mockData";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase mb-2 text-sm">Testimonios</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Lo que dicen nuestros clientes</h3>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2 pl-6">
                <div className="p-2 h-full">
                  <Card className="h-full border-none shadow-md bg-white relative overflow-hidden group hover:shadow-lg transition-shadow">
                    <div className="absolute top-0 right-0 p-6 text-secondary/10 group-hover:text-secondary/20 transition-colors">
                      <Quote size={80} strokeWidth={1} fill="currentColor" />
                    </div>
                    
                    <CardContent className="p-8 flex flex-col h-full relative z-10">
                      <div className="flex gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={16} className="fill-secondary text-secondary" />
                        ))}
                      </div>
                      
                      <p className="text-gray-600 text-lg italic mb-8 flex-grow leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      
                      <div className="flex items-center gap-4 mt-auto">
                        <Avatar className="h-14 w-14 border-2 border-white shadow-sm">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold text-primary text-lg">{testimonial.name}</p>
                          <p className="text-secondary text-sm font-medium">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0 mr-2 hover:bg-secondary hover:text-primary border-primary text-primary" />
            <CarouselNext className="static translate-y-0 hover:bg-secondary hover:text-primary border-primary text-primary" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}