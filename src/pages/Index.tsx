import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import ServiceCategoriesGrid from "@/components/home/ServiceCategoriesGrid";
import FeaturedWorkers from "@/components/home/FeaturedWorkers";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <ServiceCategoriesGrid />
        <FeaturedWorkers />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
