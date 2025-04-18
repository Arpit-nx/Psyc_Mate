
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, Heart, Medal, Target } from "lucide-react";

const AboutUs = () => {
  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & Clinical Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Dr. Michael Chen",
      role: "Supervision Director",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Dr. Emma Wilson",
      role: "Head of Intern Development",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Dr. James Rodriguez",
      role: "Community Outreach Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-therapy-50/30 pb-16">
      {/* Header */}
      <div className="bg-white border-b border-border/40">
        <div className="container max-w-screen-xl mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold mb-2">About TherapistNest</h1>
          <p className="text-gray-600 text-lg">
            Our mission, vision, and the team behind the platform
          </p>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                TherapistNest was founded in 2023 by Dr. Sarah Johnson, a licensed psychologist with over 15 years 
                of experience in clinical practice and education. Throughout her career, Dr. Johnson witnessed two 
                significant challenges in the mental health field:
              </p>
              <p className="text-gray-600 mb-4">
                First, many people in need of mental health support couldn't afford traditional therapy services. 
                Second, psychology interns often struggled to find diverse clinical experiences during their training.
              </p>
              <p className="text-gray-600">
                TherapistNest was created to address both these challenges by connecting people with supervised 
                psychology interns who can provide quality care at more affordable rates. Our platform provides 
                interns with valuable experience while making mental health support accessible to more people.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-32 h-32 rounded-full bg-therapy-200 opacity-50" />
              <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-therapy-300 opacity-30" />
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                alt="Team discussion" 
                className="rounded-lg shadow-lg relative z-10 border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guided by our core values to make mental health support more accessible
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-white to-therapy-50 border-therapy-100">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-therapy-600 mr-4" />
                  <h3 className="text-2xl font-semibold">Our Mission</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  To bridge the gap between those seeking affordable mental health support and qualified 
                  psychology interns who need practical experience under professional supervision.
                </p>
                <p className="text-gray-600">
                  We aim to make quality mental health services more accessible while providing a 
                  supportive environment for the next generation of psychology professionals to develop their skills.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-white to-therapy-50 border-therapy-100">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-therapy-600 mr-4" />
                  <h3 className="text-2xl font-semibold">Our Vision</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  We envision a world where quality mental health support is accessible to everyone, 
                  regardless of financial circumstances.
                </p>
                <p className="text-gray-600">
                  By creating a platform that connects clients with supervised psychology interns, 
                  we're working toward a future where both mental health care seekers and providers 
                  can thrive in a mutually beneficial relationship.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at TherapistNest
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="size-16 rounded-full bg-therapy-100 flex items-center justify-center mb-4">
                <BadgeCheck className="h-8 w-8 text-therapy-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Care</h3>
              <p className="text-gray-600">
                We're committed to maintaining high standards of care through rigorous supervision 
                and ongoing professional development for all interns on our platform.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="size-16 rounded-full bg-therapy-100 flex items-center justify-center mb-4">
                <Medal className="h-8 w-8 text-therapy-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest ethical standards in all our operations, ensuring transparency, 
                confidentiality, and respect for all clients and interns.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="size-16 rounded-full bg-therapy-100 flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-therapy-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Compassion</h3>
              <p className="text-gray-600">
                We approach mental health care with empathy, understanding, and a genuine desire 
                to help people improve their wellbeing and quality of life.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experts behind TherapistNest
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-therapy-600 text-white">
        <div className="container max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Whether you're seeking mental health support or are a psychology intern looking for opportunities,
            we welcome you to the TherapistNest community.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/find-therapist">
              <Button size="lg" className="bg-white text-therapy-700 hover:bg-therapy-50">
                Find a Therapist
              </Button>
            </Link>
            <Link to="/for-therapists">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-therapy-700">
                Join as an Intern
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
