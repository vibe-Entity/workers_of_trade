import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const FeaturedWorkers = () => {
  const workers = [
    {
      id: 1,
      name: "Mike Johnson",
      specialty: "Plumbing",
      rating: 4.9,
      reviews: 127,
      hourlyRate: 85,
      location: "Downtown",
      avatar: "/placeholder.svg",
      verified: true,
      yearsExp: 8
    },
    {
      id: 2,
      name: "Sarah Chen",
      specialty: "Electrical",
      rating: 4.8,
      reviews: 94,
      hourlyRate: 95,
      location: "Westside",
      avatar: "/placeholder.svg",
      verified: true,
      yearsExp: 6
    },
    {
      id: 3,
      name: "Carlos Rodriguez",
      specialty: "Carpentry",
      rating: 4.9,
      reviews: 156,
      hourlyRate: 75,
      location: "Eastside",
      avatar: "/placeholder.svg",
      verified: true,
      yearsExp: 12
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Featured Local Professionals
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workers.map((worker) => (
            <Card key={worker.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={worker.avatar} alt={worker.name} />
                    <AvatarFallback>{worker.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-foreground">{worker.name}</h3>
                      {worker.verified && (
                        <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
                          Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-primary font-medium">{worker.specialty}</p>
                    <p className="text-sm text-muted-foreground">{worker.location} • {worker.yearsExp} years exp</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-500">★</span>
                    <span className="font-medium">{worker.rating}</span>
                    <span className="text-muted-foreground">({worker.reviews} reviews)</span>
                  </div>
                  <span className="font-semibold text-foreground">${worker.hourlyRate}/hr</span>
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <Link to={`/worker/${worker.id}`}>View Profile</Link>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <Link to={`/worker/${worker.id}/contact`}>Contact</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" asChild>
            <Link to="/workers">View All Workers</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkers;