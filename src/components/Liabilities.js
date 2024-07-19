import React from 'react';

const Liabilities = ({ debts, setDebts, loans, setLoans }) => {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold">Liabilities:</h2>
      <label className="block mb-2">Debts</label>
      <input
        type="number"
        value={debts}
        onChange={(e) => setDebts(e.target.value)}
        className="w-full p-2 border rounded mb-4 no-arrows"
        placeholder="Optional"
      />
      <label className="block mb-2">Loans</label>
      <input
        type="number"
        value={loans}
        onChange={(e) => setLoans(e.target.value)}
        className="w-full p-2 border rounded mb-4 no-arrows"
        placeholder="Optional"
      />
    </div>
  );
};

export default Liabilities;
