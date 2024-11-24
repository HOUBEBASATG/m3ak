import React, { useState } from 'react';
import SignUpModal from './SignUpModal';

export default function CTA() {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      <section className="bg-sky-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Start Your Wellness Journey Today
            </h2>
            <p className="text-xl text-sky-100 max-w-2xl mx-auto mb-8">
              Join thousands of students who have found support and guidance through M3AK.
              Your first consultation is free.
            </p>
            <button 
              onClick={() => setShowSignUp(true)}
              className="bg-white text-sky-600 px-8 py-3 rounded-full hover:bg-sky-50 transition"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      <SignUpModal isOpen={showSignUp} onClose={() => setShowSignUp(false)} />
    </>
  );
}