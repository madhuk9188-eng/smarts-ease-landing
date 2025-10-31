import heroImage from "@/assets/smartease-hero.jpg";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Sleek, minimalist design",
  "360° voice recognition",
  "Premium build quality",
  "Ambient lighting effects"
];

const Showcase = () => {
  return (
    <section id="showcase" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Experience the{" "}
              <span className="gradient-accent bg-clip-text text-transparent">
                Future Today
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              SmartEase combines elegant design with powerful AI to create the ultimate personal assistant experience. Every detail is crafted to perfection.
            </p>
            
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent flex-shrink-0" size={24} />
                  <span className="text-lg">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">5.0</div>
                <div className="text-sm text-muted-foreground">User Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">500K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative animate-scale-in">
            <div className="absolute -inset-4 gradient-accent opacity-20 blur-3xl rounded-3xl" />
            <img
              src={heroImage}
              alt="SmartEase Showcase"
              className="relative rounded-3xl shadow-soft w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
