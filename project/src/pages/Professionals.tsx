import React from 'react';
import { useFirestore } from '../hooks/useFirestore';
import { where } from 'firebase/firestore';
import { User } from '../types';
import ProfessionalCard from '../components/ProfessionalCard';
import { Loader2 } from 'lucide-react';

export default function Professionals() {
  const { data: professionals, loading, error } = useFirestore<User>('users', [
    where('role', '==', 'professional')
  ]);

  if (loading) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-sky-600 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <p className="text-red-600">Failed to load professionals. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Mental Health Professionals</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with experienced professionals who are here to support your mental well-being
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionals.map((professional) => (
            <ProfessionalCard key={professional.id} professional={professional} />
          ))}

          {professionals.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600">No professionals available at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}