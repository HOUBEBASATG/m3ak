import React from 'react';
import { UserCircle, Users, Calendar, MessageCircle, Activity, Shield } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <UserCircle className="h-8 w-8 text-sky-600" />,
      title: "Anonymous Profiles",
      description: "Create your safe space with an alias and avatar of your choice."
    },
    {
      icon: <Users className="h-8 w-8 text-sky-600" />,
      title: "Community Support",
      description: "Join group activities and connect with peers who understand."
    },
    {
      icon: <Calendar className="h-8 w-8 text-sky-600" />,
      title: "Flexible Scheduling",
      description: "Book sessions that fit your schedule and preferences."
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-sky-600" />,
      title: "Secure Chat",
      description: "Communicate safely with professionals and peers."
    },
    {
      icon: <Activity className="h-8 w-8 text-sky-600" />,
      title: "Wellness Tracking",
      description: "Monitor your progress with interactive assessments."
    },
    {
      icon: <Shield className="h-8 w-8 text-sky-600" />,
      title: "Data Protection",
      description: "Your information is protected with enterprise-grade security."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Features Designed for Your Wellbeing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to take care of your mental health, all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}