import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const FindTherapist = () => {
  const [formData, setFormData] = useState({
    title: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User input:", formData);
    // TODO: call backend or display results
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
        </CardContent>
      </Card>
    </main>
  );
};

export default FindTherapist;
