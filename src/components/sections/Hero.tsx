'use client';

import { Button } from '@/components/ui/button';
import { ChevronRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-blue-900/90 via-green-800/80 to-blue-900/90">
          <div 
            className="w-full h-full bg-cover bg-center mix-blend-multiply"
            style={{
              backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMUY0Nzg4Ii8+CjxyZWN0IHg9IjUwMCIgeT0iMjAwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzA1OUY0NiIgb3BhY2l0eT0iMC44Ii8+CjxyZWN0IHg9IjEyMDAiIHk9IjMwMCIgd2lkdGg9IjE1MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNEQzI2MjYiIG9wYWNpdHk9IjAuNyIvPgo8Y2lyY2xlIGN4PSI4MDAiIGN5PSI0MDAiIHI9IjEwMCIgZmlsbD0iI0Y1OTMxNSIgb3BhY2l0eT0iMC42Ii8+Cjwvc3ZnPgo=')`
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              BETTER <span className="text-green-400">QUALITY</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
              Advanced agricultural chemicals for enhanced crop production and 
              sustainable farming solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" variant="green" className="text-lg px-8 py-6">
                Explore Products
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 text-white border-white hover:bg-white hover:text-gray-900">
                <Play className="mr-2 h-5 w-5" />
                Watch Video
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center text-white">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;