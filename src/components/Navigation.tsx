import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
            SmartEase
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-foreground/80 hover:text-primary transition-smooth font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("showcase")}
              className="text-foreground/80 hover:text-primary transition-smooth font-medium"
            >
              Showcase
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-foreground/80 hover:text-primary transition-smooth font-medium"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-foreground/80 hover:text-primary transition-smooth font-medium"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground/80 hover:text-primary transition-smooth font-medium"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("pricing")}
              className="gradient-primary text-primary-foreground shadow-glow hover:scale-105 transition-smooth"
            >
              Buy Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
            <button
              onClick={() => scrollToSection("features")}
              className="text-foreground/80 hover:text-primary transition-smooth font-medium text-left"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("showcase")}
              className="text-foreground/80 hover:text-primary transition-smooth font-medium text-left"
            >
              Showcase
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-foreground/80 hover:text-primary transition-smooth font-medium text-left"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-foreground/80 hover:text-primary transition-smooth font-medium text-left"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground/80 hover:text-primary transition-smooth font-medium text-left"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("pricing")}
              className="gradient-primary text-primary-foreground w-full"
            >
              Buy Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
