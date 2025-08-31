'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            MESSAGE FROM OUR
          </h2>
          <h3 className="text-3xl font-bold text-gray-600">
            FOUNDER
          </h3>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0 bg-gradient-to-br from-green-50 to-blue-50">
            <CardContent className="p-12">
              <div className="flex flex-col items-center text-center">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="h-12 w-12 text-green-600" />
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                  &ldquo;Supporting the agricultural community has always been at the heart of everything we do. We believe that by providing high-quality, innovative agricultural solutions, we can help farmers achieve better yields while maintaining sustainable farming practices for future generations.&rdquo;
                </blockquote>

                {/* Founder Info */}
                <div className="flex items-center space-x-4">
                  {/* Avatar */}
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    MR
                  </div>
                  
                  {/* Details */}
                  <div className="text-left">
                    <h4 className="font-bold text-lg text-gray-900">
                      Mr. Rajesh Kumar
                    </h4>
                    <p className="text-gray-600">
                      Founder & Director
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;