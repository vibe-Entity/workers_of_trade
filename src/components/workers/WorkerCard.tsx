import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Star, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";

interface Worker {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  hourlyRate: number;
  location: string;
  distance: string;
  avatar: string;
  verified: boolean;
  yearsExp: number;
  description: string;
  availability: string;
}

interface WorkerCardProps {
  worker: Worker;
}

const WorkerCard = ({ worker }: WorkerCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4 mb-4">
          <Avatar className="w-16 h-16 border-2 border-border">
            <AvatarImage src={worker.avatar} alt={worker.name} />
            <AvatarFallback className="bg-secondary text-secondary-foreground">
              {worker.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-foreground truncate">{worker.name}</h3>
              {worker.verified && (
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  <Shield className="w-3 h-3 mr-1" />
                  Verified
                </Badge>
              )}
            </div>
            
            <p className="text-primary font-medium text-sm mb-1">{worker.specialty}</p>
            
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>{worker.location} • {worker.distance}</span>
              </div>
              <span>•</span>
              <span>{worker.yearsExp} years exp</span>
            </div>
            
            <div className="flex items-center gap-4 mb-3">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium text-sm">{worker.rating}</span>
                <span className="text-xs text-muted-foreground">({worker.reviews})</span>
              </div>
              <div className="flex items-center gap-1 text-green-600">
                <Clock className="w-3 h-3" />
                <span className="text-xs font-medium">{worker.availability}</span>
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-lg font-bold text-foreground">${worker.hourlyRate}</div>
            <div className="text-xs text-muted-foreground">per hour</div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {worker.description}
        </p>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <Link to={`/worker/${worker.id}`}>View Profile</Link>
          </Button>
          <Button size="sm" className="flex-1" asChild>
            <Link to={`/worker/${worker.id}/contact`}>Contact Now</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkerCard;