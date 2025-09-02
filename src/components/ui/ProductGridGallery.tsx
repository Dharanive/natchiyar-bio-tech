'use client';

import React from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
}

interface ProductGridGalleryProps {
  products: Product[];
}

const ProductGridGallery: React.FC<ProductGridGalleryProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
      {products.map((product) => (
        <div 
          key={product.id} 
          className="relative group overflow-hidden aspect-[4/3] cursor-pointer"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          
          {/* Text overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-6">
              <h3 className="font-bold text-xl md:text-2xl lg:text-3xl uppercase tracking-wider leading-tight drop-shadow-lg">
                {product.name}
              </h3>
              {product.category && (
                <p className="text-lg md:text-xl mt-2 font-medium drop-shadow-md">
                  {product.category}
                </p>
              )}
            </div>
          </div>

          {/* Hover effect */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
        </div>
      ))}
    </div>
  );
};

export default ProductGridGallery;
