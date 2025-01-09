import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-green-800 py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
          Ready to Transform Agriculture in Sierra Leone?
        </h2>
        <p className="mt-4 text-gray-200 text-sm md:text-base">
          Partner with SLeSCA to ensure seed quality, promote sustainable farming, and achieve national food security.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="px-6 py-3 bg-white text-green-800 font-semibold rounded-md hover:bg-gray-200 transition">
            Contact Us Today
          </button>
          <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition">
            Start Your Seed Licensing Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
