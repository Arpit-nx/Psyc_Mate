
import { User, MapPin, Calendar, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

export interface TherapistInfo {
  id: string;
  name: string;
  title: string;
  image?: string;
  specialties: string[];
  rating: number;
  reviewCount: number;
  location: string;
  distance?: string;
  supervisor: string;
  availability: string;
  price: string;
}

interface TherapistCardProps {
  therapist: TherapistInfo;
}

const TherapistCard = ({ therapist }: TherapistCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <CardHeader className="p-0">
        <div className="aspect-[3/2] w-full bg-therapy-100 flex items-center justify-center overflow-hidden">
          {therapist.image ? (
            <img 
              src={therapist.image} 
              alt={therapist.name} 
              className="w-full h-full object-cover"
            />
          ) : (
            <User className="h-20 w-20 text-therapy-300" />
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-semibold text-lg">{therapist.name}</h3>
            <p className="text-muted-foreground text-sm">{therapist.title}</p>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-therapy-500 text-therapy-500 mr-1" />
            <span className="text-sm font-medium">{therapist.rating}</span>
            <span className="text-xs text-muted-foreground ml-1">({therapist.reviewCount})</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 my-2">
          {therapist.specialties.map((specialty, index) => (
            <Badge key={index} variant="secondary" className="bg-therapy-50 text-therapy-700 hover:bg-therapy-100">
              {specialty}
            </Badge>
          ))}
        </div>
        
        <div className="space-y-2 mt-3 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-therapy-500" />
            <span>{therapist.location}</span>
            {therapist.distance && (
              <span className="bg-therapy-50 px-1.5 py-0.5 rounded text-xs text-therapy-700">
                {therapist.distance} away
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <User className="h-4 w-4 text-therapy-500" />
            <span>Supervisor: {therapist.supervisor}</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4 text-therapy-500" />
            <span>{therapist.availability}</span>
          </div>
          
          <div className="font-medium mt-2">
            {therapist.price} per session
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button className="w-full bg-therapy-600 hover:bg-therapy-700">
          Book Consultation
        </Button>
        <Button variant="outline" className="border-therapy-200 text-therapy-700 hover:bg-therapy-50">
          View Profile
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TherapistCard;
