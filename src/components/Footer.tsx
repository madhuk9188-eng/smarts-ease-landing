import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              SmartEase
            </div>
            <p className="text-muted-foreground text-sm">
              Your intelligent AI personal assistant for a smarter life
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-smooth">Features</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-primary transition-smooth">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Blog</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Cookie Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Warranty</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 SmartEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
