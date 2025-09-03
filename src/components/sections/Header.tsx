'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigation = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT US', href: '#about' },
    { 
      name: 'PRODUCTS', 
      href: '#', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'OUR PRODUCTS', href: '/products' },
        { name: 'INSECTICIDES', href: '/products/insecticides' },
        { name: 'FUNGICIDES', href: '/products/fungicides' },
        { name: 'HERBICIDES & WEEDICIDES', href: '/products/herbicides' },
        { name: 'FERTILIZERS', href: '/products/fertilizers' },
        { name: 'PLANT GROWTH REGULATORS', href: '/products/plant-growth-regulators' },
        { name: 'OILS, SPREADERS & DISINFECTANTS', href: '/products/oils-disinfectants' },
      ]
    },
    { name: 'GALLERY', href: '#products' },
    { name: 'CONTACT', href: '#contact' },
  ];

  if (!mounted) {
    return (
      <header className="fixed top-0 w-full z-50">
        <div className="bg-white/95 backdrop-blur-sm border-b border-gray-200">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <span className="text-2xl font-bold text-cyan-400">Crop</span>
                  <span className="text-lg font-normal text-green-400 block -mt-1">Chemicals</span>
                </div>
              </div>

              {/* Desktop Navigation + CTA Button */}
              <div className="hidden lg:flex items-center space-x-8">
                {/* Navigation */}
                <nav className="flex items-center space-x-8">
                  {navigation.map((item) => (
                    <div key={item.name} className="relative group">
                      <a
                        href={item.href}
                        className="text-gray-700 hover:text-cyan-600 font-medium text-sm tracking-wide transition-colors duration-300 relative group"
                      >
                        {item.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </div>
                  ))}
                </nav>

                {/* CTA Button */}
                <Button className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white border-0 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  1800-1800-800
                </Button>
              </div>

              {/* Mobile menu button */}
              <button className="lg:hidden p-2 text-gray-700 hover:text-cyan-600 transition-colors">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
<div className="flex items-start">
  <div className="relative -ml-8">
    <Image 
      src="/images/NBTLOGO.png" 
      alt="NBT Chemicals Logo"
      width={248}
      height={248}
      className="w-62 h-62 mt-4 object-contain"
    />
  </div>
</div>


            {/* Desktop Navigation + CTA Button */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Navigation */}
              <nav className="flex items-center space-x-8">
                {navigation.map((item) => (
                  <div key={item.name} className="relative group">
                    {item.hasDropdown ? (
                      <div
                        className="relative"
                        onMouseEnter={() => setIsProductsOpen(true)}
                        onMouseLeave={() => setIsProductsOpen(false)}
                      >
                        <button className="text-gray-700 hover:text-cyan-600 font-medium text-sm tracking-wide transition-colors duration-300 flex items-center space-x-1 group">
                          <span>{item.name}</span>
                          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                        </button>
                        
                        {/* Dropdown Menu */}
                        <div className={`absolute top-full left-0 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 py-4 transition-all duration-300 ${
                          isProductsOpen ? 'opacity-100 visible translate-y-2' : 'opacity-0 invisible translate-y-0'
                        }`}>
                          {item.dropdownItems?.map((dropItem) => (
                            <a
                              key={dropItem.name}
                              href={dropItem.href}
                              className="block px-6 py-3 text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 font-medium text-sm transition-colors duration-200"
                            >
                              {dropItem.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="text-gray-700 hover:text-cyan-600 font-medium text-sm tracking-wide transition-colors duration-300 relative group"
                      >
                        {item.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    )}
                  </div>
                ))}
              </nav>

              {/* CTA Button */}
              <Button className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white border-0 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                1800-1800-800
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-cyan-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-200 rounded-b-lg shadow-lg">
              <nav className="flex flex-col py-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setIsProductsOpen(!isProductsOpen)}
                          className="text-gray-700 hover:text-cyan-600 font-medium py-3 px-6 transition-colors flex items-center space-x-2 w-full text-left"
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isProductsOpen && (
                          <div className="bg-gray-50 border-t border-gray-100">
                            {item.dropdownItems?.map((dropItem) => (
                              <a
                                key={dropItem.name}
                                href={dropItem.href}
                                className="block text-gray-600 hover:text-cyan-600 py-3 px-12 text-sm"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {dropItem.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="text-gray-700 hover:text-cyan-600 font-medium py-3 px-6 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
                <div className="px-6 pt-4 border-t border-gray-100 mt-4">
                  <Button className="bg-gradient-to-r from-green-500 to-cyan-500 text-white w-full rounded-full">
                    1800-1800-800
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;