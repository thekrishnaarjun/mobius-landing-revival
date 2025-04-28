
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col space-y-6 mt-10">
          <a href="#" className="text-lg font-medium hover:text-blue-600 transition-colors">Home</a>
          <a href="#" className="text-lg font-medium hover:text-blue-600 transition-colors">About Us</a>
          <a href="#" className="text-lg font-medium hover:text-blue-600 transition-colors">Plans</a>
          <a href="#" className="text-lg font-medium hover:text-blue-600 transition-colors">Testimonials</a>
          <a href="#" className="text-lg font-medium hover:text-blue-600 transition-colors">Privacy Policy</a>
          <a href="#" className="text-lg font-medium hover:text-blue-600 transition-colors">More</a>
          <Button className="w-full mt-4 bg-blue-600 text-white hover:bg-blue-700">Get Started</Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
