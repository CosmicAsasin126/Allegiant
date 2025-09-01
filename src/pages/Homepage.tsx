import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Shield, Clock, Award, Star, Sparkles } from 'lucide-react';

const Homepage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <div className="flex justify-center mb-6">
            <Sparkles className="h-12 w-12 text-amber-400 animate-pulse" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight font-serif">
            Fly with <span className="text-amber-400 drop-shadow-lg">Style</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-12 leading-relaxed opacity-90 font-light">
            Experience the golden age of aviation with Air France
            <br />
            <span className="text-amber-300">Where every journey is an adventure</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/destinations" 
              className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-gray-900 px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group shadow-2xl"
            >
              Start Your Adventure
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link 
              to="/fleet" 
              className="border-3 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-gray-900 px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-110 shadow-2xl"
            >
              Discover Our Aircraft
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-amber-400 mb-6 font-serif">The Air France Experience</h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-light">
              Discover what makes flying with us a timeless experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="text-center group bg-gray-700 p-8 rounded-2xl hover:bg-gray-600 transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-r from-amber-400 to-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl transition-all duration-300">
                <Globe className="h-10 w-10 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-amber-400 mb-4 font-serif">Global Network</h3>
              <p className="text-gray-300 text-lg leading-relaxed">Connect to 200+ destinations worldwide with seamless transfers</p>
            </div>
            
            <div className="text-center group bg-gray-700 p-8 rounded-2xl hover:bg-gray-600 transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-r from-amber-400 to-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl transition-all duration-300">
                <Shield className="h-10 w-10 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-amber-400 mb-4 font-serif">Safety First</h3>
              <p className="text-gray-300 text-lg leading-relaxed">Industry-leading safety standards and protocols for your peace of mind</p>
            </div>
            
            <div className="text-center group bg-gray-700 p-8 rounded-2xl hover:bg-gray-600 transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-r from-amber-400 to-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl transition-all duration-300">
                <Clock className="h-10 w-10 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-amber-400 mb-4 font-serif">Punctuality</h3>
              <p className="text-gray-300 text-lg leading-relaxed">Reliable schedules and punctual departures to get you there on time</p>
            </div>
            
            <div className="text-center group bg-gray-700 p-8 rounded-2xl hover:bg-gray-600 transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-r from-amber-400 to-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl transition-all duration-300">
                <Award className="h-10 w-10 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-amber-400 mb-4 font-serif">Premium Service</h3>
              <p className="text-gray-300 text-lg leading-relaxed">Recognized globally for exceptional customer service and hospitality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-400 mb-4 font-serif">Our Legacy in Numbers</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div className="bg-gray-800 p-8 rounded-2xl border border-amber-400/20 hover:border-amber-400/50 transition-all duration-300">
              <div className="text-6xl font-bold text-amber-400 mb-4 font-serif">200+</div>
              <div className="text-gray-300 font-medium text-xl">Destinations</div>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl border border-amber-400/20 hover:border-amber-400/50 transition-all duration-300">
              <div className="text-6xl font-bold text-amber-400 mb-4 font-serif">300+</div>
              <div className="text-gray-300 font-medium text-xl">Aircraft Fleet</div>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl border border-amber-400/20 hover:border-amber-400/50 transition-all duration-300">
              <div className="text-6xl font-bold text-amber-400 mb-4 font-serif">50M+</div>
              <div className="text-gray-300 font-medium text-xl">Passengers Annually</div>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl border border-amber-400/20 hover:border-amber-400/50 transition-all duration-300">
              <div className="text-6xl font-bold text-amber-400 mb-4 font-serif">95%</div>
              <div className="text-gray-300 font-medium text-xl">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-amber-400 via-orange-500 to-red-600 text-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="flex justify-center mb-6">
            <Star className="h-16 w-16 text-gray-900 fill-current" />
          </div>
          <h2 className="text-5xl font-bold mb-8 font-serif">Ready for Your Next Adventure?</h2>
          <p className="text-2xl mb-12 font-light">
            Join millions of satisfied travelers who choose Air France for their journeys
          </p>
          <Link 
            to="/destinations" 
            className="inline-flex items-center bg-gray-900 hover:bg-black text-amber-400 px-12 py-6 rounded-full font-bold text-2xl transition-all duration-300 transform hover:scale-110 group shadow-2xl"
          >
            Begin Your Journey
            <ArrowRight className="ml-4 h-8 w-8 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Homepage;