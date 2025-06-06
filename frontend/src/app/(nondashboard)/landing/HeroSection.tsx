import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
          Discover Your Next Home With Confidence
        </h1>
        <p className="text-lg md:text-2xl text-white mb-8 max-w-2xl drop-shadow">
          Browse curated rental listings designed to match your lifestyle, budget, and dreams. Find your perfect place today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded shadow hover:bg-gray-200 transition">Learn More</button>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700 transition">Search Place</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
