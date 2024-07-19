import React from 'react';

const Savings = ({ bankSavings, setBankSavings, cashOnHand, setCashOnHand, gold, setGold, silver, setSilver }) => {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold">Savings:</h2>
      <label className="block mb-2">Bank Savings</label>
      <input
        type="number"
        value={bankSavings}
        onChange={(e) => setBankSavings(e.target.value)}
        className="w-full p-2 border rounded mb-4 no-arrows"
        placeholder="Optional"
      />
      <label className="block mb-2">Cash on Hand</label>
      <input
        type="number"
        value={cashOnHand}
        onChange={(e) => setCashOnHand(e.target.value)}
        className="w-full p-2 border rounded mb-4 no-arrows"
        placeholder="Optional"
      />
      <label className="block mb-2">Gold</label>
      <input
        type="number"
        value={gold}
        onChange={(e) => setGold(e.target.value)}
        className="w-full p-2 border rounded mb-4 no-arrows"
        placeholder="Optional"
      />
      <label className="block mb-2">Silver</label>
      <input
        type="number"
        value={silver}
        onChange={(e) => setSilver(e.target.value)}
        className="w-full p-2 border rounded no-arrows"
        placeholder="Optional"
      />
    </div>
  );
};

export default Savings;
