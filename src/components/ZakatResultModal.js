import React from 'react';

const ZakatResultModal = ({ zakatDue, breakdown, isEligible, closeModal }) => {
  return (
    // Container for the modal, fixed positioning covers the entire viewport with a semi-transparent background
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Modal content container with white background and rounded corners */}
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        {/* Modal title */}
        <h2 className="text-2xl font-bold mb-4">
          {/* Conditional rendering based on eligibility */}
          {isEligible ? 'Zakat Calculation Result' : 'Not Eligible for Zakat'}
        </h2>
        {isEligible ? (
          // If eligible, show the breakdown of the zakat calculation
          <div>
            <p className="mb-2">Total Income: ${breakdown.totalIncome.toFixed(2)}</p>
            <p className="mb-2">Total Savings: ${breakdown.totalSavings.toFixed(2)}</p>
            <p className="mb-2">Total Investments: ${breakdown.totalInvestments.toFixed(2)}</p>
            <p className="mb-2">Total Liabilities: ${breakdown.totalLiabilities.toFixed(2)}</p>
            <p className="mb-2">Zakat Base: ${breakdown.zakatBase.toFixed(2)}</p>
            <p className="mb-2 font-bold">Zakat Due: ${zakatDue.toFixed(2)}</p>
          </div>
        ) : (
          // If not eligible, show a message
          <p>You are not eligible for Zakat as your total wealth does not exceed the Nisab threshold.</p>
        )}
        {/* Close button for the modal */}
        <button
          onClick={closeModal}
          className="w-full bg-red-500 text-white py-2 rounded mt-4 hover:bg-red-600 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ZakatResultModal;
