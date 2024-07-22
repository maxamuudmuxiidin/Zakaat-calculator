import React from 'react';

const Investments = ({ stocks, setStocks, properties, setProperties }) => {
  return (
    <div className="mb-6">
      {/* Section title for investments */}
      <h2 className="text-2xl font-bold mb-4">Investments</h2>
      {/* Grid layout for input fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Input field for stocks */}
        <input
          type="number"
          placeholder="Stocks"
          value={stocks}
          onChange={(e) => setStocks(e.target.value)}
          className="border p-2 rounded w-full"
        />
        {/* Input field for properties */}
        <input
          type="number"
          placeholder="Properties"
          value={properties}
          onChange={(e) => setProperties(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>
    </div>
  );
};

export default Investments;
