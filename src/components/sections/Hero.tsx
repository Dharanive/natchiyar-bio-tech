'use client';

import { Button } from '@/components/ui/button';
import { ChevronRight, Play, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const heroSlides = [
  {
    id: 1,
    title: "BETTER",
    highlight: "QUALITY",
    description: "Advanced agricultural chemicals for enhanced crop production and sustainable farming solutions.",
    backgroundImage: "url('/images/tractor.jpg')",
  },
  {
    id: 2,
    title: "SUSTAINABLE",
    highlight: "FARMING",
    description: "Eco-friendly solutions that protect your crops while preserving the environment for future generations.",
    backgroundImage: "url('/images/spraying.jpg')",
  },
  {
    id: 3,
    title: "INNOVATIVE",
    highlight: "SOLUTIONS",
    description: "Cutting-edge biotechnology products designed to maximize yield and minimize environmental impact.",
    backgroundImage: "url('/images/drone.jpg')",
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Carousel Container */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 
              index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <div className={`w-full h-full bg-gradient-to-r `}>
              <div 
                className="w-full h-full bg-cover bg-center mix-blend-multiply"
                style={{ backgroundImage: slide.backgroundImage }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Content */}
     <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl ml-24">
          <div className="text-center md:text-left">
            <div className="overflow-hidden">
              <h1 
                key={currentSlide}
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up"
              >
                {heroSlides[currentSlide].title}{' '}
                <span className="text-green-400">
                  {heroSlides[currentSlide].highlight}
                </span>
              </h1>
            </div>
            
            <div className="overflow-hidden">
              <p 
                key={`desc-${currentSlide}`}
                className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl animate-fade-in-up animation-delay-200"
              >
                {heroSlides[currentSlide].description}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up animation-delay-400">
              <Link href="/products">
                <Button size="lg" variant="green" className="text-lg px-8 py-6">
                  Explore Products
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 text-black border-white hover:bg-gray-200 hover:text-gray-900">
                <Play className="mr-2 h-5 w-5" />
                Watch Video
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
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
