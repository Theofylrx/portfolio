import React from 'react';
import Image from 'next/image';

const Gallery: React.FC = () => {
  const images = [
    'images/g-1.jpg',
    'images/g-2.jpg',
    'images/g-3.jpg',
    'images/g-4.jpg',
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <Image key={index} src={image} alt={`a gallery image ${index + 1}`} className="w-full h-48 object-cover rounded" />
        ))}
      </div>
    </section>
  );
};

export default Gallery;