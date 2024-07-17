import React from 'react';

const Income = ({ monthlySalary, setMonthlySalary, otherIncome, setOtherIncome }) => {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold">Income:</h2>
      <label className="block mb-2">Monthly Salary</label>
      <input
        type="number"
        value={monthlySalary}
        onChange={(e) => setMonthlySalary(e.target.value)}
        className="w-full p-2 border rounded mb-4 no-arrows"
        placeholder="Optional"
      />
      <label className="block mb-2">Other Income</label>
      <input
        type="number"
        value={otherIncome}
        onChange={(e) => setOtherIncome(e.target.value)}
        className="w-full p-2 border rounded mb-4 no-arrows"
        placeholder="Optional"
      />
    </div>
  );
};

export default Income;
