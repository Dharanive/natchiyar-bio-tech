'use client';

import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ProductsGridProps {
  category: string;
}

interface Product {
  name: string;
  image: string;
  description?: string;
  features?: string[];
}

interface ProductCategory {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  products: Product[];
  alignment: 'left' | 'right';
  slug: string;
}

const ProductsGrid = ({ category }: ProductsGridProps) => {
  const [mounted, setMounted] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const productCategories: ProductCategory[] = [
    {
      id: 1,
      title: 'INSECTICIDES',
      slug: 'insecticides',
      description: 'Insecticides are substances used to kill insects. They include ovicides and larvicides used against insect eggs and larvae, respectively. Insecticides are used in agriculture, medicine, industry and by consumers.',
      buttonText: 'VIEW MORE',
      products: [
        {
          name: 'ACEFY',
          image: '/images/Bio.jpg',
          description: 'Effective against a wide range of insects',
          features: ['Quick action', 'Long-lasting protection', 'Safe for crops']
        },
        {
          name: 'AEROPLAN',
          image: '/images/bot-1.jpg',
          description: 'Advanced aerial application insecticide',
          features: ['Aerial application', 'Broad spectrum', 'Weather resistant']
        },
        {
          name: 'SUPER SAVER',
          image: '/images/products/insecticides/super-saver.jpg',
          description: 'Cost-effective insect control solution',
          features: ['Economical', 'High efficacy', 'Easy application']
        },
        {
          name: 'DHANESH',
          image: '/images/products/insecticides/dhanesh.jpg',
          description: 'Premium quality insecticide for crops',
          features: ['Premium quality', 'Crop safe', 'Residue free']
        },
        {
          name: 'REGENT',
          image: '/images/products/insecticides/regent.jpg',
          description: 'Professional grade insect control',
          features: ['Professional grade', 'Systemic action', 'Long duration']
        },
        {
          name: 'CYPERMETHRIN',
          image: '/images/products/insecticides/cypermethrin.jpg',
          description: 'Synthetic pyrethroid insecticide',
          features: ['Synthetic pyrethroid', 'Contact action', 'Broad spectrum']
        }
      ],
      alignment: 'left'
    },
    {
      id: 2,
      title: 'FUNGICIDES',
      slug: 'fungicides',
      description: 'Fungicides are biocidal chemical compounds or biological organisms used to kill parasitic fungi or their spores. A fungistatic inhibits their growth. Fungi can cause serious damage in agriculture.',
      buttonText: 'READ MORE',
      products: [
        {
          name: 'COPPER OXYCHLORIDE',
          image: '/images/products/fungicides/copper.jpg',
          description: 'Copper-based fungicide for disease control',
          features: ['Copper-based', 'Preventive action', 'Organic approved']
        },
        {
          name: 'COPPERTOP',
          image: '/images/products/fungicides/coppertop.jpg',
          description: 'Premium copper fungicide',
          features: ['Premium grade', 'Weather resistant', 'Long-lasting']
        },
        {
          name: 'OPERON',
          image: '/images/products/fungicides/operon.jpg',
          description: 'Systemic fungicide for crop protection',
          features: ['Systemic action', 'Curative properties', 'Broad spectrum']
        },
        {
          name: 'MANCOZEB',
          image: '/images/products/fungicides/mancozeb.jpg',
          description: 'Multi-site fungicide',
          features: ['Multi-site action', 'Preventive', 'Resistance management']
        },
        {
          name: 'BLITOX',
          image: '/images/products/fungicides/blitox.jpg',
          description: 'Effective fungal disease control',
          features: ['Effective control', 'Easy mixing', 'Cost effective']
        },
        {
          name: 'CARBENDAZIM',
          image: '/images/products/fungicides/carbendazim.jpg',
          description: 'Systemic benzimidazole fungicide',
          features: ['Systemic', 'Seed treatment', 'Soil application']
        }
      ],
      alignment: 'right'
    },
    {
      id: 3,
      title: 'HERBICIDES & WEEDICIDES',
      slug: 'herbicides',
      description: 'Herbicides, also commonly known as weedkillers, are substances used to control unwanted plants. Selective herbicides control specific weed species, while leaving the desired crop relatively unharmed.',
      buttonText: 'EXPLORE',
      products: [
        {
          name: 'NOTEWEED 10',
          image: '/images/products/herbicides/noteweed.jpg',
          description: 'Selective herbicide for weed control',
          features: ['Selective action', 'Post-emergence', 'Crop safe']
        },
        {
          name: 'GLYKILL 20',
          image: '/images/products/herbicides/glykill.jpg',
          description: 'Glyphosate-based herbicide',
          features: ['Non-selective', 'Systemic action', 'Complete kill']
        },
        {
          name: 'WEEDOUT',
          image: '/images/products/herbicides/weedout.jpg',
          description: 'Broad spectrum weed killer',
          features: ['Broad spectrum', 'Quick action', 'Residual effect']
        },
        {
          name: 'HERBICURE',
          image: '/images/products/herbicides/herbicure.jpg',
          description: 'Professional herbicide solution',
          features: ['Professional grade', 'Multiple weeds', 'Long control']
        },
        {
          name: 'CLEANMAX',
          image: '/images/products/herbicides/cleanmax.jpg',
          description: 'Maximum weed control formula',
          features: ['Maximum control', 'Fast acting', 'Weather stable']
        },
        {
          name: 'PARAQUAT',
          image: '/images/products/herbicides/paraquat.jpg',
          description: 'Contact herbicide for quick results',
          features: ['Contact action', 'Quick results', 'Desiccant effect']
        }
      ],
      alignment: 'left'
    },
    {
      id: 4,
      title: 'FERTILIZERS',
      slug: 'fertilizers',
      description: 'A fertilizer is a natural or synthetic chemical substance or mixture that is applied to soil or to plant tissues to supply plant nutrients. It is a natural way to keep your plants healthy and provide the necessary nutrients for plant growth.',
      buttonText: 'READ MORE',
      products: [
        {
          name: 'BIO GITA',
          image: '/images/products/fertilizers/bio-gita.jpg',
          description: 'Organic bio-fertilizer for sustainable farming',
          features: ['Organic', 'Soil health', 'Sustainable']
        },
        {
          name: 'EAGLE',
          image: '/images/products/fertilizers/eagle.jpg',
          description: 'High-performance fertilizer blend',
          features: ['High performance', 'Balanced nutrition', 'Quick release']
        },
        {
          name: 'FALCON',
          image: '/images/products/fertilizers/falcon.jpg',
          description: 'Premium fertilizer for maximum yield',
          features: ['Premium quality', 'Maximum yield', 'All crops']
        },
        {
          name: 'TIDE',
          image: '/images/products/fertilizers/tide.jpg',
          description: 'Water-soluble fertilizer',
          features: ['Water soluble', 'Easy application', 'Quick absorption']
        },
        {
          name: 'SUPER GROW',
          image: '/images/products/fertilizers/super-grow.jpg',
          description: 'Growth enhancing fertilizer',
          features: ['Growth enhancer', 'Root development', 'Stress tolerance']
        },
        {
          name: 'NPK COMPLEX',
          image: '/images/products/fertilizers/npk-complex.jpg',
          description: 'Complete NPK nutrition',
          features: ['Complete nutrition', 'Balanced NPK', 'All stages']
        }
      ],
      alignment: 'right'
    },
    {
      id: 5,
      title: 'PLANT GROWTH REGULATORS',
      slug: 'plant-growth-regulators',
      description: 'Plant growth regulators are chemicals used to modify plant growth such as increasing branching, suppressing shoot growth, increasing return bloom, removing excess fruit, or altering fruit maturity.',
      buttonText: 'VIEW MORE',
      products: [
        {
          name: 'BLOOM',
          image: '/images/products/regulators/bloom.jpg',
          description: 'Flowering and fruiting enhancer',
          features: ['Flowering enhancer', 'Fruit set', 'Quality improvement']
        },
        {
          name: 'ROOTEX',
          image: '/images/products/regulators/rootex.jpg',
          description: 'Root development promoter',
          features: ['Root development', 'Transplant success', 'Stress recovery']
        },
        {
          name: 'GROWMAX',
          image: '/images/products/regulators/growmax.jpg',
          description: 'Maximum growth promoter',
          features: ['Growth promotion', 'Cell division', 'Vigor enhancement']
        },
        {
          name: 'PLANTEX',
          image: '/images/products/regulators/plantex.jpg',
          description: 'Plant growth regulator complex',
          features: ['Growth regulation', 'Hormone balance', 'Yield optimization']
        },
        {
          name: 'BOOSTER',
          image: '/images/products/regulators/booster.jpg',
          description: 'Plant performance booster',
          features: ['Performance boost', 'Stress tolerance', 'Quality enhancement']
        },
        {
          name: 'CYTOKININ',
          image: '/images/products/regulators/cytokinin.jpg',
          description: 'Cell division promoter',
          features: ['Cell division', 'Shoot development', 'Anti-aging']
        }
      ],
      alignment: 'left'
    },
    {
      id: 6,
      title: 'OILS, SPREADERS & DISINFECTANTS',
      slug: 'oils-disinfectants',
      description: 'The Spray Oil is a high-refined crop oil that coats insect, mites and disease spores to suffocate and control them. Used as foliar sprays to control a wide variety of insects and mites on fruit trees, vegetables and ornamentals.',
      buttonText: 'READ MORE',
      products: [
        {
          name: 'NEEM OIL',
          image: '/images/products/oils/neem-oil.jpg',
          description: 'Natural neem-based oil',
          features: ['Natural', 'Organic approved', 'Multi-purpose']
        },
        {
          name: 'WHITE OIL',
          image: '/images/products/oils/white-oil.jpg',
          description: 'Refined mineral oil',
          features: ['Refined mineral', 'Suffocating action', 'Safe application']
        },
        {
          name: 'SPREADER',
          image: '/images/products/oils/spreader.jpg',
          description: 'Spray adjuvant and spreader',
          features: ['Better coverage', 'Improved efficacy', 'Reduced drift']
        },
        {
          name: 'CLEANEX',
          image: '/images/products/oils/cleanex.jpg',
          description: 'Equipment cleaner and disinfectant',
          features: ['Equipment cleaner', 'Disinfectant', 'Residue removal']
        },
        {
          name: 'ROYAL',
          image: '/images/products/oils/royal.jpg',
          description: 'Premium spray oil',
          features: ['Premium quality', 'Multiple pests', 'Crop safe']
        },
        {
          name: 'STICKER',
          image: '/images/products/oils/sticker.jpg',
          description: 'Spray sticker and activator',
          features: ['Better adhesion', 'Rain fastness', 'Enhanced uptake']
        }
      ],
      alignment: 'right'
    }
  ];

  // Get single background vector image for each category
  const getCategoryBgVector = (categoryId: number) => {
    const bgVectors: { [key: number]: string } = {
      1: '/images/coww.jpg',                      // For INSECTICIDES
      2: '/images/veggie.jpg',      // For FUNGICIDES  
      3: '/images/agritractor.jpg',        // For HERBICIDES
      4: '/images/pear.jpg',  // For FERTILIZERS
      5: '/images/wheatgrain.jpg',      // For PLANT GROWTH REGULATORS
      6: '/images/coffebean.jpg'        // For OILS & DISINFECTANTS
    };
    return bgVectors[categoryId] || '';
  };

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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-10">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  WHY WE ARE <span className="text-green-600">BETTER</span>
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
              
              {/* Video Section - No Border and Wider */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-lg">
                  {/* Loading placeholder */}
                  {!videoLoaded && !videoError && (
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 to-green-400 rounded-2xl flex items-center justify-center">
                      <div className="text-white text-lg font-semibold">Loading video...</div>
                    </div>
                  )}
                  
                  {/* Video */}
                  {!videoError && (
                    <video
                      className={`w-full h-96 object-cover rounded-2xl transition-opacity duration-300 ${
                        videoLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls={false} // Set to true if you want video controls
                      onLoadedData={() => setVideoLoaded(true)}
                      onError={() => {
                        setVideoError(true);
                        console.log('Video failed to load');
                      }}
                    >
                      <source src="/videos/motion.mp4" type="video/mp4" />
                    </video>
                  )}
                  
                  {/* Fallback for video error */}
                  {videoError && (
                    <div className="w-full h-96 bg-gradient-to-b from-cyan-400 to-green-400 rounded-2xl flex items-center justify-center text-8xl">
                      👨‍🌾
                    </div>
                  )}
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
                <div className={`relative ${productCategory.alignment === 'right' ? 'lg:col-start-2' : ''}`}>
                  {/* Single Corner Background Vector Image */}
                  {getCategoryBgVector(productCategory.id) && (
                    <div className="absolute -top-60 -right-20 w-70 h-70 opacity-20 pointer-events-none">
                      <Image
                        src={getCategoryBgVector(productCategory.id)}
                        alt=""
                        fill
                        className="object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="relative z-10">
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
                </div>

                {/* Product Images */}
                <div className={productCategory.alignment === 'right' ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    {/* Main Product Showcase */}
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 shadow-lg">
                      <div className="grid grid-cols-2 gap-4">
                        {productCategory.products.slice(0, 4).map((product, idx) => (
                          <div key={idx} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer">
                            <div className="aspect-square bg-gradient-to-br from-blue-50 to-green-50 rounded-lg overflow-hidden mb-3 relative">
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                onError={(e) => {
                                  // Fallback to emoji if image fails to load
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  const parent = target.parentElement;
                                  if (parent) {
                                    parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-3xl">🧪</div>';
                                  }
                                }}
                              />
                            </div>
                            <h3 className="font-bold text-sm text-gray-900 text-center mb-1">
                              {product.name}
                            </h3>
                            {product.description && (
                              <p className="text-xs text-gray-600 text-center line-clamp-2">
                                {product.description}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                      
                      {/* Show more products indicator if there are more than 4 */}
                      {productCategory.products.length > 4 && (
                        <div className="mt-4 text-center">
                          <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full">
                            +{productCategory.products.length - 4} more products
                          </span>
                        </div>
                      )}
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

      {/* Complete Product Grid - Show when viewing specific category */}
      {category !== 'all' && filteredCategories.length > 0 && (
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                COMPLETE {filteredCategories[0].title} RANGE
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Explore our comprehensive collection of {filteredCategories[0].title.toLowerCase()} 
                designed to meet all your agricultural needs with proven effectiveness and quality.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCategories[0].products.map((product, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100">
                  <div className="aspect-square bg-gradient-to-br from-blue-50 to-green-50 rounded-xl overflow-hidden mb-4 relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback to emoji if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-4xl">🧪</div>';
                        }
                      }}
                    />
                  </div>
                  
                  <div className="text-center">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    {product.description && (
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {product.description}
                      </p>
                    )}
                    
                    {product.features && (
                      <div className="flex flex-wrap gap-1 justify-center mb-4">
                        {product.features.slice(0, 3).map((feature, featureIdx) => (
                          <span 
                            key={featureIdx}
                            className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white px-4 py-2 rounded-full text-xs font-semibold"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

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
