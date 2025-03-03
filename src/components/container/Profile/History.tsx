import React, { useEffect, useState } from "react";
import { transactionData } from "../../../services/Profile/HistoryAuth";
import HistoryPage from "../../pages/Profile/HistoryPage";

type HistoryItem = {
  asset: string;
  transaction_at: string;
  amount: number;
  operation: string;
};

const History: React.FC = () => {
  const [historyData, setHistoryData] = useState<HistoryItem[]>([]);
  //   const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await transactionData();
        setHistoryData(data);
      } catch (err) {
        setError("Failed to fetch transaction history");
      }
      //   finally {
      //     setLoading(false);
      //   }
    };

    loadData();
  }, []);

  //   if (loading) {
  //     return <div className="text-center text-xl">Loading...</div>;
  //   }

  if (error) {
    return <div className="text-center text-xl text-red-500">{error}</div>;
  }

  return <HistoryPage historyData={historyData} />;
};

export default History;
