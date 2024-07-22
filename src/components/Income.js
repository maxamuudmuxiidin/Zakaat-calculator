import React from 'react';

// The Income component allows the user to input their monthly salary and other income
const Income = ({ monthlySalary, setMonthlySalary, otherIncome, setOtherIncome }) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Income</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Input field for Monthly Salary */}
        <input
          type="number"
          placeholder="Monthly Salary"
          value={monthlySalary}
          onChange={(e) => setMonthlySalary(e.target.value)}
          className="border p-3 rounded w-full"
        />
        {/* Input field for Other Income */}
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
