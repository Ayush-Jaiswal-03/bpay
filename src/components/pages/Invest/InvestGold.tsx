import { useState } from "react";
import { investGold, withdrawGold } from "../../../services/Invest";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const InvestGold = () => {
  const goldPricePerGram = 9000; // Fixed
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const investHandler = async () => {
    // console.log("Investing...");
    const data = await investGold(parseInt(amount));

    if (data) {
      // alert("Investment successful");
      toast.success("Investment Successful");
      setAmount("0");
      navigate("/home");
    } else {
      // alert("Investment failed");
      toast.error("Investment failed");
      setAmount("0");
    }
  };

  const withdrawHandler = async () => {
    const data = await withdrawGold(parseInt(amount));

    if (data) {
      toast.success("Withdraw Successful");
      setAmount("0");
      navigate("/home");
    } else {
      toast.error("Withdraw Failed");
      setAmount("0");
    }
  };

  const goldQuantity = amount
    ? (parseFloat(amount) / goldPricePerGram).toFixed(4)
    : "0";

  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-br from-blue-100 to-blue-300 min-h-screen">
      <h2 className="text-xl font-bold mb-4">Invest in Gold</h2>

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

        <p className="mt-3 text-gray-700">
          Gold Quantity:{" "}
          <span className="font-semibold">{goldQuantity} grams</span>
        </p>

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

export default InvestGold;
