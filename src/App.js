import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Navigation from './Navigation';

function App() {
  return (
    // Router component wraps the entire app, enabling routing functionality
    <Router>
      {/* Main container for the app with custom styles */}
      <div className="min-h-screen bg-customPurple text-customDark flex flex-col">
        {/* Header section with custom styling */}
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
          {/* Title of the app */}
          <h1 className="text-3xl font-bold">Zakat Calculator</h1>
          {/* Navigation component for navigation links */}
          <Navigation />
        </header>
        {/* Main content area with padding */}
        <div className="flex-grow p-4">
          {/* Define routes for different pages */}
          <Routes>
            {/* Route for the Home page */}
            <Route path="/" element={<Home />} />
            {/* Route for the About page */}
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
