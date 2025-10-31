import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$99",
    description: "Perfect for getting started",
    features: [
      "Voice commands",
      "Basic task management",
      "Smart home control (5 devices)",
      "Email support",
      "1-year warranty"
    ],
    highlighted: false
  },
  {
    name: "Pro",
    price: "$199",
    description: "Most popular choice",
    features: [
      "Everything in Basic",
      "Advanced AI features",
      "Smart home control (unlimited)",
      "Priority support",
      "2-year warranty",
      "Free software updates"
    ],
    highlighted: true
  },
  {
    name: "Premium",
    price: "$299",
    description: "Ultimate experience",
    features: [
      "Everything in Pro",
      "Custom AI training",
      "Dedicated account manager",
      "24/7 phone support",
      "3-year warranty",
      "Premium accessories included"
    ],
    highlighted: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Choose Your{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the plan that best fits your lifestyle and needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative shadow-soft hover:shadow-glow transition-smooth animate-fade-in-up ${
                plan.highlighted ? "border-primary border-2 scale-105" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-primary px-6 py-2 rounded-full text-primary-foreground font-semibold text-sm shadow-glow">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-5xl font-bold gradient-primary bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground"> / one-time</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="text-accent flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "gradient-primary text-primary-foreground shadow-glow"
                      : "border-primary/30 hover:border-primary hover:bg-primary/5"
                  }`}
                  variant={plan.highlighted ? "default" : "outline"}
                  size="lg"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
