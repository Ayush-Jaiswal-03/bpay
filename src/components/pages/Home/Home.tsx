import { useNavigate } from "react-router-dom";

interface HomePageProps {
  data: {
    fd_amt: number;
    mutual_fund_amt: number;
    gold_amt: number;
  };
}

interface Stat {
  id: number;
  name: string;
  value: number;
  link: string;
}

const PortfolioCard: React.FC<{
  stats: Stat[];
  totalValue: number;
  investHandler: () => void;
}> = ({ stats, totalValue, investHandler }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col justify-center items-center text-gray-800 md:rounded-3xl">
      {/* Total Portfolio Value */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold">Total Portfolio Value</h2>
        <p className="text-2xl font-bold text-blue-500 mt-2">
          Rs. {totalValue}
        </p>
      </div>

      {/* Stats Section */}
      <div className="mt-6 flex flex-col w-full max-w-sm items-center gap-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white/50 p-5 rounded-xl shadow-md text-center w-full 
            transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-white/30 backdrop-blur-lg"
          >
            <h3 className="text-xl font-medium">{stat.name}</h3>
            <p className="text-2xl font-bold text-blue-500 mt-1">
              Rs.{stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Buttons Section */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={investHandler}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-800 transition-all duration-300 transform hover:scale-105"
        >
          Invest/ Withdraw
        </button>
      </div>

      {/* Help Button */}
      <div className="mt-6">
        <button
          onClick={() => (window.location.href = "/helpme")}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-large rounded-lg text-md px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Help Me Invest
        </button>
      </div>
    </div>
  );
};

const HomePage: React.FC<HomePageProps> = ({ data }) => {
  const navigate = useNavigate();

  const stats: Stat[] = [
    {
      id: 1,
      name: "Fixed Deposits",
      value: data.fd_amt,
      link: "/invest/fixed-deposits",
    },
    { id: 2, name: "Gold", value: data.gold_amt, link: "/invest/gold" },
    {
      id: 3,
      name: "Mutual Funds",
      value: data.mutual_fund_amt,
      link: "/invest/mutual-funds",
    },
  ];
  const total_value = data.fd_amt + data.gold_amt + data.mutual_fund_amt;

  const investHandler = () => {
    navigate("/invest");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-200">
      <PortfolioCard
        stats={stats}
        totalValue={total_value}
        investHandler={investHandler}
      />
    </div>
  );
};

export default HomePage;
