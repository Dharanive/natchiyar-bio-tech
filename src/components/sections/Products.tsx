'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import ProductGridGallery from '@/components/ui/ProductGridGallery';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
}

const Products: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: 'INSECTICIDES',
      category: 'SNIPER-5',
      image: '/images/che1.jpg',
      description: 'Advanced insect control solutions',
    },
    {
      id: 2,
      name: 'FUNGICIDES', 
      category: 'RKI',
      image: '/images/che2.jpg',
      description: 'Comprehensive fungal disease protection',
    },
    {
      id: 3,
      name: 'HERBICIDES & WEEDICIDES',
      category: '',
      image: '/images/che3.jpg',
      description: 'Effective weed management solutions',
    },
    {
      id: 4,
      name: 'FERTILIZERS',
      category: 'Live Gro',
      image: '/images/che4.jpg',
      description: 'Premium plant nutrition products',
    },
    {
      id: 5,
      name: 'OILS, SPREADERS & DISINFECTANTS',
      category: '',
      image: '/images/che5.jpg',
      description: 'Spray oils and disinfectant solutions',
    },
    {
      id: 6,
      name: 'PLANT GROWTH REGULATORS',
      category: '',
      image: '/images/Bio.jpg',
      description: 'Natural growth regulation products',
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">OUR</h2>
          <h3 className="text-3xl font-bold text-green-600 mb-6">PRODUCTS</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our mission is to provide the farmer with the excellent product quality that 
            optimizes the yield in every field in a reasonable amount.
          </p>
          <Link href="/products" className="text-green-600 ">
          <Button 
            variant="outline" 
            size="lg" 
            className="mt-6 border-green-600 text-green-600 hover:bg-green-50 hover:text-black rounded-full px-8"
          >
            ALL PRODUCTS
          </Button>
          </Link>
        </div>

        {/* Product Categories Grid */}
        <ProductGridGallery products={products} />

        
      </div>
    </section>
  );
};

export default Products;
