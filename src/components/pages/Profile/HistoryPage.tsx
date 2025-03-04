import React from "react";

type HistoryItem = {
  asset: string;
  transaction_at: string;
  amount: number;
  operation: string;
};

interface HistoryPageProps {
  historyData: HistoryItem[];
}

const HistoryPage: React.FC<HistoryPageProps> = ({ historyData }) => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Transaction History
      </h1>

      {historyData.length === 0 ? (
        <p className="text-center text-gray-500">No transactions found.</p>
      ) : (
        <div className="space-y-4">
          {historyData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg flex justify-between items-center"
            >
              <div className="flex flex-col">
                <p className="font-medium">{item.asset}</p>
                <p className="text-sm text-gray-500">
                  {new Date(item.transaction_at).toLocaleString()}
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium">{item.operation}</p>
                <p className="text-sm text-gray-700">
                  Rs {item.amount.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HistoryPage;
