import React, { useEffect, useState } from "react";
import { Brain, Heart, Users, MessageCircle, BookOpen, Phone, Mail, MapPin, Calendar } from "lucide-react";
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
    skills: string[];
  } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("/api/user", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("Response:", response); // Debugging line

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setUser(data.user);
      } catch (error) {
        setError(error.message || "An error occurred while fetching user data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Skills data, you can dynamically replace these if needed
  const skills = user?.skills.map((skill) => ({
    name: skill,
    description: `${skill} related description`, // Customize description based on skill
    icon: Brain, // You may want to assign a specific icon based on the skill
    proficiency: "Advanced", // This can be dynamic too, depending on your data structure
    color: "bg-purple-100 text-purple-600" // You can assign a color to skills dynamically as well
  })) || [];

  if (isLoading) {
    return <p className="text-lg text-gray-600 text-center">Loading user data...</p>;
  }

  if (error) {
    return <p className="text-lg text-red-600 text-center">{error}</p>;
  }

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
              {skills.map((skill, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
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
          <p className="text-lg text-gray-600 text-center">No user data available.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
