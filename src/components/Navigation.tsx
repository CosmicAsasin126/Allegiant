import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plane, Menu, X, Star } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/fleet', label: 'Fleet' },
    { path: '/destinations', label: 'Destinations' },
    { path: '/reviews', label: 'Reviews' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gray-900 shadow-2xl relative z-50 border-b-2 border-amber-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-3 rounded-full shadow-lg">
              <Plane className="h-8 w-8 text-gray-900" />
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-3xl font-bold text-amber-400 font-serif">Air France</span>
              <Star className="h-4 w-4 text-amber-400 fill-current" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  isActive(item.path)
                    ? 'text-gray-900 bg-amber-400 shadow-lg font-bold'
                    : 'text-amber-100 hover:text-gray-900 hover:bg-amber-400 hover:shadow-lg'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-amber-400 hover:text-amber-300 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-gray-800 shadow-2xl border-t border-amber-400">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-gray-900 bg-amber-400 font-bold'
                      : 'text-amber-100 hover:text-gray-900 hover:bg-amber-400'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;