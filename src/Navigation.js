import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul className="flex space-x-3">
        <li>
          <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Home</Link>
        </li>
        <li>
          <Link to="/about" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
