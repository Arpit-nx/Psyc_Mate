import React, { useEffect, useState } from "react";
import { Brain, Heart, Users, MessageCircle, BookOpen, Phone, Mail, MapPin, GraduationCap, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Dashboard = () => {
  const [user, setUser] = useState<{
    name: string;
    email: string;
    phone: string;
    location: string;
    education: string;
    startDate: string;
    avatar: string;
  } | null>(null);

  useEffect(() => {
    const mockUser = {
      name: "Dr. Sarah Johnson",
      email: "sarah.johnson@psychology.com",
      phone: "+1 (555) 123-4567",
      location: "New York City, NY",
      education: "Ph.D. in Clinical Psychology",
      startDate: "January 2024",
      avatar: "/placeholder.svg"
    };
    setUser(mockUser);
  }, []);

  const skills = [
    {
      name: "Cognitive Therapy",
      description: "Expert in cognitive behavioral therapy techniques",
      icon: Brain,
      proficiency: "Advanced",
      color: "bg-purple-100 text-purple-600"
    },
    {
      name: "Emotional Support",
      description: "Specialized in emotional counseling and support",
      icon: Heart,
      proficiency: "Expert",
      color: "bg-pink-100 text-pink-600"
    },
    {
      name: "Group Therapy",
      description: "Experienced in facilitating group therapy sessions",
      icon: Users,
      proficiency: "Intermediate",
      color: "bg-blue-100 text-blue-600"
    },
    {
      name: "Crisis Intervention",
      description: "Trained in emergency psychological interventions",
      icon: MessageCircle,
      proficiency: "Advanced",
      color: "bg-green-100 text-green-600"
    },
    {
      name: "Research & Assessment",
      description: "Skilled in psychological assessment and research",
      icon: BookOpen,
      proficiency: "Expert",
      color: "bg-amber-100 text-amber-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        {user ? (
          <>
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-4 text-center md:text-left">
                  <div>
                    <h1 className="text-4xl font-bold text-gray-800">Dr. {user.name}</h1>
                    <p className="text-lg text-gray-600">{user.education}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="w-5 h-5" />
                      <span>{user.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-5 h-5" />
                      <span>{user.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-5 h-5" />
                      <span>{user.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-5 h-5" />
                      <span>Started {user.startDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <Card key={skill.name} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${skill.color}`}>
                      <skill.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-800">
                        {skill.name}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {skill.description}
                      </p>
                      <div className="mt-3">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm ${skill.color}`}>
                          {skill.proficiency}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </>
        ) : (
          <p className="text-lg text-gray-600 text-center">Loading user data...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
