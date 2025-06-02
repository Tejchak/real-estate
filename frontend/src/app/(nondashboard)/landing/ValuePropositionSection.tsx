import React from 'react';
import { HomeIcon, CalendarDaysIcon, CheckCircleIcon, HeartIcon } from '@heroicons/react/24/outline';

const values = [
  {
    icon: <HomeIcon className="h-8 w-8 text-blue-600 mb-3 mx-auto" />,
    title: 'Search for Properties',
    description: 'Browse through an extensive collection of rental properties in your desired location.'
  },
  {
    icon: <CalendarDaysIcon className="h-8 w-8 text-blue-600 mb-3 mx-auto" />,
    title: 'Book Your Rental',
    description: 'Once you find the perfect rental property, easily book it online with just a few clicks.'
  },
  {
    icon: <CheckCircleIcon className="h-8 w-8 text-blue-600 mb-3 mx-auto" />,
    title: 'Move In',
    description: 'Move into your new rental property and start enjoying your dream home.'
  },
  {
    icon: <HeartIcon className="h-8 w-8 text-blue-600 mb-3 mx-auto" />,
    title: 'Enjoy Your New Home',
    description: 'Experience comfort and convenience in your new rental property.'
  }
];

const ValuePropositionSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Find Your Dream Rental Property Today!</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Featuring the best rental properties, our user-friendly search features make it easy to find the perfect home that meets all your needs. Start your search today and discover your dream rental property!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {values.map((value, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
              {value.icon}
              <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection; 