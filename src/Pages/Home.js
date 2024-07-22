import React, { useState, useEffect, useCallback } from 'react';
import Income from '../components/Income';
import Investments from '../components/Investments';
import Liabilities from '../components/Liabilities';
import Savings from '../components/Savings';
import ZakatResultModal from '../components/ZakatResultModal';

const NISAB_THRESHOLD = 5000;

const Home = () => {
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validateFields = useCallback(() => {
    const isIncomeFilled = monthlySalary || otherIncome;
    const isSavingsFilled = bankSavings || cashOnHand || gold || silver;
    const isInvestmentsFilled = stocks || properties;
    return isIncomeFilled || isSavingsFilled || isInvestmentsFilled;
  }, [monthlySalary, otherIncome, bankSavings, cashOnHand, gold, silver, stocks, properties]);

  useEffect(() => {
    setIsButtonDisabled(!validateFields());
  }, [monthlySalary, otherIncome, bankSavings, cashOnHand, gold, silver, stocks, properties, validateFields]);

  const calculateZakat = () => {
    const totalIncome = (parseFloat(monthlySalary) || 0) + (parseFloat(otherIncome) || 0);
    const totalSavings = (parseFloat(bankSavings) || 0) + (parseFloat(cashOnHand) || 0) + (parseFloat(gold) || 0) + (parseFloat(silver) || 0);
    const totalInvestments = (parseFloat(stocks) || 0) + (parseFloat(properties) || 0);
    const totalLiabilities = (parseFloat(debts) || 0) + (parseFloat(loans) || 0);

    const zakatBase = totalIncome + totalSavings + totalInvestments - totalLiabilities;

    if (zakatBase >= NISAB_THRESHOLD) {
      const zakat = zakatBase * 0.025;
      setZakatDue(zakat);
      setBreakdown({ totalIncome, totalSavings, totalInvestments, totalLiabilities, zakatBase });
      setIsEligible(true);
    } else {
      setIsEligible(false);
    }
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col items-center p-4  min-h-screen">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
      <header className="text-2xl text-center font-bold mb-2">Zakat Calculator</header>
      <p className="text-1xl text-center mb-6">Calculate your Zakat easily and accurately.</p>
        <Income 
          monthlySalary={monthlySalary} 
          setMonthlySalary={setMonthlySalary} 
          otherIncome={otherIncome} 
          setOtherIncome={setOtherIncome} 
        />
        <Savings 
          bankSavings={bankSavings} 
          setBankSavings={setBankSavings} 
          cashOnHand={cashOnHand} 
          setCashOnHand={setCashOnHand} 
          gold={gold} 
          setGold={setGold} 
          silver={silver} 
          setSilver={setSilver} 
        />
        <Investments 
          stocks={stocks} 
          setStocks={setStocks} 
          properties={properties} 
          setProperties={setProperties} 
        />
        <Liabilities 
          debts={debts} 
          setDebts={setDebts} 
          loans={loans} 
          setLoans={setLoans} 
        />
        
        <button
          onClick={calculateZakat}
          className={`w-full bg-indigo-500 text-white py-3 rounded mt-4 hover:bg-indigo-600 transition duration-300 ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isButtonDisabled}
        >
          Calculate
        </button>

        {isButtonDisabled && (
          <div className="mt-4 text-red-600">
            Please fill in at least one field from income, savings, or investments.
          </div>
        )}

        {isModalOpen && (
          <ZakatResultModal 
            zakatDue={zakatDue} 
            breakdown={breakdown} 
            isEligible={isEligible}
            closeModal={() => setIsModalOpen(false)} 
          />
        )}
      </div>
    </div>
  );
};

export default Home;
