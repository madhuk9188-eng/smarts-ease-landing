import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Tech Entrepreneur",
    content: "SmartEase has completely transformed how I manage my daily tasks. The AI is incredibly intuitive and saves me hours every week!",
    rating: 5,
    initials: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Software Developer",
    content: "The integration with my smart home is seamless. I can control everything with just my voice. It's like living in the future!",
    rating: 5,
    initials: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    content: "I've tried many AI assistants, but SmartEase is on another level. The voice recognition is perfect and it actually understands context.",
    rating: 5,
    initials: "ER"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Loved by{" "}
            <span className="gradient-accent bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our users are saying about their SmartEase experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="shadow-soft hover:shadow-glow transition-smooth animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6 space-y-6">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="fill-accent text-accent" size={20} />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <Avatar className="bg-gradient-primary">
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
