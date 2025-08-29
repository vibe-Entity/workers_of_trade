import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ServiceCategoriesGrid = () => {
  const categories = [
    { name: "Plumbing", icon: "🔧", description: "Repairs, installations, maintenance" },
    { name: "Electrical", icon: "⚡", description: "Wiring, fixtures, troubleshooting" },
    { name: "Carpentry", icon: "🔨", description: "Custom work, repairs, furniture" },
    { name: "Roofing", icon: "🏠", description: "Installation, repairs, inspection" },
    { name: "Painting", icon: "🎨", description: "Interior, exterior, touch-ups" },
    { name: "Landscaping", icon: "🌱", description: "Design, maintenance, cleanup" },
    { name: "General Labor", icon: "💪", description: "Moving, cleanup, odd jobs" },
    { name: "Appliance Installation", icon: "📺", description: "Setup, repair, maintenance" }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Services Available in Your Community
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link key={index} to={`/workers?category=${category.name.toLowerCase()}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/workers" className="text-primary hover:underline font-medium">
            View all services →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategoriesGrid;