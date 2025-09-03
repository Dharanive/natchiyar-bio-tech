'use client';

import { useState, useEffect, useRef } from 'react';
import Masonry from '@/components/ui/Masonry';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const productImages = [
    {
      id: '1',
      img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=600&fit=crop&crop=center',
      url: '#',
      height: 600
    },
    {
      id: '2',
      img: '/images/che1.jpg',
      url: '#',
      height: 500
    },
    {
      id: '3',
      img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=700&fit=crop&crop=center',
      url: '#',
      height: 700
    },
    {
      id: '4',
      img: '/images/liquid.jpg',
      url: '#',
      height: 550
    },
    {
      id: '5',
      img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=650&fit=crop&crop=center',
      url: '#',
      height: 650
    },
    {
      id: '6',
      img: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=480&fit=crop&crop=center',
      url: '#',
      height: 480
    },
    {
      id: '7',
      img: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=400&h=620&fit=crop&crop=center',
      url: '#',
      height: 620
    },
    {
      id: '8',
      img: '/images/Bio.jpg',
      url: '#',
      height: 580
    },
    {
      id: '9',
      img: '/images/bot-3.jpg',
      url: '#',
      height: 520
    },
    {
      id: '10',
      img: '/images/bot-1.jpg',
      url: '#',
      height: 680
    },
    {
      id: '11',
      img: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=400&h=540&fit=crop&crop=center',
      url: '#',
      height: 540
    },
    {
      id: '12',
      img: '/images/che2.jpg',
      url: '#',
      height: 600
    },
    {
      id: '13',
      img: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&h=550&fit=crop&crop=center',
      url: '#',
      height: 550
    },
    {
      id: '14',
      img: '/images/bot-2.png',
      url: '#',
      height: 630
    },
    {
      id: '15',
      img: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&h=490&fit=crop&crop=center',
      url: '#',
      height: 420
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '-50px 0px -50px 0px' // Add some margin for better timing
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            OUR
          </h2>
          <h3 className="text-4xl font-bold bg-green-600 bg-clip-text text-transparent mb-6">
            PRODUCT RANGE
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive agricultural solutions designed to enhance crop productivity, 
            protect against diseases, and promote sustainable farming practices.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="w-full min-h-[800px]">
          <Masonry
            items={productImages}
            ease="power3.out"
            duration={1}
            stagger={0.1}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={1.05}
            blurToFocus={true}
            colorShiftOnHover={false}
            triggerAnimation={isVisible}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;