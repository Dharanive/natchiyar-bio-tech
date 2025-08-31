'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'INSECTICIDES',
      category: 'Pest Control',
      color: 'from-red-500 to-red-700',
      description: 'Advanced insect control solutions'
    },
    {
      id: 2,
      name: 'FUNGICIDES',
      category: 'Disease Control',
      color: 'from-blue-600 to-blue-800',
      description: 'Comprehensive fungal disease protection'
    },
    {
      id: 3,
      name: 'HERBICIDES & WEEDICIDES',
      category: 'Weed Control',
      color: 'from-green-600 to-green-800',
      description: 'Effective weed management solutions'
    },
    {
      id: 4,
      name: 'FERTILIZERS',
      category: 'Plant Nutrition',
      color: 'from-yellow-600 to-orange-600',
      description: 'Premium plant nutrition products'
    },
    {
      id: 5,
      name: 'OILS, SPREADERS & DISINFECTANTS',
      category: 'Adjuvants',
      color: 'from-purple-600 to-purple-800',
      description: 'Spray oils and disinfectant solutions'
    },
    {
      id: 6,
      name: 'PLANT GROWTH REGULATORS',
      category: 'Growth Enhancement',
      color: 'from-teal-600 to-teal-800',
      description: 'Natural growth regulation products'
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'SuperGrow',
      category: 'Premium Fertilizer',
      image: '🌱',
      description: 'Advanced nutrient formula for enhanced growth'
    },
    {
      id: 2,
      name: 'CropShield',
      category: 'Fungicide',
      image: '🛡️',
      description: 'Complete protection against fungal diseases'
    },
    {
      id: 3,
      name: 'WeedOut Pro',
      category: 'Herbicide',
      image: '🚫',
      description: 'Selective weed control technology'
    },
    {
      id: 4,
      name: 'BugFree Max',
      category: 'Insecticide',
      image: '🐛',
      description: 'Long-lasting insect protection'
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            OUR
          </h2>
          <h3 className="text-3xl font-bold text-gray-600 mb-6">
            PRODUCTS
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive range of agricultural chemicals designed to maximize crop 
            yield and ensure sustainable farming practices.
          </p>
        </div>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0"
            >
              <div className={`h-32 bg-gradient-to-br ${product.color} relative`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-sm uppercase tracking-wide">
                    {product.name}
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Products Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                250+ RESULT ORIENTED
              </h3>
              <h4 className="text-xl text-gray-600">
                PRODUCTS
              </h4>
            </div>
            <Button variant="green" size="lg">
              All Products
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{product.image}</div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">
                    {product.name}
                  </h4>
                  <p className="text-sm text-gray-500 mb-3">
                    {product.category}
                  </p>
                  <p className="text-sm text-gray-600">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;