import React from 'react';
import { MapPin, Clock, Plane, Star, Compass, Globe } from 'lucide-react';

const Destinations = () => {
  const popularDestinations = [
    {
      city: 'Paris',
      country: 'France',
      image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=800',
      flights: 'Multiple daily',
      duration: 'Hub City',
      price: 'From €299',
      description: 'Experience the City of Light with its iconic landmarks and world-class cuisine.'
    },
    {
      city: 'New York',
      country: 'United States',
      image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800',
      flights: '4 daily',
      duration: '8h 15m',
      price: 'From €899',
      description: 'The city that never sleeps awaits with Broadway shows and world-famous attractions.'
    },
    {
      city: 'Tokyo',
      country: 'Japan',
      image: 'https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=800',
      flights: '2 daily',
      duration: '12h 30m',
      price: 'From €1,299',
      description: 'Discover the perfect blend of ancient traditions and cutting-edge technology.'
    },
    {
      city: 'London',
      country: 'United Kingdom',
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800',
      flights: '6 daily',
      duration: '1h 25m',
      price: 'From €199',
      description: 'Explore royal palaces, world-class museums, and vibrant neighborhoods.'
    },
    {
      city: 'Dubai',
      country: 'UAE',
      image: 'https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg?auto=compress&cs=tinysrgb&w=800',
      flights: '2 daily',
      duration: '7h 00m',
      price: 'From €699',
      description: 'Experience luxury shopping, stunning architecture, and desert adventures.'
    },
    {
      city: 'Rome',
      country: 'Italy',
      image: 'https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=800',
      flights: '3 daily',
      duration: '2h 10m',
      price: 'From €249',
      description: 'Walk through history in the Eternal City with its ancient ruins and Vatican treasures.'
    }
  ];

  const regions = [
    { name: 'Europe', destinations: 85, color: 'bg-gradient-to-r from-amber-400 to-orange-500' },
    { name: 'North America', destinations: 35, color: 'bg-gradient-to-r from-amber-400 to-orange-500' },
    { name: 'Asia Pacific', destinations: 42, color: 'bg-gradient-to-r from-amber-400 to-orange-500' },
    { name: 'Africa', destinations: 28, color: 'bg-gradient-to-r from-amber-400 to-orange-500' },
    { name: 'South America', destinations: 15, color: 'bg-gradient-to-r from-amber-400 to-orange-500' },
    { name: 'Middle East', destinations: 12, color: 'bg-gradient-to-r from-amber-400 to-orange-500' }
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Globe className="h-12 w-12 text-amber-400 animate-spin" style={{ animationDuration: '20s' }} />
          </div>
          <h1 className="text-6xl font-bold text-amber-400 mb-8 font-serif">Destinations Await</h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            From the romantic streets of Paris to the neon lights of Tokyo, discover a world of possibilities. 
            Every destination tells a story, and we're here to help you write yours.
          </p>
        </div>

        {/* Global Network Stats */}
        <div className="grid md:grid-cols-6 gap-6 mb-20">
          {regions.map((region, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-8 shadow-2xl text-center hover:shadow-amber-400/20 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-amber-400/50">
              <div className={`w-12 h-12 ${region.color} rounded-full mx-auto mb-4 shadow-lg`}></div>
              <h3 className="font-bold text-amber-400 mb-2 text-lg font-serif">{region.name}</h3>
              <p className="text-3xl font-bold text-amber-400 font-serif">{region.destinations}</p>
              <p className="text-sm text-gray-400">destinations</p>
            </div>
          ))}
        </div>

        {/* Popular Destinations */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Compass className="h-10 w-10 text-amber-400" />
            </div>
            <h2 className="text-4xl font-bold text-amber-400 mb-4 font-serif">Traveler Favorites</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-10">
            {popularDestinations.map((destination, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden hover:shadow-amber-400/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-700 hover:border-amber-400/50">
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={destination.image} 
                    alt={destination.city}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4">
                    <Star className="h-6 w-6 text-amber-400 fill-current" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-20"></div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-amber-400 font-serif">{destination.city}</h3>
                      <p className="text-gray-400 text-lg">{destination.country}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-amber-400 font-serif">{destination.price}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed font-light">{destination.description}</p>
                  
                  <div className="flex justify-between items-center text-sm text-gray-400 mb-6">
                    <div className="flex items-center space-x-2 bg-gray-700 px-3 py-2 rounded-full">
                      <Plane className="h-4 w-4 text-amber-400" />
                      <span>{destination.flights}</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-gray-700 px-3 py-2 rounded-full">
                      <Clock className="h-4 w-4 text-amber-400" />
                      <span>{destination.duration}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-gray-900 py-4 px-6 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Book Your Adventure
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search Section */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl p-12 lg:p-16 text-white border border-amber-400/20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <MapPin className="h-16 w-16 text-amber-400" />
            </div>
            <h2 className="text-4xl font-bold mb-8 text-amber-400 font-serif">Where Will Your Story Begin?</h2>
            <p className="text-2xl mb-12 text-gray-300 font-light">
              Can't find your dream destination? Search through our complete network of possibilities.
            </p>
            
            <div className="bg-gray-900 rounded-2xl p-3 flex flex-col md:flex-row gap-3 max-w-3xl mx-auto border border-amber-400/30">
              <input 
                type="text" 
                placeholder="Where would you like to go?"
                className="flex-1 px-6 py-4 text-amber-400 bg-transparent focus:outline-none text-lg placeholder-gray-500"
              />
              <button className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-gray-900 px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105">
                <MapPin className="h-5 w-5" />
                <span>Discover Flights</span>
              </button>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <span className="text-amber-300 text-lg font-medium">Popular searches:</span>
              {['Barcelona', 'Amsterdam', 'Bangkok', 'São Paulo', 'Montreal'].map((city) => (
                <button key={city} className="text-gray-300 hover:text-amber-400 underline transition-colors duration-300 text-lg font-light">
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">
          <div className="text-center bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-amber-400/50 transition-all duration-300">
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <MapPin className="h-10 w-10 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-amber-400 mb-4 font-serif">Global Network</h3>
            <p className="text-gray-300 text-lg leading-relaxed">Access to 200+ destinations with convenient connections through our Paris hub</p>
          </div>
          
          <div className="text-center bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-amber-400/50 transition-all duration-300">
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Clock className="h-10 w-10 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-amber-400 mb-4 font-serif">Flexible Booking</h3>
            <p className="text-gray-300 text-lg leading-relaxed">Easy changes and cancellations with our flexible fare options</p>
          </div>
          
          <div className="text-center bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-amber-400/50 transition-all duration-300">
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Plane className="h-10 w-10 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-amber-400 mb-4 font-serif">Premium Service</h3>
            <p className="text-gray-300 text-lg leading-relaxed">Enjoy French hospitality and premium amenities on every flight</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;