import React from "react";
import { Link } from "react-router-dom";

interface BankCardProps {
  bankName: string;
  returns: string;
}

const BankCard: React.FC<BankCardProps> = ({ bankName, returns }) => {
  return (
    <Link
      to={`/invest/bank`}
      className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-500 dark:text-white">
        {bankName}
      </h5>
      <p className="text-sm sm:text-base font-normal text-gray-700 dark:text-gray-400">
        Returns: {returns}
      </p>
    </Link>
  );
};

const banks = [
  { id: "bank1", name: "State Bank of India", returns: "7%" },
  { id: "bank2", name: "HDFC Bank", returns: "6.75%" },
  { id: "bank3", name: "ICICI Bank", returns: "6.8%" },
  { id: "bank4", name: "Axis Bank", returns: "6.6%" },
];

const BankList: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Full-screen gradient background */}
      <div className="bg-gradient-to-br from-blue-100 to-blue-300"></div>

      {/* Content Wrapper */}
      <div className="bg-gradient-to-br from-blue-100 to-blue-300 relative flex justify-center items-center min-h-screen w-full mb-20">
        <div className="w-full max-w-6xl px-4 py-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            Invest in Fixed Deposits
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {banks.map((bank) => (
              <BankCard
                key={bank.id}
                bankName={bank.name}
                returns={bank.returns}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankList;
