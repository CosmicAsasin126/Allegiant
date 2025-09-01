import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage';
import Fleet from './pages/Fleet';
import Destinations from './pages/Destinations';
import Reviews from './pages/Reviews';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;