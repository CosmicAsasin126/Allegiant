import React from 'react';
import GradientText from '../Extra/GradientText';
import { MapPin, Clock, Plane, Star, Compass } from 'lucide-react';
//Images
import Logo from '../Images/Logos/Logo.svg'
import Haiti from '../Images/Destinations/Haiti.svg'
import UK from '../Images/Destinations/UK.svg'
import Finland from '../Images/Destinations/Finland.svg'
import Spain from '../Images/Destinations/Spain.svg'
import Cyprus from '../Images/Destinations/Cyprus.svg'
import Santo from '../Images/Destinations/Dominican Republic.svg'
//Aerodromes
import Dominican from '../Images/Aerodromes/PuntaCana.png'
import Menorca from '../Images/Aerodromes/Menorca.png'
import GranCanaria from '../Images/Aerodromes/GranCanaria.png'
import Larnaka from '../Images/Aerodromes/Larnaca.png'
import Kittila from '../Images/Aerodromes/Kittila.png'
import Southampton from '../Images/Aerodromes/Southampton.png'
import Paphos from '../Images/Aerodromes/Paphos.png'
import Gatwick from '../Images/Aerodromes/Gatwick.png'
import Cibao from '../Images/Aerodromes/Cibao.png'
import Simon from '../Images/Aerodromes/AntoineSimon.png'

const Destinations = () => {
  const popularDestinations = [
    {
      city: 'Punta Cana',
      country: 'Dominican Republic',
      image: Dominican,
      flights: 'Multiple daily',
      duration: 'Hub City',
      description: 'Punta Cana International Airport(MDPC) is a privately owned commercial airport in Punta Cana, eastern Dominican Republic.'
    },
    {
      city: 'Cibao International Airport',
      country: 'Dominican Republic',
      image: Cibao,
      flights: 'Regularly',
      duration: 'Small Airport',
      description: ' Cibao International Airport(MDST) also known as Santiago Airport, is located in Santiago de los Caballeros.'
    },
    {
      city: 'Antoine Simon Airport',
      country: 'Haiti',
      image: Simon,
      flights: '1 monthly',
      duration: 'Non-regular Airport',
      description: 'Antoine Simon Airport(MTCA) is a commercial international airport in Haiti. Not a regular airport.'
    },
    {
      city: 'Larnaka International Airport',
      country: 'Cyprus',
      image: Larnaka,
      flights: 'Multiple daily',
      duration: 'Large Airport',
      description: 'Larnaca International Airport(LCLK) is an international airport southwest of Larnaca, Cyprus.'
    },
    {
      city: 'Paphos International Airport',
      country: 'Cyprus',
      image: Paphos,
      flights: 'Regularly flights',
      duration: 'Medium Airport',
      description: 'Paphos International Airport(LCPH) is a joint civil-military public airport of the city of Paphos on the Mediterranean island of Cyprus.'
    },
    { 
      city: 'Gran Canaria Airport',
      country: 'Spain',
      image: GranCanaria,
      flights: 'Regularly flights',
      duration: 'Large Airport',
      description: 'Gran Canaria Airport(GCLP) is a passenger and freight airport on the island of Gran Canaria, Spain. This airport is the best for our connecting flights '

    },
    {
      city: 'Menorca Airport',
      country: 'Spain',
      image: Menorca,
      flights: 'Regularly flights',
      duration: 'Medium Airport',
      description: 'Menorca Airport(LEMH) also known as Mahón Menorca Airport is an international airport serving the island of Menorca.'
    },
    {
      city: 'London Gatwick Airport',
      country: 'United Kingdom',
      image: Gatwick,
      flights: 'Multiple Daily',
      duration: 'Large Airport',
      description: 'London Gatwick Airport(EGKK) also known as Gatwick Airport, is the secondary international airport serving London, Sussex and Surrey.'
    },
    {
      city: 'Southampton Airport',
      country: 'United Kingdom',
      image: Southampton,
      flights: 'Non-regular flights',
      duration: 'Small Airport',
      description: 'Southampton Airport(EGHI) is an international airport located in both Eastleigh and Southampton, Hampshire, in England.'
    },
    {
      city: 'Kittilä Airport',
      country: 'Finland',
      image: Kittila,
      flights: 'Regular Flights',
      duration: 'Small Airport',
      description: 'Kittilä Airport(EFKT) is a Finnish airport located in Kittilä inside the Arctic Circle.'
    }
  ];

  const regions = [
    { name: 'United Kingdom', destinations: 2, image : UK,  },
    { name: 'Dominican Republic', destinations: 2, image: Santo },
    { name: 'Cyprus', destinations: 2, image: Cyprus },
    { name: 'Finland', destinations: 1,  image: Finland },
    { name: 'Spain', destinations: 2, image: Spain },
    { name: 'Haiti', destinations: 1, image: Haiti }
  ];


  return (
    <div className="min-h-screen py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">   
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img src={Logo} className="h-6 w-6 text-amber-400 rounded-full fill-current" alt="Logo" />
          </div>
          <h1 className="text-6xl font-bold text-amber-400 mb-8 font-serif">Destinations Await</h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            From the Carribean Santo Damingo to the Historic United Kingdom, discover Project Flight's world of creativity.
            Every destination that we offer for our pilots is quite diverse in nature, and plentiful.
          </p>
        </div>

        {/* Global Network Stats */}
        <div className="grid md:grid-cols-6 gap-6 mb-20">
          {regions.map((region, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-8 shadow-2xl text-center hover:shadow-amber-400/20 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-amber-400/50">
              <div className={`w-12 h-12 rounded-full mx-auto mb-4 shadow-lg`}>
                <img src={region.image} alt={region.name} className="w-full h-full object-cover rounded-full" />
              </div>
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
            <GradientText
              colors={["#FBCE21", "#02569B", "#FBCE21", "#FBCE21"]}
              animationSpeed={1}
              showBorder={false}
              className="custom-class text-4xl text-amber-400 mb-4 font-bold"
            >
              Traveler's Favourite
            </GradientText>
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
                      <div className="text-xl font-bold text-amber-400 font-serif"></div>
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
                  
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
  );
};

export default Destinations;