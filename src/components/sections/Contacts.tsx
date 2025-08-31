'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            GET
          </h2>
          <h3 className="text-3xl font-bold text-green-400 mb-6">
            IN TOUCH
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Ready to enhance your agricultural productivity? Contact us today for 
            expert advice and premium quality agricultural solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 p-3 rounded-full">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Address</h4>
                  <p className="text-gray-300">
                    123 Agriculture Complex, Farm Road<br />
                    Green Valley, State 12345<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-600 p-3 rounded-full">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Phone</h4>
                  <p className="text-gray-300">
                    +91 98765 43210<br />
                    +91 87654 32109
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-600 p-3 rounded-full">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-gray-300">
                    info@cropchemicals.com<br />
                    sales@cropchemicals.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-600 p-3 rounded-full">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Business Hours</h4>
                  <p className="text-gray-300">
                    Monday - Saturday: 9:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Product Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <Button variant="green" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;