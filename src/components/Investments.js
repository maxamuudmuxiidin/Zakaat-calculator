import React from 'react';

const Investments = ({ stocks, setStocks, properties, setProperties }) => {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold">Investments:</h2>
      <label className="block mb-2">Stocks</label>
      <input
        type="number"
        value={stocks}
        onChange={(e) => setStocks(e.target.value)}
        className="w-full p-2 border rounded mb-4 no-arrows"
        placeholder="Optional"
      />
      <label className="block mb-2">Properties</label>
      <input
        type="number"
        value={properties}
        onChange={(e) => setProperties(e.target.value)}
        className="w-full p-2 border rounded mb-4 no-arrows"
        placeholder="Optional"
      />
    </div>
  );
};

export default Investments;
