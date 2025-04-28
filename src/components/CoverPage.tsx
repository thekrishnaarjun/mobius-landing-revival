
import React from "react";
import { LayoutTemplate } from "lucide-react";

const CoverPage = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="max-w-lg">
            <div className="mb-6">
              <h2 className="text-blue-500 font-bold text-3xl md:text-4xl mb-2">2024 / 2025</h2>
              <h1 className="text-blue-500 font-bold text-4xl md:text-5xl mb-4">HIRING TRENDS</h1>
              <p className="text-gray-700 text-lg">
                A job seekers guide to what to expect in 2024 in the new normal of growing tech layoffs
              </p>
            </div>
            <p className="text-gray-500 text-sm mb-6">
              Based on anonymized 2023/2024 client success rates
            </p>
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/5cab007d-8541-4601-bff9-9da222e97687.png" 
                alt="Mobius Logo" 
                className="w-8 h-8"
              />
              <span className="text-gray-700 font-medium">MOBIUSENGINE.AI</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="relative">
            <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/lovable-uploads/5cab007d-8541-4601-bff9-9da222e97687.png"
                alt="Office Building"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverPage;
