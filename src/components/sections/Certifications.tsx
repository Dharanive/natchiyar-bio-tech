'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Award, Shield, CheckCircle, Star } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      name: 'ISO 9001:2015',
      description: 'Quality Management System',
      icon: <Award className="h-12 w-12" />,
      year: '2020',
      color: 'text-blue-600'
    },
    {
      id: 2,
      name: 'ISO 14001:2015',
      description: 'Environmental Management',
      icon: <Shield className="h-12 w-12" />,
      year: '2021',
      color: 'text-green-600'
    },
    {
      id: 3,
      name: 'HACCP Certified',
      description: 'Food Safety Management',
      icon: <CheckCircle className="h-12 w-12" />,
      year: '2019',
      color: 'text-orange-600'
    },
    {
      id: 4,
      name: 'GMP Certified',
      description: 'Good Manufacturing Practices',
      icon: <Star className="h-12 w-12" />,
      year: '2022',
      color: 'text-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            CERTIFICATIONS
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our commitment to quality and excellence is demonstrated through our 
            comprehensive certifications and adherence to international standards.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert) => (
            <Card 
              key={cert.id} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white"
            >
              <CardContent className="p-8 text-center">
                <div className={`${cert.color} mb-6 flex justify-center`}>
                  {cert.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {cert.name}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {cert.description}
                </p>
                
                <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Certified {cert.year}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Quality Assurance & Compliance
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We maintain the highest standards of quality control and regulatory compliance 
              across all our manufacturing processes. Our products undergo rigorous testing 
              and quality checks to ensure they meet both national and international standards 
              for agricultural chemicals and fertilizers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;