import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "For Homeowners",
      items: [
        "Access to verified local tradespeople",
        "Transparent pricing and reviews",
        "Insurance protection and guarantees",
        "Easy booking and communication",
        "Community-vetted professionals"
      ]
    },
    {
      title: "For Workers",
      items: [
        "Find consistent local work",
        "Set your own rates and schedule",
        "Build your reputation in the community",
        "Secure payment processing",
        "Marketing and customer acquisition support"
      ]
    },
    {
      title: "For Communities",
      items: [
        "Keep money in the local economy",
        "Create sustainable employment opportunities",
        "Build stronger neighborhood connections",
        "Support skill development and training",
        "Reduce dependency on outside contractors"
      ]
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Empowering Communities Through Local Trade
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;