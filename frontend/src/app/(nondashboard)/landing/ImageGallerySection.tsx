import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=600&q=80',
];

const ImageGallerySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Image Gallery</h2>
        <p className="text-center text-gray-600 mb-8">Browse our handpicked selection of rental properties and find the perfect home for you.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow hover:shadow-lg transition">
              <img src={src} alt={`Property ${idx + 1}`} className="w-full h-40 md:h-48 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallerySection; 