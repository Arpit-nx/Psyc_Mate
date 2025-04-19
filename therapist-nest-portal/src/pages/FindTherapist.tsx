import { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const FindTherapist = () => {
  const [formData, setFormData] = useState({
    title: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/therapists/find", formData);
      console.log("Server response:", response.data);
      setResponseMessage(response.data.message || "Therapist search submitted successfully!");
    } catch (error) {
      console.error("Error submitting data:", error);
      setResponseMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="container max-w-xl py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Find a Therapist</h1>
      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Write down your feelings"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" className="w-full bg-therapy-600 text-white hover:bg-therapy-700">
              Submit
            </Button>
          </form>
          {responseMessage && (
            <p className="text-center mt-4 text-gray-700">{responseMessage}</p>
          )}
        </CardContent>
      </Card>
    </main>
  );
};

export default FindTherapist;
