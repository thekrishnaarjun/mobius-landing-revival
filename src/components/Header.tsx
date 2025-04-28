
import React from "react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full py-4 px-4 md:px-10">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-white font-medium hover:text-blue-100 transition-colors">Home</a>
          <a href="#" className="text-white font-medium hover:text-blue-100 transition-colors">About Us</a>
          <a href="#" className="text-white font-medium hover:text-blue-100 transition-colors">Plans</a>
          <a href="#" className="text-white font-medium hover:text-blue-100 transition-colors">Testimonials</a>
          <a href="#" className="text-white font-medium hover:text-blue-100 transition-colors">Privacy Policy</a>
          <div className="relative group">
            <a href="#" className="text-white font-medium hover:text-blue-100 transition-colors flex items-center">
              More
            </a>
          </div>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:flex bg-white text-blue-600 hover:bg-blue-50 font-medium px-6 py-2 rounded-full">
            Get Started
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
