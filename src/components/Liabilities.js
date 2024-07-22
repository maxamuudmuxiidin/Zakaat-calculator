import React from 'react';

const Liabilities = ({ debts, setDebts, loans, setLoans }) => {
  return (
    <div className="mb-6">
      {/* Section title for liabilities */}
      <h2 className="text-2xl font-bold mb-4">Liabilities</h2>
      {/* Grid layout for input fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Input field for debts */}
        <input
          type="number"
          placeholder="Debts"
          value={debts}
          onChange={(e) => setDebts(e.target.value)}
          className="border p-2 rounded w-full"
        />
        {/* Input field for loans */}
        <input
          type="number"
          placeholder="Loans"
          value={loans}
          onChange={(e) => setLoans(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>
    </div>
  );
};

export default Liabilities;
