import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, MapPin, Star, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WorkerCard from "@/components/workers/WorkerCard";
import FilterSidebar from "@/components/workers/FilterSidebar";

const FindWorkers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("rating");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  // Mock data for workers
  const workers = [
    {
      id: 1,
      name: "Mike Johnson",
      specialty: "Plumbing",
      rating: 4.9,
      reviews: 127,
      hourlyRate: 85,
      location: "Downtown",
      distance: "2.3 miles",
      avatar: "/placeholder.svg",
      verified: true,
      yearsExp: 8,
      description: "Licensed plumber with expertise in residential and commercial projects.",
      availability: "Available today"
    },
    {
      id: 2,
      name: "Sarah Chen",
      specialty: "Electrical",
      rating: 4.8,
      reviews: 94,
      hourlyRate: 95,
      location: "Westside",
      distance: "3.1 miles",
      avatar: "/placeholder.svg",
      verified: true,
      yearsExp: 6,
      description: "Certified electrician specializing in home automation and solar installations.",
      availability: "Available tomorrow"
    },
    {
      id: 3,
      name: "Carlos Rodriguez",
      specialty: "Carpentry",
      rating: 4.9,
      reviews: 156,
      hourlyRate: 75,
      location: "Eastside",
      distance: "4.2 miles",
      avatar: "/placeholder.svg",
      verified: true,
      yearsExp: 12,
      description: "Master carpenter with focus on custom cabinets and home renovations.",
      availability: "Available this week"
    },
    {
      id: 4,
      name: "Jennifer Williams",
      specialty: "Painting",
      rating: 4.7,
      reviews: 89,
      hourlyRate: 65,
      location: "Northside",
      distance: "1.8 miles",
      avatar: "/placeholder.svg",
      verified: true,
      yearsExp: 5,
      description: "Professional painter with expertise in interior and exterior work.",
      availability: "Available today"
    },
    {
      id: 5,
      name: "David Park",
      specialty: "Roofing",
      rating: 4.8,
      reviews: 112,
      hourlyRate: 90,
      location: "Southside",
      distance: "5.1 miles",
      avatar: "/placeholder.svg",
      verified: true,
      yearsExp: 10,
      description: "Licensed roofing contractor specializing in residential repairs and installations.",
      availability: "Available next week"
    },
    {
      id: 6,
      name: "Maria Gonzalez",
      specialty: "Landscaping",
      rating: 4.6,
      reviews: 73,
      hourlyRate: 70,
      location: "Downtown",
      distance: "2.7 miles",
      avatar: "/placeholder.svg",
      verified: true,
      yearsExp: 7,
      description: "Landscape designer with focus on sustainable and low-maintenance gardens.",
      availability: "Available this week"
    }
  ];

  const resultsPerPage = 6;
  const totalPages = Math.ceil(workers.length / resultsPerPage);
  const startIndex = (currentPage - 1) * resultsPerPage;
  const displayedWorkers = workers.slice(startIndex, startIndex + resultsPerPage);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Find Trusted Local Workers
          </h1>
          <p className="text-muted-foreground mb-6">
            Connect with verified professionals in your area
          </p>
          
          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search by service, skill, or worker name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="distance">Nearest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="availability">Available Now</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Showing {startIndex + 1}-{Math.min(startIndex + resultsPerPage, workers.length)} of {workers.length} workers</span>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Within 10 miles of your location</span>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-80 shrink-0`}>
            <FilterSidebar />
          </div>

          {/* Workers Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {displayedWorkers.map((worker) => (
                <WorkerCard key={worker.id} worker={worker} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    onClick={() => setCurrentPage(page)}
                    size="sm"
                  >
                    {page}
                  </Button>
                ))}
                
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FindWorkers;