import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Calendar, Shield } from 'lucide-react';
import SignUpModal from './SignUpModal';

export default function Hero() {
  const [showSignUp, setShowSignUp] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-b from-sky-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Mental Health
            <span className="text-sky-600"> Matters</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join M3AK for affordable mental health support, connect with professionals,
            and be part of a caring community that understands.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => setShowSignUp(true)}
              className="bg-sky-600 text-white px-8 py-3 rounded-full hover:bg-sky-700 transition"
            >
              Start Your Journey
            </button>
            <button className="border-2 border-sky-600 text-sky-600 px-8 py-3 rounded-full hover:bg-sky-50 transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            onClick={() => navigate('/professionals')}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <Users className="h-12 w-12 text-sky-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
            <p className="text-gray-600">Connect with certified healthcare professionals at affordable rates.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <Calendar className="h-12 w-12 text-sky-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Flexible Sessions</h3>
            <p className="text-gray-600">Schedule sessions that fit your lifestyle and preferences.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <Shield className="h-12 w-12 text-sky-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Safe Space</h3>
            <p className="text-gray-600">Your privacy and security are our top priorities.</p>
          </div>
        </div>
      </div>

      <SignUpModal isOpen={showSignUp} onClose={() => setShowSignUp(false)} />
    </div>
  );
}