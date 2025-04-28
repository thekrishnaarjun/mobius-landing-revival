
import React from "react";

const steps = [
  {
    number: 1,
    title: "Submit Intake Form",
    description: ""
  },
  {
    number: 2,
    title: "We do the search and curation for list of jobs",
    description: ""
  },
  {
    number: 3,
    title: "You approve, we do the tedious part (applying)",
    description: ""
  },
  {
    number: 4,
    title: "You get the interviews",
    description: ""
  }
];

const Features = () => {
  return (
    <section className="py-20 px-4 md:px-10 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-16">How we work?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full border-2 border-blue-600 flex items-center justify-center mb-6">
                <span className="text-blue-600 font-bold text-xl">{step.number}</span>
              </div>
              <div className="w-full h-0.5 bg-gray-200 mb-6"></div>
              <h3 className="text-blue-600 font-medium mb-2">{step.title}</h3>
              {step.description && (
                <p className="text-gray-600">{step.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
