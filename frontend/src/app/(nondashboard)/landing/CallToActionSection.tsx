"use client";
import React from 'react';
import { useGetAuthUserQuery } from '@/state/api';
import { useRouter } from 'next/navigation';

const CallToActionSection = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const router = useRouter();
  return (
    <section className="py-16 bg-blue-600 text-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Your Dream Rental Property</h2>
        <p className="mb-8 text-lg md:text-xl">
          Discover a wide range of rental properties in your desired location. Start your journey with us today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded shadow hover:bg-gray-100 transition">Learn More</button>
          {!authUser && (
            <button
              className="px-8 py-3 bg-gray-900 text-white font-semibold rounded shadow hover:bg-gray-800 transition"
              onClick={() => router.push('/signup')}
            >
              Sign Up
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
