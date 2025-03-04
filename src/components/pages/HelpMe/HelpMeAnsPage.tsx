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
    <div className="w-full h-auto flex justify-center">
      <div className="w-full max-w-3xl">
        <div className="flex flex-col justify-center items-center p-4 space-y-6 gap-8">
          <div className="flex justify-center items-center bg-blue-900 text-white text-lg sm:text-2xl font-bold h-24 w-full rounded-2xl mt-8">
            <h1 className="text-white font-bold text-2xl sm:text-3xl flex flex-col justify-center items-center p-4">
              Your Personalized Investment Strategy
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center bg-blue-200 h-fit w-full rounded-2xl p-4 gap-4 sm:gap-12">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-lg sm:text-xl font-semibold">Risk Level</h2>
              <p className="text-sm sm:text-base">{data.riskLevel}</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-lg sm:text-xl font-semibold">
                Total Monthly Investment
              </h2>
              <p className="text-sm sm:text-base">
                Rs {data.monthlyInvestment}
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-blue-200 h-fit w-full rounded-2xl p-4">
            <div className="flex flex-col justify-center items-center w-full h-fit sm:w-1/2 mb-6 sm:mb-0 md:ml-45">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">
                Optimal Portfolio Allocation
              </h2>
              <div className="flex justify-center items-center mx-auto">
                <PieChart pieData={data.assetAllocation} />
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4 w-full gap-4 mt-4 sm:mt-0">
                <button
                  className="bg-blue-900 text-white py-2 px-4 rounded-lg flex items-center justify-between w-full"
                  onClick={() => navigate("/invest/gold")}
                >
                  <span>
                    Invest in Gold Rs{" "}
                    {(
                      (data.assetAllocation.values[0] / 100) *
                      monthlyInvestment
                    ).toFixed(1)}
                  </span>
                  <span className="ml-2 text-white">Click Here</span>
                </button>
                <button
                  className="bg-blue-900 text-white py-2 px-4 rounded-lg flex items-center justify-between w-full"
                  onClick={() => navigate("/invest/fixed-deposits")}
                >
                  <span>
                    Invest in FD Rs{" "}
                    {(
                      (data.assetAllocation.values[1] / 100) *
                      monthlyInvestment
                    ).toFixed(1)}
                  </span>
                  <span className="ml-2 text-white">Click Here</span>
                </button>
                <button
                  className="bg-blue-900 text-white py-2 px-4 rounded-lg flex items-center justify-between w-full"
                  onClick={() => navigate("/invest/mutual-funds")}
                >
                  <span>
                    Invest in MF Rs{" "}
                    {(
                      (data.assetAllocation.values[2] / 100) *
                      monthlyInvestment
                    ).toFixed(1)}
                  </span>
                  <span className="ml-2 text-white">Click Here</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-5">
            <h2 className="text-lg sm:text-xl font-semibold">
              Long-Term Growth of Investment Portfolios
            </h2>
            <img
              src={graph}
              alt="Asset Image 1"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="border p-4 bg-blue-200 h-fit w-full rounded-2xl">
            <h3 className="text-lg font-semibold">Suggestions</h3>
            <p className="text-sm sm:text-base">{data.suggestion}</p>
          </div>
          <div className="flex justify-center mt-6">
            <button
              className="bg-blue-900 text-white py-2 px-4 rounded-lg"
              onClick={() => navigate("/helpme")}
            >
              Edit Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HelpMeAnsPage;
