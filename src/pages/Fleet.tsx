import React from 'react';
import { Users, Gauge, MapPin, Star, Sparkles } from 'lucide-react';

const Fleet = () => {
  const aircraft = [
    {
      name: 'Airbus A350',
      type: 'Wide-body',
      capacity: '324 passengers',
      range: '15,000 km',
      speed: '903 km/h',
      image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'The crown jewel of modern aviation - sleek, efficient, and designed for the ultimate passenger experience.',
      vintage: false
    },
    {
      name: 'Boeing 777',
      type: 'Wide-body',
      capacity: '396 passengers',
      range: '14,800 km',
      speed: '905 km/h',
      image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'The reliable giant of the skies - trusted by millions for intercontinental adventures.',
      vintage: false
    },
    {
      name: 'Airbus A320',
      type: 'Narrow-body',
      capacity: '180 passengers',
      range: '6,100 km',
      speed: '828 km/h',
      image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'The perfect companion for European escapes and medium-distance journeys.',
      vintage: false
    },
    {
      name: 'Boeing 787 Dreamliner',
      type: 'Wide-body',
      capacity: '296 passengers',
      range: '14,800 km',
      speed: '903 km/h',
      image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Where dreams take flight - revolutionary design meets unparalleled comfort.',
      vintage: false
    },
    {
      name: 'Airbus A220',
      type: 'Narrow-body',
      capacity: '149 passengers',
      range: '6,400 km',
      speed: '828 km/h',
      image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'The future of aviation - eco-friendly innovation with a touch of elegance.',
      vintage: false
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Sparkles className="h-12 w-12 text-amber-400 animate-pulse" />
          </div>
          <h1 className="text-6xl font-bold text-amber-400 mb-8 font-serif">Our Magnificent Fleet</h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Discover our carefully curated collection of aircraft, each one a masterpiece of engineering 
            designed to carry you through the skies in comfort and style.
          </p>
        </div>

        {/* Fleet Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 bg-gradient-to-r from-gray-800 to-gray-700 rounded-3xl p-12 border border-amber-400/20">
          <div className="text-center">
            <div className="text-5xl font-bold text-amber-400 mb-4 font-serif">300+</div>
            <div className="text-gray-300 font-medium text-xl">Total Aircraft</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-amber-400 mb-4 font-serif">12</div>
            <div className="text-gray-300 font-medium text-xl">Aircraft Types</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-amber-400 mb-4 font-serif">5.2</div>
            <div className="text-gray-300 font-medium text-xl">Average Fleet Age (years)</div>
          </div>
        </div>

        {/* Aircraft Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {aircraft.map((plane, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden hover:shadow-amber-400/20 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-700 hover:border-amber-400/50">
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={plane.image} 
                  alt={plane.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4">
                  <Star className="h-6 w-6 text-amber-400 fill-current" />
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-3xl font-bold text-amber-400 mb-2 font-serif">{plane.name}</h3>
                    <span className="inline-block bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 text-sm font-bold px-4 py-2 rounded-full">
                      {plane.type}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-8 leading-relaxed text-lg font-light">{plane.description}</p>
                
                <div className="grid grid-cols-3 gap-6">
                  <div className="flex items-center space-x-3 bg-gray-700 p-4 rounded-xl">
                    <Users className="h-6 w-6 text-amber-400" />
                    <div>
                      <div className="text-sm text-gray-400">Capacity</div>
                      <div className="font-bold text-amber-400">{plane.capacity}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 bg-gray-700 p-4 rounded-xl">
                    <MapPin className="h-6 w-6 text-amber-400" />
                    <div>
                      <div className="text-sm text-gray-400">Range</div>
                      <div className="font-bold text-amber-400">{plane.range}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 bg-gray-700 p-4 rounded-xl">
                    <Gauge className="h-6 w-6 text-amber-400" />
                    <div>
                      <div className="text-sm text-gray-400">Speed</div>
                      <div className="font-bold text-amber-400">{plane.speed}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sustainability Section */}
        <div className="mt-24 bg-gradient-to-r from-gray-800 to-gray-700 rounded-3xl p-12 lg:p-16 border border-amber-400/20">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <Star className="h-16 w-16 text-amber-400 fill-current" />
            </div>
            <h2 className="text-4xl font-bold text-amber-400 mb-8 font-serif">Flying Towards Tomorrow</h2>
            <p className="text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12 font-light">
              Our commitment to the environment runs as deep as our passion for flight. Every aircraft in our fleet 
              represents a step towards a more sustainable future, combining cutting-edge technology with 
              environmental responsibility.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl border border-amber-400/30">
                <div className="text-4xl font-bold text-amber-400 mb-4 font-serif">-25%</div>
                <div className="text-gray-300 text-lg">CO₂ Emissions Reduction</div>
              </div>
              <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl border border-amber-400/30">
                <div className="text-4xl font-bold text-amber-400 mb-4 font-serif">-30%</div>
                <div className="text-gray-300 text-lg">Fuel Consumption</div>
              </div>
              <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl border border-amber-400/30">
                <div className="text-4xl font-bold text-amber-400 mb-4 font-serif">100%</div>
                <div className="text-gray-300 text-lg">Sustainable Aviation Fuel Ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fleet;