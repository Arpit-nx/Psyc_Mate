
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, MapPin, MessageSquare, ShieldCheck, Users } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-therapy-50/30 pb-16">
      {/* Header */}
      <div className="bg-white border-b border-border/40">
        <div className="container max-w-screen-xl mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold mb-2">How TherapistNest Works</h1>
          <p className="text-gray-600 text-lg">
            Your journey to better mental health with supervised psychology interns
          </p>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Connecting You With Quality Mental Health Support</h2>
              <p className="text-gray-600 mb-6">
                TherapistNest is a platform that connects individuals seeking mental health support with 
                qualified psychology interns working under the supervision of licensed professionals.
              </p>
              <p className="text-gray-600 mb-6">
                Our service provides affordable access to mental health care while giving psychology 
                interns valuable practical experience in a supervised environment.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-therapy-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Supervised Care</h3>
                    <p className="text-gray-600 text-sm">All interns are supervised by licensed psychologists</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-therapy-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Affordable Rates</h3>
                    <p className="text-gray-600 text-sm">More accessible pricing than traditional therapy</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-therapy-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Location-Based Matching</h3>
                    <p className="text-gray-600 text-sm">Find support in your area for in-person or virtual sessions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-32 h-32 rounded-full bg-therapy-200 opacity-50" />
              <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-therapy-300 opacity-30" />
              <img 
                src="https://images.unsplash.com/photo-1573497620393-4a9486571a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                alt="Therapy consultation" 
                className="rounded-lg shadow-lg relative z-10 border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Steps */}
      <section className="py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Your Journey With TherapistNest</h2>
          
          <div className="relative">
            {/* Desktop Step Line */}
            <div className="hidden md:block absolute left-1/2 top-0 w-0.5 h-full bg-therapy-200 -translate-x-1/2 z-0" />
            
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16 relative">
              <div className="md:text-right md:pr-12">
                <div className="hidden md:block absolute right-0 top-1/2 size-10 rounded-full bg-therapy-600 -translate-y-1/2 translate-x-1/2 z-10 flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="md:hidden size-10 rounded-full bg-therapy-600 flex items-center justify-center text-white font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Create an Account</h3>
                <p className="text-gray-600">
                  Sign up for a free account on TherapistNest to get started with your mental health journey. 
                  We'll ask a few questions to understand your needs better.
                </p>
              </div>
              <div className="md:pl-12">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <img 
                      src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                      alt="Creating an account" 
                      className="w-full h-60 object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16 relative">
              <div className="md:order-last md:pl-12">
                <div className="hidden md:block absolute left-0 top-1/2 size-10 rounded-full bg-therapy-600 -translate-y-1/2 -translate-x-1/2 z-10 flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="md:hidden size-10 rounded-full bg-therapy-600 flex items-center justify-center text-white font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Find a Therapist</h3>
                <p className="text-gray-600">
                  Search for psychology interns based on location, specialty, and availability. 
                  Our matching system helps you find the right fit for your needs.
                </p>
              </div>
              <div className="md:order-first md:pr-12">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <img 
                      src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                      alt="Finding a therapist" 
                      className="w-full h-60 object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16 relative">
              <div className="md:text-right md:pr-12">
                <div className="hidden md:block absolute right-0 top-1/2 size-10 rounded-full bg-therapy-600 -translate-y-1/2 translate-x-1/2 z-10 flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div className="md:hidden size-10 rounded-full bg-therapy-600 flex items-center justify-center text-white font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Book a Consultation</h3>
                <p className="text-gray-600">
                  Schedule a free initial consultation with your chosen psychology intern to discuss your goals 
                  and determine if it's a good match for your needs.
                </p>
              </div>
              <div className="md:pl-12">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <img 
                      src="https://images.unsplash.com/photo-1516383607781-913a19294fd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                      alt="Booking a consultation" 
                      className="w-full h-60 object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16 relative">
              <div className="md:order-last md:pl-12">
                <div className="hidden md:block absolute left-0 top-1/2 size-10 rounded-full bg-therapy-600 -translate-y-1/2 -translate-x-1/2 z-10 flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div className="md:hidden size-10 rounded-full bg-therapy-600 flex items-center justify-center text-white font-bold mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-2">Begin Your Sessions</h3>
                <p className="text-gray-600">
                  Start your therapy journey with regular sessions either in-person or virtually. 
                  All sessions are conducted by psychology interns under professional supervision.
                </p>
              </div>
              <div className="md:order-first md:pr-12">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <img 
                      src="https://images.unsplash.com/photo-1542888416-3b0a3bade6cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                      alt="Therapy session" 
                      className="w-full h-60 object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Step 5 */}
            <div className="grid md:grid-cols-2 gap-8 items-center relative">
              <div className="md:text-right md:pr-12">
                <div className="hidden md:block absolute right-0 top-1/2 size-10 rounded-full bg-therapy-600 -translate-y-1/2 translate-x-1/2 z-10 flex items-center justify-center text-white font-bold">
                  5
                </div>
                <div className="md:hidden size-10 rounded-full bg-therapy-600 flex items-center justify-center text-white font-bold mb-4">
                  5
                </div>
                <h3 className="text-xl font-semibold mb-2">Track Your Progress</h3>
                <p className="text-gray-600">
                  Monitor your mental health journey through our app, with progress tracking and 
                  regular feedback from your psychology intern and their supervisor.
                </p>
              </div>
              <div className="md:pl-12">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <img 
                      src="https://images.unsplash.com/photo-1517971129774-8a2b38fa128e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                      alt="Progress tracking" 
                      className="w-full h-60 object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">The TherapistNest Difference</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-therapy-50 border-therapy-100">
              <CardContent className="p-6">
                <div className="size-14 rounded-full bg-therapy-100 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-7 w-7 text-therapy-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Professional Supervision</h3>
                <p className="text-gray-600">
                  All psychology interns are supervised by licensed professionals, ensuring you receive 
                  quality care while contributing to their professional development.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-therapy-50 border-therapy-100">
              <CardContent className="p-6">
                <div className="size-14 rounded-full bg-therapy-100 flex items-center justify-center mb-4">
                  <MapPin className="h-7 w-7 text-therapy-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Location-Based Matching</h3>
                <p className="text-gray-600">
                  Our platform connects you with psychology interns in your area, making it convenient 
                  to access mental health support locally or virtually.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-therapy-50 border-therapy-100">
              <CardContent className="p-6">
                <div className="size-14 rounded-full bg-therapy-100 flex items-center justify-center mb-4">
                  <MessageSquare className="h-7 w-7 text-therapy-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure Communication</h3>
                <p className="text-gray-600">
                  Our platform offers secure messaging and video calls for convenient communication 
                  with your psychology intern between sessions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-therapy-50 border-therapy-100">
              <CardContent className="p-6">
                <div className="size-14 rounded-full bg-therapy-100 flex items-center justify-center mb-4">
                  <Clock className="h-7 w-7 text-therapy-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600">
                  Book sessions at times that suit your schedule, with options for evenings and 
                  weekends to accommodate busy lifestyles.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-therapy-50 border-therapy-100">
              <CardContent className="p-6">
                <div className="size-14 rounded-full bg-therapy-100 flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-therapy-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Diverse Specialists</h3>
                <p className="text-gray-600">
                  Access psychology interns with diverse backgrounds and specialties to find the 
                  perfect match for your specific mental health needs.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-therapy-50 border-therapy-100">
              <CardContent className="p-6">
                <div className="size-14 rounded-full bg-therapy-100 flex items-center justify-center mb-4">
                  <CheckCircle className="h-7 w-7 text-therapy-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Affordable Care</h3>
                <p className="text-gray-600">
                  Access quality mental health support at more affordable rates compared to 
                  traditional therapy, making care accessible to more people.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">How qualified are the psychology interns?</h3>
                <p className="text-gray-600">
                  All interns on our platform are graduate students in psychology programs who have completed 
                  their academic coursework and are in the clinical phase of their training. They work under 
                  the direct supervision of licensed psychologists who review their cases and provide guidance.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">How does the supervision process work?</h3>
                <p className="text-gray-600">
                  Each psychology intern is assigned a licensed supervisor who oversees their clinical work. 
                  Interns meet regularly with their supervisors to discuss cases, treatment plans, and 
                  progress. The supervisor ensures that all care provided meets professional standards.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">What types of issues can be addressed?</h3>
                <p className="text-gray-600">
                  Our psychology interns can help with a wide range of common mental health issues such as 
                  anxiety, depression, stress management, relationship problems, grief, and personal growth. 
                  For more severe clinical issues, we may recommend specialized care with fully licensed providers.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">How much do sessions cost?</h3>
                <p className="text-gray-600">
                  Sessions with psychology interns typically range from $40-100 per session, which is 
                  significantly less than sessions with fully licensed therapists. Some interns may also 
                  offer sliding scale fees based on financial need.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Is my information kept confidential?</h3>
                <p className="text-gray-600">
                  Absolutely. We adhere to strict confidentiality standards in accordance with HIPAA and 
                  professional ethical guidelines. Your information is only shared with the psychology intern 
                  and their supervisor. The only exceptions are mandatory reporting situations required by law.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-therapy-600 text-white">
        <div className="container max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Begin Your Mental Health Journey Today</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Take the first step towards better mental health by connecting with a supervised psychology intern.
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
    </div>
  );
};

export default HowItWorks;
