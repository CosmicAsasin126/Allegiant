import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plane } from 'lucide-react';
//Images
import Logo from '../Images/Logos/WhiteText.svg'

interface LayoutProps {
  children: React.ReactNode;
}

const Navigation: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Fleet', path: '/fleet' },
    { name: 'Destinations', path: '/destinations' },
  ];

  return (
<div>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-center pt-2">
          <div className="flex items-center bg-slate-900/90 backdrop-blur-md rounded-full px-8 py-4 border border-slate-700/50 shadow-2xl">
            <Link to="/" className="flex items-center space-x-3 group mr-8">
              <div className="w-32 h-8  rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                <img src = {Logo} className="w-32 h-32 text-white" />
              </div>
            </Link>
            
            <nav className="flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-700 text-white shadow-lg'
                        : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Navigation;