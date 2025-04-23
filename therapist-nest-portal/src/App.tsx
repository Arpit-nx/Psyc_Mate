import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FindTherapist from "./pages/FindTherapist";
import HowItWorks from "./pages/HowItWorks";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import UserDetails from "./pages/UserDetails";

const queryClient = new QueryClient();

const shouldShowNavbar = (pathname: string) => {
  const noNavbarPaths = ["/login", "/signup", "/forgot-password"];
  return !noNavbarPaths.includes(pathname);
};

// 🔐 Custom protected route for specific user roles
const ProtectedRoute = ({ allowedRole, children }: { allowedRole: string; children: JSX.Element }) => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  if (!user?.user_type) {
    return <Navigate to="/login" />;
  }

  if (user.user_type !== allowedRole) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

// 🔁 App content with route setup
const AppContent = () => {
  const location = useLocation();

  return (
    <>
      {shouldShowNavbar(location.pathname) && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-therapist" element={<FindTherapist />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Intern-only route */}
          <Route
            path="/user-details"
            element={
              <ProtectedRoute allowedRole="intern">
                <UserDetails />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
