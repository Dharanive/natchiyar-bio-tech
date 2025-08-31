'use client';

import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

interface ProductsGridProps {
  category: string;
}

const ProductsGrid = ({ category }: ProductsGridProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const productCategories = [
    {
      id: 1,
      title: 'INSECTICIDES',
      description: 'Insecticides are substances used to kill insects. They include ovicides and larvicides used against insect eggs and larvae, respectively. Insecticides are used in agriculture, medicine, industry and by consumers.',
      buttonText: 'VIEW MORE',
      products: ['ACEFY', 'AEROPLAN', 'SUPER SAVER', 'DHANESH', 'REGENT'],
      alignment: 'left'
    },
    {
      id: 2,
      title: 'FUNGICIDES',
      description: 'Fungicides are biocidal chemical compounds or biological organisms used to kill parasitic fungi or their spores. A fungistatic inhibits their growth. Fungi can cause serious damage in agriculture.',
      buttonText: 'READ MORE',
      products: ['COPPER', 'COPPERTOP', 'OPERON', 'REGENT', 'BLITOX'],
      alignment: 'right'
    },
    {
      id: 3,
      title: 'HERBICIDES & WEEDICIDES',
      description: 'Herbicides, also commonly known as weedkillers, are substances used to control unwanted plants. Selective herbicides control specific weed species, while leaving the desired crop relatively unharmed.',
      buttonText: 'EXPLORE',
      products: ['NOTEWEED 10', 'GLYKILL 20', 'WEEDOUT', 'HERBICURE', 'CLEANMAX'],
      alignment: 'left'
    },
    {
      id: 4,
      title: 'FERTILIZERS',
      description: 'A fertilizer is a natural or synthetic chemical substance or mixture that is applied to soil or to plant tissues to supply plant nutrients. It is a natural way to keep your plants healthy and provide the necessary nutrients for plant growth.',
      buttonText: 'READ MORE',
      products: ['BIO GITA', 'EAGLE', 'FALCON', 'TIDE', 'SUPER GROW'],
      alignment: 'right'
    },
    {
      id: 5,
      title: 'PLANT GROWTH REGULATORS',
      description: 'Plant growth regulators are chemicals used to modify plant growth such as increasing branching, suppressing shoot growth, increasing return bloom, removing excess fruit, or altering fruit maturity.',
      buttonText: 'VIEW MORE',
      products: ['BLOOM', 'ROOTEX', 'GROWMAX', 'PLANTEX', 'BOOSTER'],
      alignment: 'left'
    },
    {
      id: 6,
      title: 'OILS, SPREADERS & DISINFECTANTS',
      description: 'The Spray Oil is a high-refined crop oil that coats insect, mites and disease spores to suffocate and control them. Used as foliar sprays to control a wide variety of insects and mites on fruit trees, vegetables and ornamentals.',
      buttonText: 'READ MORE',
      products: ['NEEM OIL', 'WHITE OIL', 'SPREADER', 'CLEANEX', 'ROYAL'],
      alignment: 'right'
    }
  ];

  const getCategoryImage = (cat: string) => {
    const images: { [key: string]: string } = {
      'all': '/images/researcher.jpg',
      'insecticides': '/images/gardeners.jpg',
      'fungicides': '/images/chebottle.jpg',
      'herbicides': '/images/yeast.jpg',
      'fertilizers': '/images/fertilizers.jpg',
      'plant-growth-regulators': '/images/regulators.jpg',
      'oils-disinfectants': '/images/disinfants.jpg'
    };
    return images[cat] || '/images/researcher.jpg';
  };

  const getCategoryTitle = (cat: string) => {
    const titles: { [key: string]: string } = {
      'all': 'OUR PRODUCTS',
      'insecticides': 'INSECTICIDES',
      'fungicides': 'FUNGICIDES', 
      'herbicides': 'HERBICIDES & WEEDICIDES',
      'fertilizers': 'FERTILIZERS',
      'plant-growth-regulators': 'PLANT GROWTH REGULATORS',
      'oils-disinfectants': 'OILS, SPREADERS & DISINFECTANTS'
    };
    return titles[cat] || 'OUR PRODUCTS';
  };

  const getFilteredCategories = () => {
    if (category === 'all') return productCategories;
    
    const categoryMap: { [key: string]: number } = {
      'insecticides': 1,
      'fungicides': 2,
      'herbicides': 3,
      'fertilizers': 4,
      'plant-growth-regulators': 5,
      'oils-disinfectants': 6
    };
    
    const categoryId = categoryMap[category];
    return categoryId ? productCategories.filter(cat => cat.id === categoryId) : productCategories;
  };

  const filteredCategories = getFilteredCategories();

  // Loading state before hydration
  if (!mounted) {
    return (
      <div className="min-h-screen bg-white">
        <div className="relative text-white py-24 overflow-hidden bg-gradient-to-r from-green-800 via-yellow-600 to-green-700">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative container mx-auto px-6">
            <div className="text-left max-w-2xl">
              <h1 className="text-6xl font-black mb-6 leading-tight tracking-tight">
                {getCategoryTitle(category)}
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed font-light">
                Our extensive product range spans more than 200+ molecules.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Dynamic Background */}
      <div className="relative text-white py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${getCategoryImage(category)}')` }}
        />
        {/* Overlays */}
        <div className="absolute inset-0 "></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative container mx-auto px-6">
          <div className="text-left max-w-2xl">
            <h1 className="text-6xl font-black mb-6 leading-tight tracking-tight">
              {getCategoryTitle(category)}
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed font-light">
              Our extensive product range spans more than 200+ molecules.
            </p>
          </div>
        </div>
      </div>

      {/* Why We Are Better Section - Only show on "all" products page */}
      {category === 'all' && (
        <div className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  WHY WE ARE <span className="text-gray-500">BETTER</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  At Crop Chemicals, we don&apos;t just manufacture products; we craft solutions that 
                  revolutionize farming and set new standards of excellence. At our state-of-the-art 
                  facilities in Rajkot, Gujarat, India, we blend innovation with tradition to create products 
                  that not only meet but exceed your expectations. Our journey began with a simple mission: to 
                  foster sustainable and regenerative practices and contribute towards resilient communities 
                  through our diverse range of high-end plant care and lifestyle solutions. Throughout our journey, we&apos;re 
                  constantly refining and perfecting our existing products to unlock powerful solutions.
                </p>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    WHY YOU SHOULD CHOOSE US:
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>All international quality certifications ensuring utmost reliability.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Our advanced R&D wing has been given utmost concentration of expert chemists working with dedication for the benefit of farmers at large.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Our infrastructure keeps pace with the new age requirement and be an industry leader being the top exporter from Gujarat state.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>All of our products are made from best quality raw materials and adhere to national and international quality standards.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Character Illustration */}
              <div className="flex justify-center">
                <div className="bg-cyan-100 rounded-2xl p-8 border-4 border-cyan-300">
                  <div className="w-80 h-80 bg-gradient-to-b from-cyan-400 to-green-400 rounded-2xl flex items-center justify-center text-8xl">
                    👨‍🌾
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Products Sections */}
      <div className="py-16">
        {filteredCategories.map((productCategory) => (
          <div key={productCategory.id} className="mb-20">
            <div className="container mx-auto px-6">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                productCategory.alignment === 'right' ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Text Content */}
                <div className={productCategory.alignment === 'right' ? 'lg:col-start-2' : ''}>
                  <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">
                    {productCategory.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-lg mb-8">
                    {productCategory.description}
                  </p>
                  <Button className="bg-transparent border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
                    {productCategory.buttonText}
                  </Button>
                </div>

                {/* Product Images */}
                <div className={productCategory.alignment === 'right' ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    {/* Main Product Showcase */}
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 shadow-lg">
                      <div className="grid grid-cols-2 gap-4">
                        {productCategory.products.slice(0, 4).map((product, idx) => (
                          <div key={idx} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="aspect-square bg-gradient-to-br from-blue-50 to-green-50 rounded-lg flex items-center justify-center mb-3">
                              <div className="text-3xl">🧪</div>
                            </div>
                            <h3 className="font-bold text-sm text-gray-900 text-center">
                              {product}
                            </h3>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Floating accent */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-cyan-400 to-green-500 rounded-full opacity-20"></div>
                    <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-30"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Get In Touch Section */}
      <div className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">GET</h2>
          <h3 className="text-3xl font-bold text-cyan-400 mb-6">IN TOUCH</h3>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Always happy to help, be there in case of innovative ideas of your service.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-l-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 px-8 py-8 rounded-r-full font-semibold">
                SEND
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsGrid;