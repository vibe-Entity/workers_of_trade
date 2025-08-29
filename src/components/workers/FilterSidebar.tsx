import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, DollarSign, Star, Calendar, X } from "lucide-react";

const FilterSidebar = () => {
  const [priceRange, setPriceRange] = useState([50, 150]);
  const [location, setLocation] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [minRating, setMinRating] = useState("");
  const [availability, setAvailability] = useState("");
  const [experience, setExperience] = useState("");

  const services = [
    "Plumbing", "Electrical", "Carpentry", "Painting", "Roofing", 
    "Landscaping", "HVAC", "Flooring", "General Labor", "Appliance Installation"
  ];

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const clearAllFilters = () => {
    setPriceRange([50, 150]);
    setLocation("");
    setSelectedServices([]);
    setMinRating("");
    setAvailability("");
    setExperience("");
  };

  return (
    <div className="space-y-6">
      {/* Active Filters */}
      {(selectedServices.length > 0 || location || minRating || availability || experience) && (
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm">Active Filters</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Clear all
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-2">
              {selectedServices.map(service => (
                <Badge
                  key={service}
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20"
                >
                  {service}
                  <X
                    className="w-3 h-3 ml-1 cursor-pointer"
                    onClick={() => handleServiceToggle(service)}
                  />
                </Badge>
              ))}
              {location && (
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  {location}
                  <X className="w-3 h-3 ml-1 cursor-pointer" onClick={() => setLocation("")} />
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Location Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            Location
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Enter city or zip code"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <div className="mt-3">
            <Label className="text-xs text-muted-foreground">Distance</Label>
            <Select defaultValue="10">
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">Within 5 miles</SelectItem>
                <SelectItem value="10">Within 10 miles</SelectItem>
                <SelectItem value="25">Within 25 miles</SelectItem>
                <SelectItem value="50">Within 50 miles</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Service Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Service Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {services.map(service => (
              <div key={service} className="flex items-center space-x-2">
                <Checkbox
                  id={service}
                  checked={selectedServices.includes(service)}
                  onCheckedChange={() => handleServiceToggle(service)}
                />
                <Label
                  htmlFor={service}
                  className="text-sm cursor-pointer flex-1"
                >
                  {service}
                </Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-primary" />
            Hourly Rate
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={200}
              min={20}
              step={5}
              className="w-full"
            />
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">${priceRange[0]}/hr</span>
              <span className="text-muted-foreground">${priceRange[1]}/hr</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Rating Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm flex items-center gap-2">
            <Star className="w-4 h-4 text-primary" />
            Minimum Rating
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={minRating} onValueChange={setMinRating}>
            <SelectTrigger>
              <SelectValue placeholder="Any rating" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="4.5">4.5+ stars</SelectItem>
              <SelectItem value="4">4+ stars</SelectItem>
              <SelectItem value="3.5">3.5+ stars</SelectItem>
              <SelectItem value="3">3+ stars</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Availability Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            Availability
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={availability} onValueChange={setAvailability}>
            <SelectTrigger>
              <SelectValue placeholder="Any time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Available today</SelectItem>
              <SelectItem value="tomorrow">Available tomorrow</SelectItem>
              <SelectItem value="week">Available this week</SelectItem>
              <SelectItem value="month">Available this month</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Experience Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Years of Experience</CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={experience} onValueChange={setExperience}>
            <SelectTrigger>
              <SelectValue placeholder="Any experience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1+ years</SelectItem>
              <SelectItem value="3">3+ years</SelectItem>
              <SelectItem value="5">5+ years</SelectItem>
              <SelectItem value="10">10+ years</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>
    </div>
  );
};

export default FilterSidebar;