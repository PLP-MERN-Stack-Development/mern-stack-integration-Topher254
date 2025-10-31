import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      console.log('Subscribing email:', email);
      setEmail('');
    }
  };

  return (
    <footer className="bg-gray-50">
      {/* <div className="bg-linear-to-r from-purple-200 via-pink-100 to-blue-100 py-16 px-6 flex justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Stay in the <span className="relative inline-block">
              know
              <span className="absolute bottom-1 left-0 w-full h-3 bg-purple-400/40 -z-10"></span>
            </span>
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            Get the latest product and management insights every week.
            <br />
            Straight to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-1 px-6 py-3 rounded-full bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300 text-gray-700 placeholder-gray-500"
            />
            <button
              onClick={handleSubscribe}
              className="w-full sm:w-auto bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 hover:shadow-lg transition-all duration-300"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-6 sm:px-10 xl:px-32 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-2xl font-bold text-gray-900">Rida</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Rodi is a vibrant blog website where conversations come alive. Our platform fosters meaningful discussions, sharing ideas, and inspiring stories.
            </p>
            
            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button className="text-gray-600 hover:text-gray-900 transition-colors text-sm text-left">
                  Home
                </button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-gray-900 transition-colors text-sm text-left">
                  Categories
                </button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-gray-900 transition-colors text-sm text-left">
                  Contact
                </button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-gray-900 transition-colors text-sm text-left">
                  About
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Categories</h4>
            <ul className="space-y-3">
              <li>
                <button className="text-gray-600 hover:text-gray-900 transition-colors text-sm text-left">
                  Tech Trends
                </button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-gray-900 transition-colors text-sm text-left">
                  Mindful Living
                </button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-gray-900 transition-colors text-sm text-left">
                  Creative Corner
                </button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-gray-900 transition-colors text-sm text-left">
                  Global Insights
                </button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-gray-900 transition-colors text-sm text-left">
                  Wellness Wisdom
                </button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-gray-900 transition-colors text-sm text-left">
                  Business Buzz
                </button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-gray-900 transition-colors text-sm text-left">
                  Adventure Diary
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Get In touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-600 shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm">
                  Nairobi,<br />
                  Muramati,Street
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-600 shrink-0" />
                <span className="text-gray-600 text-sm">
                  +254 796 871876
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-600 shrink-0" />
                <span className="text-gray-600 text-sm">
                 raphaelsarota@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 xl:px-32 py-6">
          <p className="text-center text-gray-600 text-sm font-medium">
            COPYRIGHT © 2024 RIDA
          </p>
        </div>
      </div>
    </footer>
  );
}