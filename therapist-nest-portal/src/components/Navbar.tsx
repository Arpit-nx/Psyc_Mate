
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { MapPin, User } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-xl items-center">
        <Link to="/" className="flex items-center gap-2 mr-4">
          <div className="size-8 rounded-full bg-therapy-600 flex items-center justify-center">
            <MapPin className="size-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-therapy-600 to-therapy-800 text-transparent bg-clip-text">
            TherapistNest
          </span>
        </Link>
        
        <nav className="flex items-center gap-6 text-sm font-medium flex-1 justify-center">
          <Link to="/" className="transition-colors hover:text-therapy-600">
            Home
          </Link>
          <Link to="/find-therapist" className="transition-colors hover:text-therapy-600">
            Find Therapist
          </Link>
          <Link to="/how-it-works" className="transition-colors hover:text-therapy-600">
            How It Works
          </Link>
          <Link to="/about" className="transition-colors hover:text-therapy-600">
            About Us
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <Link to="/login">
            <Button variant="ghost" className="text-therapy-700 hover:text-therapy-800 hover:bg-therapy-100">
              Log in
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-therapy-600 text-white hover:bg-therapy-700">
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
