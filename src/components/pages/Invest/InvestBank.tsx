//
import { useState } from "react";
import { investBank, withdrawBank } from "../../../services/Invest";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const INTEREST_RATE = 0.07; // 7% annual interest

const calculateMaturityValue = (principal: any, years: any) => {
  return (principal * Math.pow(1 + INTEREST_RATE, years)).toFixed(2);
};

const InvestBank = () => {
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const investHandler = async () => {
    const data = await investBank(parseInt(amount));

    if (data) {
      toast.success("Investment Successful");
      setAmount("0");
      navigate("/home");
    } else {
      toast.error("Investment Failed");
      setAmount("0");
    }
  };

  const withdrawHandler = async () => {
    const data = await withdrawBank(parseInt(amount));

    if (data) {
      alert("Withdraw Successful");
      setAmount("0");
      navigate("/home");
    } else {
      alert("Withdraw Failed");
      setAmount("0");
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-br from-blue-100 to-blue-300 min-h-screen">
      <h2 className="text-xl font-bold mb-4">Invest in Fixed Deposits</h2>

      <div className="w-full max-w-sm p-4 bg-gray-100 rounded-lg shadow-md">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Enter Amount (₹)
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter amount"
        />

        {amount && parseFloat(amount) > 0 && (
          <div className="mt-4 p-3 bg-white rounded-md shadow">
            <h3 className="text-sm font-semibold">Maturity Values:</h3>
            <p className="text-sm">
              1 Year: ₹{calculateMaturityValue(amount, 1)}
            </p>
            <p className="text-sm">
              3 Years: ₹{calculateMaturityValue(amount, 3)}
            </p>
            <p className="text-sm">
              5 Years: ₹{calculateMaturityValue(amount, 5)}
            </p>
          </div>
        )}

        <button
          onClick={investHandler}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Invest Now
        </button>
        <button
          onClick={withdrawHandler}
          className="mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-700 transition"
        >
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default InvestBank;
