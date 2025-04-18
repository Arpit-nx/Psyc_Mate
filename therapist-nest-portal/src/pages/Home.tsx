
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TherapistCard from "@/components/TherapistCard";
import { MapPin, Users, Clock, Award, ArrowRight, Brain, Heart, HandHeart } from "lucide-react";

const Home = () => {
  const featuredTherapists = [
    {
      id: "1",
      name: "Dr. Emma Wilson",
      title: "Psychology Intern",
      specialties: ["Anxiety", "Depression", "Stress Management"],
      rating: 4.9,
      reviewCount: 47,
      location: "New York, NY",
      supervisor: "Dr. Robert Greene",
      availability: "Mon, Wed, Fri",
      price: "$75-95"
    },
    {
      id: "2",
      name: "Dr. Michael Chen",
      title: "Psychology Intern",
      specialties: ["Trauma", "PTSD", "Grief"],
      rating: 4.8,
      reviewCount: 32,
      location: "Brooklyn, NY",
      supervisor: "Dr. Sarah Johnson",
      availability: "Tue, Thu, Sat",
      price: "$65-85"
    },
    {
      id: "3",
      name: "Dr. Olivia Parker",
      title: "Psychology Intern",
      specialties: ["Youth", "Family Therapy", "Relationships"],
      rating: 4.7,
      reviewCount: 28,
      location: "Queens, NY",
      supervisor: "Dr. James Miller",
      availability: "Mon, Thu, Sat",
      price: "$70-90"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-therapy-50 to-therapy-100 -z-10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM3ZTRjZGUiIGZpbGwtb3BhY2l0eT0iMC4wOCI+PHBhdGggZD0iTTM2IDM0djZoLTZ2LTZoNm0wLTN2Mkg0djJ6TTAgMGgzdjNoM3YzSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50 -z-10" />
        
        <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                Find the Right <span className="text-therapy-600">Mental Health Support</span> with Supervised Interns
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Connect with qualified psychology interns working under licensed professionals for affordable, quality mental health support.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/find-therapist">
                  <Button size="lg" className="bg-therapy-600 hover:bg-therapy-700 text-white">
                    Find a Therapist <MapPin className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button size="lg" variant="outline" className="border-therapy-300 hover:bg-therapy-50 text-therapy-700">
                    How It Works
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative h-full">
              <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-therapy-200 opacity-50" />
              <div className="absolute -left-8 -bottom-8 w-48 h-48 rounded-full bg-therapy-300 opacity-30" />
              <img 
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                alt="Therapy session" 
                className="rounded-lg shadow-xl relative z-10 border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose TherapistNest</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform offers unique benefits for those seeking mental health support
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-white to-therapy-50 border-therapy-100">
              <CardContent className="pt-8 pb-6">
                <div className="size-14 rounded-full bg-therapy-100 flex items-center justify-center mb-4 mx-auto">
                  <Brain className="h-7 w-7 text-therapy-600" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Quality Care</h3>
                <p className="text-gray-600 text-center">
                  All interns are qualified and supervised by licensed professionals ensuring quality care.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-white to-therapy-50 border-therapy-100">
              <CardContent className="pt-8 pb-6">
                <div className="size-14 rounded-full bg-therapy-100 flex items-center justify-center mb-4 mx-auto">
                  <Heart className="h-7 w-7 text-therapy-600" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Affordable Options</h3>
                <p className="text-gray-600 text-center">
                  Get professional mental health support at more affordable rates than traditional therapy.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-white to-therapy-50 border-therapy-100">
              <CardContent className="pt-8 pb-6">
                <div className="size-14 rounded-full bg-therapy-100 flex items-center justify-center mb-4 mx-auto">
                  <HandHeart className="h-7 w-7 text-therapy-600" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Personalized Support</h3>
                <p className="text-gray-600 text-center">
                  Find the perfect match with our therapist-matching algorithm based on your needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-therapy-50/50">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting started with TherapistNest is easy
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="size-16 rounded-full bg-therapy-100 flex items-center justify-center mb-4 relative">
                <MapPin className="h-8 w-8 text-therapy-600" />
                <span className="absolute -top-2 -right-2 size-8 rounded-full bg-therapy-600 text-white text-lg font-bold flex items-center justify-center">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Find a Therapist</h3>
              <p className="text-gray-600">
                Search for qualified psychology interns in your area based on your preferences and needs.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="size-16 rounded-full bg-therapy-100 flex items-center justify-center mb-4 relative">
                <Users className="h-8 w-8 text-therapy-600" />
                <span className="absolute -top-2 -right-2 size-8 rounded-full bg-therapy-600 text-white text-lg font-bold flex items-center justify-center">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Book Consultation</h3>
              <p className="text-gray-600">
                Schedule a free initial consultation to discuss your goals and determine if it's a good fit.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="size-16 rounded-full bg-therapy-100 flex items-center justify-center mb-4 relative">
                <Clock className="h-8 w-8 text-therapy-600" />
                <span className="absolute -top-2 -right-2 size-8 rounded-full bg-therapy-600 text-white text-lg font-bold flex items-center justify-center">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Begin Sessions</h3>
              <p className="text-gray-600">
                Start your sessions in-person or virtually and receive professional mental health support.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/how-it-works">
              <Button variant="link" className="text-therapy-600 hover:text-therapy-800">
                Learn more about our process <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Therapists */}
      <section className="py-16 bg-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Therapists</h2>
            <Link to="/find-therapist">
              <Button variant="link" className="text-therapy-600 hover:text-therapy-800">
                View all therapists <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {featuredTherapists.map(therapist => (
              <TherapistCard key={therapist.id} therapist={therapist} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-therapy-600 text-white">
        <div className="container max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Mental Health Journey?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Take the first step towards better mental health with supervised psychology interns who can provide the support you need.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/find-therapist">
              <Button size="lg" className="bg-white text-therapy-700 hover:bg-therapy-50">
                Find a Therapist Near You
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-therapy-700">
                Create an Account
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-therapy-900 text-therapy-50 py-12">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="size-8 rounded-full bg-white flex items-center justify-center">
                  <MapPin className="size-5 text-therapy-600" />
                </div>
                <span className="text-xl font-bold text-white">TherapistNest</span>
              </div>
              <p className="text-therapy-300 text-sm">
                Connecting people with supervised psychology interns for affordable mental health support.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-therapy-300">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">For Therapists</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-therapy-300">
                <li><a href="#" className="hover:text-white transition-colors">Mental Health Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-therapy-300">
                <li>support@therapistnest.com</li>
                <li>(555) 123-4567</li>
                <li>123 Main St, New York, NY 10001</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-therapy-700 text-center text-therapy-400 text-sm">
            <p>© 2025 TherapistNest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
