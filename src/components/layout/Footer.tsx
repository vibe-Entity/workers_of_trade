import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold text-foreground">TradeConnect</span>
            </div>
            <p className="text-muted-foreground">
              Connecting skilled tradespeople with community members for trusted home services.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">For Customers</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/workers" className="hover:text-primary transition-colors">Find Workers</Link></li>
              <li><Link to="/post-job" className="hover:text-primary transition-colors">Post a Job</Link></li>
              <li><Link to="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link to="/trust-safety" className="hover:text-primary transition-colors">Trust & Safety</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">For Workers</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/register" className="hover:text-primary transition-colors">Join as Worker</Link></li>
              <li><Link to="/worker-dashboard" className="hover:text-primary transition-colors">Worker Dashboard</Link></li>
              <li><Link to="/how-it-works" className="hover:text-primary transition-colors">Getting Started</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 TradeConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;