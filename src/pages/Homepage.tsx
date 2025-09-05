import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Shield, Clock, Award, Star, Sparkles } from 'lucide-react';
//Images
import HomepageImg from '../Images/Planes/Homepage.png'
import Logo from '../Images/Logos/Logo.svg'
//Extra Elements
import SplitText from '../Extra/SplitText';
import CountUp from '../Extra/CountUp';
import TextType from '../Extra/TextType'

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const Homepage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url(${HomepageImg})`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <div className="flex justify-center mb-6">
            <img src = {Logo} className="h-12 w-12 text-amber-400 animate-pulse"   />
          </div>
          <SplitText
            text="Together, We Fly"
            className="h-28 text-6xl md:text-8xl font-semibold mb-8 leading-relaxed  text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <p className="text-2xl md:text-3xl mb-12 leading-relaxed opacity-90 font-light">
            Experience the golden age of aviation with Air France
            <br />
            <span className="text-blue-700">Where every journey is an adventure</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/destinations" 
              className="bg-none text-blue-700 hover:bg-blue-700 hover:text-gray-900 px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group shadow-2xl"
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
          <div className="text-center mb-16 text-amber-400"
          >
             <SplitText
            text="The Allegiant Experience"
            className="text-5xl font-bold mb-6 font-serif"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-light">
              Discover what makes flying with us a timeless experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-2 mb-10">
            <div className="text-center group bg-gray-700 p-8 rounded-2xl hover:bg-gray-600 transition-all duration-300 transform hover:scale-105">
              <div className="bg-none w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl transition-all duration-300">
                <Globe className="h-10 w-10 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-amber-400 mb-4 font-serif">Global Network</h3>
              <p className="text-gray-300 text-lg leading-relaxed">Connect to 200+ destinations worldwide with seamless transfers</p>
            </div>
            
            <div className="text-center group bg-gray-700 p-8 rounded-2xl hover:bg-gray-600 transition-all duration-300 transform hover:scale-105">
              <div className="bg-none w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl transition-all duration-300">
                <Shield className="h-10 w-10 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-amber-400 mb-4 font-serif">Safety First</h3>
              <p className="text-gray-300 text-lg leading-relaxed">Industry-leading safety standards and protocols for your peace of mind</p>
            </div>
            
            <div className="text-center group bg-gray-700 p-8 rounded-2xl hover:bg-gray-600 transition-all duration-300 transform hover:scale-105">
              <div className="bg-none w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl transition-all duration-300">
                <Clock className="h-10 w-10 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-amber-400 mb-4 font-serif">Punctuality</h3>
              <p className="text-gray-300 text-lg leading-relaxed">Reliable schedules and punctual departures to get you there on time</p>
            </div>
            
            <div className="text-center group bg-gray-700 p-8 rounded-2xl hover:bg-gray-600 transition-all duration-300 transform hover:scale-105">
              <div className="bg-none w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl transition-all duration-300">
                <Award className="h-10 w-10 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-amber-400 mb-4 font-serif">Premium Service</h3>
              <p className="text-gray-300 text-lg leading-relaxed">Recognized globally for exceptional customer service and hospitality</p>
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
          <div className="bg-gray-900 count-up-text text-6xl font-bold text-amber-400 mb-4 font-serif p-8 rounded-2xl border border-amber-400/20 hover:border-amber-400/50 transition-all duration-300">
            <CountUp
              from={0}
              to={10}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text text-6xl font-bold text-amber-400 mb-4 font-serif"
            />+
            <div className="text-gray-300 font-medium text-xl">Destinations</div>
          </div>
          <div className="bg-gray-900 count-up-text text-6xl font-bold text-amber-400 mb-4 font-serif p-8 rounded-2xl border border-amber-400/20 hover:border-amber-400/50 transition-all duration-300"> 
            <CountUp
              from={0}
              to={2}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text text-6xl font-bold text-amber-400 mb-4 font-serif"
            />
            <div className="text-gray-300 font-medium text-xl">Aircraft Fleet</div>
          </div>
          <div className="bg-gray-900 count-up-text text-6xl font-bold text-amber-400 mb-4 font-serif p-8 rounded-2xl border border-amber-400/20 hover:border-amber-400/50 transition-all duration-300">
            <CountUp
              from={0}
              to={20}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text text-6xl font-bold text-amber-400 mb-4 font-serif"
            />+
            <div className="text-gray-300 font-medium text-xl">Pilots Flying</div>
          </div>
          <div className="bg-gray-900 count-up-text text-6xl font-bold text-amber-400 mb-4 font-serif p-8 rounded-2xl border border-amber-400/20 hover:border-amber-400/50 transition-all duration-300">
            <CountUp
              from={0}
              to={100}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text text-6xl font-bold text-amber-400 mb-4 font-serif"
            />%
            <div className="text-gray-300 font-medium text-xl">Our Satisfaction</div>
          </div>
        </div>Z
                </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-blue-700 via-blue to-amber-400 text-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="flex justify-center mb-6">
            <img src = {Logo} className="h-16 w-16 text-gray-900 fill-current" />
          </div>
          <h2 className="text-5xl font-bold mb-8 font-serif">Ready for Your Next Adventure?</h2>
          <p className="text-2xl mb-12 font-light">
            Join millions of satisfied travelers who choose Allegiant for their journeys
          </p>
          <Link 
            to="/destinations" 
            className="inline-flex items-center bg-gray-900 hover:bg-black text-blue-700 px-12 py-6 rounded-full font-bold text-2xl transition-all duration-300 transform hover:scale-110 group shadow-2xl"
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