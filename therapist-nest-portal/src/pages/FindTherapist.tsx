
import { useState } from "react";
import { Check, ChevronDown, Filter, MapPin, Search, Sliders } from "lucide-react";
import TherapistMap from "@/components/TherapistMap";
import TherapistCard, { TherapistInfo } from "@/components/TherapistCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FindTherapist = () => {
  const [view, setView] = useState<"map" | "list">("list");

  // Mock therapists data
  const therapists: TherapistInfo[] = [
    {
      id: "1",
      name: "Dr. Emma Wilson",
      title: "Psychology Intern",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      specialties: ["Anxiety", "Depression", "Stress Management"],
      rating: 4.9,
      reviewCount: 47,
      location: "New York, NY",
      distance: "0.8 miles",
      supervisor: "Dr. Robert Greene",
      availability: "Mon, Wed, Fri",
      price: "$75-95"
    },
    {
      id: "2",
      name: "Dr. Michael Chen",
      title: "Psychology Intern",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      specialties: ["Trauma", "PTSD", "Grief"],
      rating: 4.8,
      reviewCount: 32,
      location: "Brooklyn, NY",
      distance: "1.2 miles",
      supervisor: "Dr. Sarah Johnson",
      availability: "Tue, Thu, Sat",
      price: "$65-85"
    },
    {
      id: "3",
      name: "Dr. Olivia Parker",
      title: "Psychology Intern",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      specialties: ["Youth", "Family Therapy", "Relationships"],
      rating: 4.7,
      reviewCount: 28,
      location: "Queens, NY",
      distance: "2.5 miles",
      supervisor: "Dr. James Miller",
      availability: "Mon, Thu, Sat",
      price: "$70-90"
    },
    {
      id: "4",
      name: "Dr. James Rodriguez",
      title: "Psychology Intern",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      specialties: ["Addiction", "Recovery", "Men's Issues"],
      rating: 4.9,
      reviewCount: 41,
      location: "Bronx, NY",
      distance: "3.1 miles",
      supervisor: "Dr. Emily White",
      availability: "Wed, Fri, Sun",
      price: "$60-80"
    },
    {
      id: "5",
      name: "Dr. Sarah Johnson",
      title: "Psychology Intern",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      specialties: ["Depression", "Anxiety", "LGBTQ+ Issues"],
      rating: 4.8,
      reviewCount: 35,
      location: "Manhattan, NY",
      distance: "1.5 miles",
      supervisor: "Dr. Michael Chen",
      availability: "Mon, Tue, Thu",
      price: "$80-100"
    },
    {
      id: "6",
      name: "Dr. David Thompson",
      title: "Psychology Intern",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      specialties: ["Relationships", "Couples Therapy", "Communication"],
      rating: 4.6,
      reviewCount: 24,
      location: "Staten Island, NY",
      distance: "5.2 miles",
      supervisor: "Dr. Lisa Brown",
      availability: "Tue, Thu, Sat",
      price: "$65-85"
    }
  ];

  // Specialties options for filters
  const specialties = [
    "Anxiety", "Depression", "PTSD", "Trauma", "Stress Management",
    "Relationships", "Family Therapy", "Youth", "LGBTQ+ Issues",
    "Grief", "Addiction", "Recovery", "Men's Issues", "Women's Issues",
    "Couples Therapy", "Communication"
  ];

  return (
    <div className="min-h-screen bg-therapy-50/30 pb-16">
      {/* Header */}
      <div className="bg-white border-b border-border/40">
        <div className="container max-w-screen-xl mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold mb-2">Find Your Therapist</h1>
          <p className="text-gray-600 text-lg">
            Connect with supervised psychology interns near you
          </p>
        </div>
      </div>
      
      {/* Search and Filters */}
      <div className="container max-w-screen-xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input 
              placeholder="Search by name, specialty, or location" 
              className="pl-10 bg-white"
            />
          </div>
          
          <div className="flex gap-3">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="flex gap-2">
                  <Filter className="h-4 w-4" />
                  <span className="hidden sm:inline">Filter</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <h3 className="font-medium">Filter Options</h3>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Price Range</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-xs text-gray-500 mb-1 block">Min</label>
                        <Input type="number" placeholder="$0" />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500 mb-1 block">Max</label>
                        <Input type="number" placeholder="$200" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Rating</h4>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any rating" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="4.5">4.5+ stars</SelectItem>
                        <SelectItem value="4.0">4.0+ stars</SelectItem>
                        <SelectItem value="3.5">3.5+ stars</SelectItem>
                        <SelectItem value="3.0">3.0+ stars</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Distance</h4>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any distance" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Within 1 mile</SelectItem>
                        <SelectItem value="5">Within 5 miles</SelectItem>
                        <SelectItem value="10">Within 10 miles</SelectItem>
                        <SelectItem value="25">Within 25 miles</SelectItem>
                        <SelectItem value="50">Within 50 miles</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Availability</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                        <div key={day} className="flex items-center space-x-2">
                          <Checkbox id={`day-${day}`} />
                          <label
                            htmlFor={`day-${day}`}
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {day}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <Button variant="outline" size="sm">Clear All</Button>
                    <Button size="sm">Apply Filters</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="flex gap-2">
                  <Sliders className="h-4 w-4" />
                  <span className="hidden sm:inline">Specialties</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Specialties</SheetTitle>
                </SheetHeader>
                <div className="py-4">
                  <div className="grid grid-cols-1 gap-3">
                    {specialties.map((specialty) => (
                      <div key={specialty} className="flex items-center space-x-2">
                        <Checkbox id={specialty} />
                        <label
                          htmlFor={specialty}
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {specialty}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <Button variant="outline">Clear</Button>
                  <Button>Apply</Button>
                </div>
              </SheetContent>
            </Sheet>
            
            <Select defaultValue="relevance">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="distance">Distance</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price_low">Price: Low to High</SelectItem>
                  <SelectItem value="price_high">Price: High to Low</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      {/* View Toggle */}
      <div className="container max-w-screen-xl mx-auto px-4 mb-6">
        <Tabs value={view} onValueChange={(v) => setView(v as "map" | "list")} className="w-full">
          <TabsList className="grid w-full max-w-xs grid-cols-2">
            <TabsTrigger value="list">List View</TabsTrigger>
            <TabsTrigger value="map">Map View</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      {/* Results */}
      <div className="container max-w-screen-xl mx-auto px-4">
        <TabsContent value="list" className="mt-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {therapists.map((therapist) => (
              <TherapistCard key={therapist.id} therapist={therapist} />
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button variant="outline" className="px-8">Load More</Button>
          </div>
        </TabsContent>
        
        <TabsContent value="map" className="mt-0">
          <div className="grid md:grid-cols-5 gap-6">
            <div className="md:col-span-3">
              <TherapistMap />
            </div>
            <div className="md:col-span-2 space-y-6 max-h-[70vh] overflow-y-auto pr-2">
              {therapists.slice(0, 3).map((therapist) => (
                <TherapistCard key={therapist.id} therapist={therapist} />
              ))}
            </div>
          </div>
        </TabsContent>
      </div>
    </div>
  );
};

export default FindTherapist;
