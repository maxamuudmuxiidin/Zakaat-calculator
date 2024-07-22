import React from 'react';

const ZakatResultModal = ({ zakatDue, breakdown, isEligible, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">{isEligible ? 'Zakat Calculation Result' : 'Not Eligible for Zakat'}</h2>
        {isEligible ? (
          <div>
            <p className="mb-2">Total Income: ${breakdown.totalIncome.toFixed(2)}</p>
            <p className="mb-2">Total Savings: ${breakdown.totalSavings.toFixed(2)}</p>
            <p className="mb-2">Total Investments: ${breakdown.totalInvestments.toFixed(2)}</p>
            <p className="mb-2">Total Liabilities: ${breakdown.totalLiabilities.toFixed(2)}</p>
            <p className="mb-2">Zakat Base: ${breakdown.zakatBase.toFixed(2)}</p>
            <p className="mb-2 font-bold">Zakat Due: ${zakatDue.toFixed(2)}</p>
          </div>
        ) : (
          <p>You are not eligible for Zakat as your total wealth does not exceed the Nisab threshold.</p>
        )}
        <button onClick={closeModal} className="w-full bg-red-500 text-white py-2 rounded mt-4 hover:bg-red-600 transition duration-300">
          Close
        </button>
      </div>
    </div>
  );
};

export default ZakatResultModal;
