
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import CoverPage from "@/components/CoverPage";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow bg-gradient-to-b from-blue-700 via-blue-500 to-blue-400">
        <Header />
        <Hero />
      </div>
      <CoverPage />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
