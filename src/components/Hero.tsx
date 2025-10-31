import { Button } from "@/components/ui/button";
import heroImage from "@/assets/smartease-hero.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToPricing = () => {
    const element = document.getElementById("pricing");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden pt-20">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-medium">
              <Sparkles size={18} />
              <span>AI-Powered Assistant</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Meet{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                SmartEase
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              Your intelligent companion that transforms how you manage daily tasks with the power of AI
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToPricing}
                size="lg"
                className="gradient-primary text-primary-foreground shadow-glow hover:scale-105 transition-smooth text-lg px-8 py-6"
              >
                Buy Now
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                onClick={() => {
                  const element = document.getElementById("features");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary/30 hover:border-primary hover:bg-primary/5 transition-smooth"
              >
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center gap-8 justify-center lg:justify-start text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-muted-foreground">AI-Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-muted-foreground">Voice Control</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-muted-foreground">Smart Home</span>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <img
              src={heroImage}
              alt="SmartEase Device"
              className="relative rounded-3xl shadow-soft w-full animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
