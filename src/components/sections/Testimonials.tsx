'use client';
import React, { useRef, useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Quote, Leaf, Wheat, Sprout } from 'lucide-react';

// ScrollVelocity Component (from your provided code)
interface VelocityMapping {
  input: [number, number];
  output: [number, number];
}

interface VelocityTextProps {
  children: React.ReactNode;
  baseVelocity: number;
  className?: string;
  numCopies?: number;
  parallaxClassName?: string;
  scrollerClassName?: string;
  parallaxStyle?: React.CSSProperties;
  scrollerStyle?: React.CSSProperties;
}

interface ScrollVelocityProps {
  texts: string[];
  velocity?: number;
  className?: string;
  numCopies?: number;
  parallaxClassName?: string;
  scrollerClassName?: string;
  parallaxStyle?: React.CSSProperties;
  scrollerStyle?: React.CSSProperties;
}

function useElementWidth<T extends HTMLElement>(ref: React.RefObject<T | null>): number {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [ref]);

  return width;
}

const ScrollVelocity: React.FC<ScrollVelocityProps> = ({
  texts = [],
  velocity = 100,
  className = '',
  numCopies = 6,
  parallaxClassName,
  scrollerClassName,
  parallaxStyle,
  scrollerStyle
}) => {
  function VelocityText({
    children,
    baseVelocity = velocity,
    className = '',
    numCopies,
    parallaxClassName,
    scrollerClassName,
    parallaxStyle,
    scrollerStyle
  }: VelocityTextProps) {
  
    const [x, setX] = useState(0);
    const copyRef = useRef<HTMLSpanElement>(null);
    const copyWidth = useElementWidth(copyRef);

    React.useEffect(() => {
      let animationId: number;
      let currentX = 0;
      
      const animate = () => {
        currentX -= baseVelocity * 0.01;
        if (copyWidth > 0) {
          currentX = ((currentX % copyWidth) + copyWidth) % copyWidth - copyWidth;
        }
        setX(currentX);
        animationId = requestAnimationFrame(animate);
      };
      
      animationId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationId);
    }, [baseVelocity, copyWidth]);

    const spans = [];
    for (let i = 0; i < numCopies!; i++) {
      spans.push(
        <span className={`flex-shrink-0 ${className}`} key={i} ref={i === 0 ? copyRef : null}>
          {children}
        </span>
      );
    }

    return (
      <div className={`${parallaxClassName} relative overflow-hidden`} style={parallaxStyle}>
        <div
          className={`${scrollerClassName} flex whitespace-nowrap text-center font-sans text-4xl font-bold tracking-[-0.02em] drop-shadow md:text-[5rem] md:leading-[5rem]`}
          style={{ transform: `translateX(${x}px)`, ...scrollerStyle }}
        >
          {spans}
        </div>
      </div>
    );
  }

  return (
    <section>
      {texts.map((text: string, index: number) => (
        <VelocityText
          key={index}
          className={className}
          baseVelocity={index % 2 !== 0 ? -velocity : velocity}
          numCopies={numCopies}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          parallaxStyle={parallaxStyle}
          scrollerStyle={scrollerStyle}
        >
          {text}&nbsp;
        </VelocityText>
      ))}
    </section>
  );
};

const Testimonials = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 animate-pulse">
          <Wheat className="h-24 w-24 text-green-300" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce">
          <Leaf className="h-16 w-16 text-emerald-300" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-pulse delay-300">
          <Sprout className="h-20 w-20 text-teal-300" />
        </div>
        <div className="absolute top-1/3 right-1/3 animate-bounce delay-500">
          <Leaf className="h-12 w-12 text-green-400" />
        </div>
      </div>

      {/* Scrolling Text Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <ScrollVelocity
          texts={["SUSTAINABLE • INNOVATION • AGRICULTURE • GROWTH •"]}
          velocity={30}
          className="text-green-900"
          parallaxClassName="mb-8"
        />
        <div className="mt-20">
          <ScrollVelocity
            texts={["• FARMING • FUTURE • TECHNOLOGY • HARVEST •"]}
            velocity={-25}
            className="text-emerald-900"
          />
        </div>
      </div>

      <section className="relative py-32 px-4">
        <div className="container mx-auto">
          {/* Section Header with Enhanced Typography */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-green-500"></div>
                <Leaf className="h-6 w-6 text-green-600" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-green-500"></div>
              </div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-2 tracking-tight">
              MESSAGE FROM OUR
            </h2>
            <div className="relative">
              <h3 className="text-4xl md:text-6xl font-light text-green-600 tracking-widest">
                FOUNDER
              </h3>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
            </div>
          </div>

          {/* Enhanced Testimonial Card */}
          <div className="max-w-6xl mx-auto">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
              
              <Card className="relative shadow-2xl border-0 bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden">
                {/* Decorative Top Border */}
                <div className="h-2 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500"></div>
                
                <CardContent className="p-16">
                  {/* Large Quote Icon */}
                  <div className="flex justify-center mb-12">
                    <div className="relative">
                      <div className="absolute inset-0 bg-green-200 rounded-full scale-150 opacity-20 animate-pulse"></div>
                      <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-full">
                        <Quote className="h-16 w-16 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Quote Text */}
                  <blockquote className="text-2xl md:text-3xl text-gray-700 leading-relaxed mb-16 text-center font-light relative">
                    <span className="text-6xl text-green-200 absolute -top-4 -left-4 font-serif">&ldquo;</span>
                    Support for sustainable agriculture lies at the heart of everything we do, and we are fully committed to play a key role in expanding the capacity of agriculture.
                    <span className="text-6xl text-green-200 absolute -bottom-8 -right-4 font-serif">&rdquo;</span>
                  </blockquote>

                  {/* Enhanced Founder Section */}
                  <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    {/* Avatar with Enhanced Design */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full scale-110 opacity-20 animate-pulse"></div>
                      <div className="relative w-32 h-32 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-2xl p-1">
                        <div className="w-full h-full bg-white rounded-full p-1">
                          <Image
                            src="/images/bala.jpg"
                            alt="Bala - Managing Director"
                            width={128}
                            height={128}
                            className="w-full h-full rounded-full object-cover shadow-lg"
                            onError={(e) => {
                              // Fallback to placeholder if image fails to load
                              e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23059669'/%3E%3Ctext x='50' y='60' text-anchor='middle' fill='white' font-size='24' font-weight='bold'%3EMR%3C/text%3E%3C/svg%3E";
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Founder Details */}
                    <div className="text-center md:text-left">
                      <h4 className="text-3xl font-bold text-gray-900 mb-2">
                        MR.E. Bala
                      </h4>
                      <p className="text-xl text-green-600 font-medium mb-4">
                        Managing Director
                      </p>
                      
                      {/* Achievement Badges */}
                      <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                        <span className="px-4 py-2 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                          15+ Years Experience
                        </span>
                        <span className="px-4 py-2 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full">
                          Innovation Leader
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom Decorative Elements */}
          <div className="flex justify-center mt-20 gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-green-500" />
              <span className="text-sm text-gray-600">Sustainable</span>
            </div>
            <div className="flex items-center gap-2">
              <Wheat className="h-5 w-5 text-emerald-500" />
              <span className="text-sm text-gray-600">Innovation</span>
            </div>
            <div className="flex items-center gap-2">
              <Sprout className="h-5 w-5 text-teal-500" />
              <span className="text-sm text-gray-600">Growth</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
