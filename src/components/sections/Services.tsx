'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Beaker, Bug, TreePine, Shield, Droplets } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Fertilizers',
      description: 'Premium quality fertilizers for enhanced crop nutrition and growth.',
      icon: <Leaf className="h-12 w-12" />,
      color: 'text-green-600'
    },
    {
      id: 2,
      title: 'Fungicides',
      description: 'Advanced fungicidal solutions to protect crops from fungal diseases.',
      icon: <Shield className="h-12 w-12" />,
      color: 'text-blue-600'
    },
    {
      id: 3,
      title: 'Herbicides & Weedicides',
      description: 'Effective weed control solutions for cleaner, healthier crops.',
      icon: <TreePine className="h-12 w-12" />,
      color: 'text-orange-600'
    },
    {
      id: 4,
      title: 'Pesticides',
      description: 'Comprehensive pest control for maximum crop protection.',
      icon: <Bug className="h-12 w-12" />,
      color: 'text-red-600'
    },
    {
      id: 5,
      title: 'Bio-Plant Regulators',
      description: 'Natural plant growth regulators for optimal development.',
      icon: <Beaker className="h-12 w-12" />,
      color: 'text-purple-600'
    },
    {
      id: 6,
      title: 'Water Treatment & Adjuvants',
      description: 'Advanced water treatment solutions and spray adjuvants.',
      icon: <Droplets className="h-12 w-12" />,
      color: 'text-cyan-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            OUR
          </h2>
          <h3 className="text-3xl font-bold text-gray-600 mb-6">
            PRODUCT RANGE
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive agricultural solutions designed to enhance crop productivity, 
            protect against diseases, and promote sustainable farming practices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardContent className="p-8 text-center">
                <div className={`${service.color} mb-6 flex justify-center`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;