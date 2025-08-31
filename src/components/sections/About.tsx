'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-green-600">SERVICE TO AGRI</span>
                <span className="text-gray-900">CULTURE IS OUR</span>
              </h2>
              <h3 className="text-4xl font-bold text-gray-900">
                PASSION
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  ABOUT CROP CHEMICALS
                </h4>
                <h5 className="text-xl text-gray-600 mb-4">
                  BETTER QUALITY, BETTER CROPS
                </h5>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We are dedicated to providing innovative agricultural solutions that 
                  enhance crop productivity while promoting sustainable farming practices. 
                  Our comprehensive range of chemicals and fertilizers is designed to 
                  meet the evolving needs of modern agriculture.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  With years of research and development, we ensure that every product 
                  meets the highest quality standards and delivers exceptional results 
                  for farmers worldwide.
                </p>
                <Button variant="green" size="lg">
                  Read More
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Character Illustration */}
          <div className="flex justify-center">
            <Card className="p-8 bg-green-50 border-2 border-green-200">
              <CardContent className="text-center p-0">
                {/* Farmer Character SVG */}
                <div className="w-80 h-80 mx-auto bg-gradient-to-b from-blue-400 to-green-400 rounded-2xl flex items-center justify-center">
                  <div className="text-8xl">
                    👨‍🌾
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Expert Agricultural Solutions
                  </h4>
                  <p className="text-gray-600">
                    Trusted by farmers for quality and reliability
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '250+', label: 'Products', icon: '🧪' },
              { value: '3500+', label: 'Happy Farmers', icon: '👥' },
              { value: '300000+', label: 'Hectares', icon: '🌾' },
              { value: '10L+', label: 'Revenue', icon: '💰' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-green-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;