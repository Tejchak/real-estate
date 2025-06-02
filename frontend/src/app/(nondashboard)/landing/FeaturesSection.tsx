import React from 'react';
import { ShieldCheckIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const features = [
  {
    icon: <ShieldCheckIcon className="h-10 w-10 text-blue-600 mx-auto mb-4" />,
    title: 'Trustworthy and Verified Listings',
    description: 'Discover the best rental options with user reviews and ratings.'
  },
  {
    icon: <MagnifyingGlassIcon className="h-10 w-10 text-blue-600 mx-auto mb-4" />,
    title: 'Browse Rental Listings with Ease',
    description: 'Get access to user reviews and ratings for a better understanding of rental options.'
  },
  {
    icon: <AdjustmentsHorizontalIcon className="h-10 w-10 text-blue-600 mx-auto mb-4" />,
    title: 'Simplify Your Rental Search',
    description: 'Find trustworthy and verified rental listings to ensure a hassle-free experience.'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Quickly find the home you want using our simple and effective search filters!</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg shadow p-8 flex flex-col items-center text-center hover:shadow-lg transition">
              {feature.icon}
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <button className="mt-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">{feature.title.split(' ')[0]}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
