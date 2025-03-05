import React, { useState, useEffect } from "react";
import { helpMeAnsData } from "../../../services/HelpMe/HelpMeAnsAuth";
import HelpMeAnsPage from "../../pages/HelpMe/HelpMeAnsPage";
interface HelpMeDataType {
  riskLevel: string;
  monthlyInvestment: string;
  assetAllocation: {
    labels: string[];
    values: number[];
  };
  suggestion: string;
}
const HelpMeAns: React.FC = () => {
  const [data, setData] = useState<HelpMeDataType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token") || "";
        if (!token) {
          setError("No token found!");
          setLoading(false);
          return;
        }
        // backend
        const resp = await helpMeAnsData(token);
        // frontend
        const response: HelpMeDataType = {
          riskLevel: resp.riskLevel,
          monthlyInvestment: resp.monthlyInvestment,
          assetAllocation: {
            labels: Object.keys(resp.allocation),
            values: Object.values(resp.allocation).map((value) =>
              Number(value)
            ),
          },
          suggestion: resp.suggestion,
        };
        setData(response);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Error fetching data");
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <div className="relative w-16 h-20 md:w-20 md:h-24">
          <div className="absolute bottom-0 left-0 w-2 h-1/2 bg-black transform origin-bottom scale-y-20 animate-bar1"></div>
          <div className="absolute bottom-0 left-4 w-2 h-1/2 bg-black transform origin-bottom scale-y-40 animate-bar2"></div>
          <div className="absolute bottom-0 left-8 w-2 h-1/2 bg-black transform origin-bottom scale-y-60 animate-bar3"></div>
          <div className="absolute bottom-0 left-12 w-2 h-1/2 bg-black transform origin-bottom scale-y-80 animate-bar4"></div>
          <div className="absolute bottom-0 left-16 w-2 h-1/2 bg-black transform origin-bottom scale-y-100 animate-bar5"></div>
          <div className="absolute bottom-2 left-0 w-2.5 h-2.5 bg-blue-500 rounded-full animate-ball"></div>
        </div>
      </div>
    );
  }
  if (error) return <div>{error}</div>;
  return <HelpMeAnsPage data={data!} />;
};
export default HelpMeAns;
