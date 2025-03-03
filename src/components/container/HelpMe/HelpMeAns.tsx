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
          //   return;
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

        console.log(resp);
        console.log(response);

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return <HelpMeAnsPage data={data!} />;
};

export default HelpMeAns;

// import React, { useState, useEffect } from "react";
// import { helpMeAnsData } from "../../../services/HelpMe/HelpMeAnsAuth";

// import HelpMeAnsPage from "../../pages/HelpMe/HelpMeAnsPage";

// interface HelpMeDataType {
//   riskLevel: string;
//   monthlyInvestment: string;
//   assetAllocation: {
//     labels: string[];
//     values: number[];
//   };
//   suggestion: string;
// }

// const HelpMeAns: React.FC = () => {
//   const [data, setData] = useState<HelpMeDataType | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("jwt_token");
//         if (!token) {
//           setError("No token found!");
//           setLoading(false);
//           return;
//         }

//         // backend

//         const resp = await helpMeAnsData(token);

//         // frontend

//         const response = {
//             riskLevel: resp.riskLevel,
//             monthlyInvestment: (resp.monthlyInvestment),
//             assetAllocation: {
//               labels: Object.keys(resp.allocation),
//               values: Object.values(resp.allocation)
//             },
//             suggestion: resp.suggestion
//           };

//         // const response = {
//         //   riskLevel: "Medium",
//         //   monthlyInvestment: "20000",
//         //   assetAllocation: {
//         //     labels: ["Fixed Deposit", "Gold", "Mutual Funds"],
//         //     values: [20, 50, 30],
//         //   },
//         //   suggestion: "Consider diversifying into equities for higher growth.",
//         // };

//         setData(response);
//         setLoading(false);
//       } catch (err) {
//         console.error(err);
//         setError("Error fetching data");
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return <HelpMeAnsPage data={data!} />;
// };

// export default HelpMeAns;
