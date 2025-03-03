import React from "react";
import PieChart from "../../molecules/PieChart";
import graph from "../../../assets/graph.png";
import { useNavigate } from "react-router-dom";

interface HelpMeDataType {
  riskLevel: string;
  monthlyInvestment: string;
  assetAllocation: {
    labels: string[];
    values: number[];
  };
  suggestion: string;
}

interface HelpMePageProps {
  data: HelpMeDataType;
}

const HelpMeAnsPage: React.FC<HelpMePageProps> = ({ data }) => {
  const navigate = useNavigate();

  const monthlyInvestment = parseInt(data.monthlyInvestment);

  return (
    <div className="w-full h-auto">
      <div className="flex flex-col justify-center items-center p-4 space-y-6 gap-10">
        <div className="flex justify-center items-center bg-blue-900 text-xl font-bold h-12 w-full rounded-2xl mt-8.5">
          <h1 className="text-white font-bold text-xl flex flex-col justify-between items-center p-4 space-y-6">
            Your Personalized Investment Strategy
          </h1>
        </div>

        <div className="flex flex-row justify-between items-center bg-blue-200 h-fit w-full rounded-2xl p-4">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-xl font-semibold">Risk Level</h2>
            <p>{data.riskLevel}</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <h2 className="text-xl font-semibold">Total Monthly Investment</h2>
            <p>Rs {data.monthlyInvestment}</p>
          </div>
        </div>

        <div className="flex flex-row justify-between items-start bg-blue-200 h-fit w-full rounded-2xl p-4">
          <div className="flex flex-col justify-center items-center w-1/2">
            <h2 className="text-xl font-semibold mb-4">
              Optimal Portfolio Allocation
            </h2>
            <div className="w-full max-w-xs h-64">
              <PieChart pieData={data.assetAllocation} />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center w-1/2 space-y-4">
            <div className="flex flex-col space-y-4 w-full gap-7 mt-18">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full cursor-pointer"
                onClick={() => navigate("/invest/gold")}
              >
                Invest in Gold (Rs{" "}
                {(
                  (data.assetAllocation.values[0] / 100) *
                  monthlyInvestment
                ).toFixed(1)}
                )
              </button>

              <button
                className="bg-pink-500 text-white py-2 px-4 rounded-lg w-full cursor-pointer"
                onClick={() => navigate("/invest/fixed-deposits")}
              >
                Invest in FD (Rs{" "}
                {(
                  (data.assetAllocation.values[1] / 100) *
                  monthlyInvestment
                ).toFixed(1)}
                )
              </button>

              <button
                className="bg-yellow-500 text-white py-2 px-4 rounded-lg w-full cursor-pointer"
                onClick={() => navigate("/invest/mutual-funds")}
              >
                Invest in MF (Rs{" "}
                {(
                  (data.assetAllocation.values[2] / 100) *
                  monthlyInvestment
                ).toFixed(1)}
                )
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-5">
          <h2 className="text-xl font-semibold">
            Long-Term Growth of Investment Portfolios
          </h2>
          <img
            src={graph}
            alt="Asset Image 1"
            className="w-150 h-auto object-cover"
          />
        </div>

        <div className="border p-4 bg-blue-200 h-fit w-full rounded-2xl">
          <h3 className="text-lg font-semibold">Suggestions</h3>
          <p>{data.suggestion}</p>
        </div>

        <div className="flex justify-center">
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
            onClick={() => navigate("/helpme")}
          >
            Edit Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpMeAnsPage;
