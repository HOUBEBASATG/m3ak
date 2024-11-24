import React from 'react';
import { User } from '../types';
import { Calendar, MessageCircle, Star } from 'lucide-react';

interface ProfessionalCardProps {
  professional: User;
}

export default function ProfessionalCard({ professional }: ProfessionalCardProps) {
  const defaultAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(professional.name)}&background=0284C7&color=fff`;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img
            src={professional.avatar || defaultAvatar}
            alt={professional.name}
            className="h-16 w-16 rounded-full object-cover"
          />
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-gray-900">{professional.name}</h3>
            <div className="flex items-center text-yellow-400">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <span className="ml-2 text-sm text-gray-600">(5.0)</span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 mb-4">
          Licensed Mental Health Professional with expertise in student counseling,
          anxiety management, and academic stress.
        </p>

        <div className="space-y-2 mb-6">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-5 w-5 mr-2" />
            <span>Available next week</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MessageCircle className="h-5 w-5 mr-2" />
            <span>Speaks English, French</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">$30</span>
            <span className="text-gray-600">/session</span>
          </div>
          <button className="bg-sky-600 text-white px-4 py-2 rounded-full hover:bg-sky-700 transition">
            Book Session
          </button>
        </div>
      </div>
    </div>
  );
}