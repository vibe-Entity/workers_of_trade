import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Connect with trusted local
          <span className="text-primary block">tradespeople in your community</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Find skilled professionals for home renovations, installations, construction work, 
          and general labor services. Verified workers, fair prices, community focused.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="text-lg px-8 py-6">
            <Link to="/workers">Find a Worker</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6">
            <Link to="/register">Join as Worker</Link>
          </Button>
        </div>

        <div className="mt-12 text-sm text-muted-foreground">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Verified Workers</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Insurance Coverage</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Community Focused</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;