import React from 'react';
import { Users, Gauge, MapPin, Star } from 'lucide-react';
import CountUp from '../Extra/CountUp';
//Images
import Logo from '../Images/Logos/Logo.svg'
import A320 from '../Images/Planes/A320Fleet.png'
import B757 from '../Images/Planes/Fleet.png'
const Fleet = () => {
  const aircraft = [
    {
      name: 'Airbus A320',
      type: 'Narrow-body',
      capacity: '180 passengers',
      range: 'Whereever',
      speed: '450',
      image: A320,  
      description: 'A  modern, popular, single-aisle commercial jet airliner manufactured by Airbus',
      vintage: false
    },
    {
      name: 'Boeing 757',
      type: 'Narrow Body',
      capacity: '295 passengers',
      range: 'Whereever',
      speed: '490',
      image: B757,
      description: 'American twin-engine, single-aisle jet airliner designed to replace the Boeing 727',
      vintage: true
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img src = {Logo} className="h-12 w-12 text-amber-400 animate-pulse" />
          </div>
          <h1 className="text-6xl font-bold text-amber-400 mb-8 font-serif">Allegiant's Fleet</h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Discover our fleet which has crossed the seas day on ends, being the most reliable 
            fleet in Project Flight
          </p>
        </div>

        {/* Fleet Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 bg-gradient-to-r from-gray-800 to-gray-700 rounded-3xl p-12 border border-amber-400/20">
          <div className=" text-2xl font-bold text-amber-400 mb-4 font-serif text-center">
            <CountUp
              from={0}
              to={10}
              separator=","
              direction="up"
              duration={1}
             className="count-up-text text-6xl font-bold text-amber-400 mb-4 font-serif"
            />minutes or less 
            <div className="text-gray-300 font-medium text-xl">Turnaround Time</div>
          </div>
          <div className="text-center">
            <CountUp
              from={0}
              to={2}
              separator=","
              direction="up"
              duration={1}
             className="count-up-text text-6xl font-bold text-amber-400 mb-4 font-serif"
            />
            <div className="text-gray-300 font-medium text-xl">Aircraft Types</div>
          </div>
          <div className="text-center text-4xl font-bold text-amber-400 mb-4 font-serif">
              <CountUp
              from={0}
              to={100}
              separator=","
              direction="up"
              duration={1}
             className="count-up-text text-6xl font-bold text-amber-400 mb-4 font-serif"
            />%
            <div className="text-gray-300 font-medium text-xl">Reliability</div>
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
                      <div className="text-sm text-gray-400">Speed(knots)</div>
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
              <img src = {Logo} className="h-16 w-16 text-amber-400 fill-current" />
            </div>
            <h2 className="text-4xl font-bold text-blue-700 mb-8 font-serif">Validation</h2>
            <p className="text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12 font-light">
              Everything recorded in this fleet page is unrealistic and is calculating every plane in the 
              game, Project Flight. 
            </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Fleet;