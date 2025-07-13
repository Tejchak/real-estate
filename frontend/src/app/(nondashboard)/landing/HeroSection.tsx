"use client";
import { setFilters } from '@/state';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const HeroSection = () => {


const dispatch = useDispatch();
const [searchQuery, setSearchQuery] = useState("");
const router = useRouter();

const handleLocationSearch = async () => {
  try {
    const trimmedQuery = searchQuery.trim();
    if (!trimmedQuery) return;

    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        trimmedQuery
      )}.json?access_token=${
        process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
      }&fuzzyMatch=true`
    );
    const data = await response.json();
    if (data.features && data.features.length > 0) {
      const [lng, lat] = data.features[0].center;
      dispatch(
        setFilters({
          location: trimmedQuery,
          coordinates: [lat, lng],
        })
      );
      const params = new URLSearchParams({
        location: trimmedQuery,
        lat: lat.toString(),
        lng: lng,
      });
      router.push(`/search?${params.toString()}`);
    }
  } catch (error) {
    console.error("error search location:", error);
  }
};
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
        <div className="flex justify-center">
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by city, neighborhood or address"
              className="w-full max-w-lg rounded-none rounded-l-xl border-none bg-white h-12"
            />
            <Button
              onClick={handleLocationSearch}
              className="bg-secondary-500 text-white rounded-none rounded-r-xl border-none hover:bg-secondary-600 h-12"
            >
              Search
            </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
