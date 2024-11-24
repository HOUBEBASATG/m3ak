import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import SignUpModal from './SignUpModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-sky-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">M3AK</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-sky-600 transition">Features</a>
              <a href="#support" className="text-gray-700 hover:text-sky-600 transition">Support</a>
              <a href="#community" className="text-gray-700 hover:text-sky-600 transition">Community</a>
              <button 
                onClick={() => setShowSignUp(true)}
                className="bg-sky-600 text-white px-6 py-2 rounded-full hover:bg-sky-700 transition"
              >
                Get Started
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-sky-600">Features</a>
              <a href="#support" className="block px-3 py-2 text-gray-700 hover:text-sky-600">Support</a>
              <a href="#community" className="block px-3 py-2 text-gray-700 hover:text-sky-600">Community</a>
              <button 
                onClick={() => {
                  setShowSignUp(true);
                  setIsOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-sky-600 font-medium"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      <SignUpModal isOpen={showSignUp} onClose={() => setShowSignUp(false)} />
    </>
  );
}