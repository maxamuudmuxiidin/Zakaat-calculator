import React from 'react';

const Income = ({ monthlySalary, setMonthlySalary, otherIncome, setOtherIncome }) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Income</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="number"
          placeholder="Monthly Salary"
          value={monthlySalary}
          onChange={(e) => setMonthlySalary(e.target.value)}
          className="border p-3 rounded w-full"
        />
        <input
          type="number"
          placeholder="Other Income"
          value={otherIncome}
          onChange={(e) => setOtherIncome(e.target.value)}
          className="border p-3 rounded w-full"
        />
      </div>
    </div>
  );
};

export default Income;
