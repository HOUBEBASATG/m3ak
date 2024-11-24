import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <CTA />
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p>© 2024 M3AK. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}