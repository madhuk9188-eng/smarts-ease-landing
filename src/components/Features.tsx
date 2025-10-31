import { Brain, Calendar, Home, MessageSquare, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Advanced machine learning adapts to your preferences and anticipates your needs"
  },
  {
    icon: MessageSquare,
    title: "Voice Commands",
    description: "Natural language processing understands your requests perfectly every time"
  },
  {
    icon: Calendar,
    title: "Task Management",
    description: "Organize schedules, set reminders, and never miss important moments"
  },
  {
    icon: Home,
    title: "Smart Home Control",
    description: "Seamlessly integrate with your smart devices for complete home automation"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Instant response times with cloud-powered processing capabilities"
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "End-to-end encryption ensures your data stays secure and private"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Powerful Features for{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Smarter Living
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how SmartEase transforms your daily routine with cutting-edge AI technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-2xl shadow-soft hover:shadow-glow transition-smooth animate-fade-in-up hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                <feature.icon className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
