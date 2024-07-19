import React, { useState, useEffect } from 'react';
import './App.css';
import Income from './components/Income';
import Investments from './components/Investments';
import Liabilities from './components/Liabilities';
import ZakatResult from './components/ZakatResult';
import Savings from './components/Savings';


// Assume the value of 85 grams of gold is approximately $5000 (this value should be updated based on current gold prices)
const NISAB_THRESHOLD = 5000;

function App() {
  const [monthlySalary, setMonthlySalary] = useState('');
  const [otherIncome, setOtherIncome] = useState('');
  const [bankSavings, setBankSavings] = useState('');
  const [cashOnHand, setCashOnHand] = useState('');
  const [gold, setGold] = useState('');
  const [silver, setSilver] = useState('');
  const [stocks, setStocks] = useState('');
  const [properties, setProperties] = useState('');
  const [debts, setDebts] = useState('');
  const [loans, setLoans] = useState('');
  const [zakatDue, setZakatDue] = useState(null);
  const [breakdown, setBreakdown] = useState(null);
  const [isEligible, setIsEligible] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const validateFields = () => {
    const isIncomeFilled = monthlySalary || otherIncome;
    const isSavingsFilled = bankSavings || cashOnHand || gold || silver;
    const isInvestmentsFilled = stocks || properties;
    return isIncomeFilled || isSavingsFilled || isInvestmentsFilled;
  };

  useEffect(() => {
    setIsButtonDisabled(!validateFields());
  }, [monthlySalary, otherIncome, bankSavings, cashOnHand, gold, silver, stocks, properties]);

  const calculateZakat = () => {
    const totalIncome = (parseFloat(monthlySalary) || 0) + (parseFloat(otherIncome) || 0);
    const totalSavings = (parseFloat(bankSavings) || 0) + (parseFloat(cashOnHand) || 0) + (parseFloat(gold) || 0) + (parseFloat(silver) || 0);
    const totalInvestments = (parseFloat(stocks) || 0) + (parseFloat(properties) || 0);
    const totalLiabilities = (parseFloat(debts) || 0) + (parseFloat(loans) || 0);

    const zakatBase = totalIncome + totalSavings + totalInvestments - totalLiabilities;

    if (zakatBase >= NISAB_THRESHOLD) {
      const zakat = zakatBase * 0.025;
      setZakatDue(zakat);
      setBreakdown({
        totalIncome,
        totalSavings,
        totalInvestments,
        totalLiabilities,
        zakatBase
      });
      setIsEligible(true);
    } else {
      setIsEligible(false);
    }
  };

  return (
    <div className="min-h-screen bg-customPurple text-customDark flex flex-col items-center p-4">
      <header className="text-3xl font-bold mb-4">Zakat Calculator</header>
      <p className="text-lg mb-8">Calculate your Zakat easily and accurately.</p>
      
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <Income monthlySalary={monthlySalary} setMonthlySalary={setMonthlySalary} otherIncome={otherIncome} setOtherIncome={setOtherIncome} />
        <Savings bankSavings={bankSavings} setBankSavings={setBankSavings} cashOnHand={cashOnHand} setCashOnHand={setCashOnHand} gold={gold} setGold={setGold} silver={silver} setSilver={setSilver} />
        <Investments stocks={stocks} setStocks={setStocks} properties={properties} setProperties={setProperties} />
        <Liabilities debts={debts} setDebts={setDebts} loans={loans} setLoans={setLoans} />
        
        <button
          onClick={calculateZakat}
          className={`w-full bg-customBlue text-white py-2 rounded mt-4 hover:bg-blue-500 transition duration-300 ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isButtonDisabled}
        >
          Calculate
        </button>

        {isButtonDisabled && (
          <div className="mt-4 text-red-600">
            Please fill in at least one field from income, savings, or investments.
          </div>
        )}

        {isEligible !== null && (
          <ZakatResult zakatDue={zakatDue} breakdown={breakdown} isEligible={isEligible} />
        )}
      </div>
    </div>
  );
}

export default App;
