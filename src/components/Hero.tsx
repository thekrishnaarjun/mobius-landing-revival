
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 px-4 md:px-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Land job interviews 
            <br />
            <span className="text-blue-200">10x faster</span>
          </h1>
          <p className="text-white/90 text-lg mb-8 max-w-md">
            Custom-built resumes that match your goals, keywords, and recruiter expectations.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-blue-50 rounded-full font-medium px-6 py-6 flex items-center h-12">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 animate-fade-in">
          <div className="relative">
            <div className="bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <h3 className="text-blue-600 font-bold">2024 / 2025</h3>
              <h2 className="text-blue-600 font-bold text-xl">HIRING TRENDS</h2>
              <div className="mt-2 h-24 bg-gray-100 rounded"></div>
              <div className="flex justify-center mt-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[-20px] right-[-20px] bg-blue-100 rounded-full p-2">
              <p className="text-blue-600 text-xs font-medium">Download Free E-Book</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
