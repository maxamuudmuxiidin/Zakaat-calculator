import React from 'react';

const Savings = ({ bankSavings, setBankSavings, cashOnHand, setCashOnHand, gold, setGold, silver, setSilver }) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-4">Savings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="number"
          placeholder="Bank Savings"
          value={bankSavings}
          onChange={(e) => setBankSavings(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Cash on Hand"
          value={cashOnHand}
          onChange={(e) => setCashOnHand(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Gold"
          value={gold}
          onChange={(e) => setGold(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Silver"
          value={silver}
          onChange={(e) => setSilver(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>
    </div>
  );
};

export default Savings;
