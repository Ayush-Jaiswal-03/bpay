import { useNavigate } from "react-router-dom";

interface PortfolioPageProps {
  data: {
    fd_amt: number;
    mutual_fund_amt: number;
    gold_amt: number;
  };
}

const Portfolio: React.FC<PortfolioPageProps> = ({ data }) => {
  const navigate = useNavigate();

  const investHandler = (link: string) => {
    navigate(link);
  };

  const investments = [
    {
      name: "Fixed Deposits",
      amount: data.fd_amt,
      link: "/invest/fixed-deposits",
    },
    { name: "Gold", amount: data.gold_amt, link: "/invest/gold" },
    {
      name: "Mutual Funds",
      amount: data.mutual_fund_amt,
      link: "/invest/mutual-funds",
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 text-gray-800 flex flex-col justify-center items-center p-6 pt-16 md:pt-10 md:rounded-3xl pb-20">
      <h1 className="text-3xl font-bold mb-5">Investment Portfolio</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {investments.map((investment, index) => (
          <div
            key={index}
            className="p-6 min-w-[250px] rounded-xl shadow-lg text-center border border-gray-600 bg-white/50 backdrop-blur-lg transition-all duration-300 transform hover:scale-105"
          >
            <h2 className="text-2xl font-semibold mb-3">{investment.name}</h2>
            <p className="text-lg mb-6">
              Invested:{" "}
              <span className="font-bold">Rs.{investment.amount}</span>
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => investHandler(investment.link)}
                className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
              >
                Invest
              </button>
              <button
                onClick={() => investHandler(investment.link)}
                className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
              >
                Withdraw
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
