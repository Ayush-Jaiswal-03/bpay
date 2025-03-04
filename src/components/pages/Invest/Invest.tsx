// import Stats from "../../components/Stats";
// import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

interface Stat {
  id: number;
  name: string;
  return: string;
  link: string;
}
const stats: Stat[] = [
  {
    id: 1,
    name: "Fixed Deposits",
    return: "7%",
    link: "/invest/fixed-deposits",
  },
  { id: 2, name: "Gold", return: "16%", link: "/invest/gold" },
  {
    id: 3,
    name: "Mutual Funds",
    return: "21%",
    link: "/invest/mutual-funds",
  },
];
const InvestPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="top-0 left-0 w-full min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col justify-center items-center text-gray-800 md:rounded-3xl pb-30">
      {/* Container */}
      <div className="w-full max-w-4xl px-6">
        {/* Header */}
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
          Investment Options
        </h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white/50 p-6 rounded-2xl shadow-lg text-center border border-white/30 backdrop-blur-lg 
              transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-black-700 mb-2">
                {stat.name}
              </h3>

              {/* Expected Returns */}
              <div className="flex flex-col items-center justify-center">
                <span className="text-lg font-medium text-gray-600">
                  Expected Returns:
                </span>
                <p className="text-2xl font-bold text-blue-600 mt-1">
                  {stat.return}
                </p>
              </div>

              {/* Invest Button */}
              <button
                onClick={() => navigate(stat.link)}
                className="mt-5 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Invest Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestPage;
