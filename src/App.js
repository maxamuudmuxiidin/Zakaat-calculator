import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Navigation from './Navigation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-customPurple text-customDark flex flex-col">
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold">Zakat Calculator</h1>
          <Navigation />
        </header>
        <div className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
