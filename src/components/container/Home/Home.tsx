// import BottomTabs from "../../molecules/BottomTabs";
import { useEffect, useState } from "react";
import HomePage from "../../pages/Home";
import { fetchInvestments, InvestmentData } from "../../../services/Home";

const Home = () => {
  const [fd, setFD] = useState<number>(0);
  const [gold, setGold] = useState<number>(0);
  const [mf, setMF] = useState<number>(0);

  const investmentData: InvestmentData = {
    fd_amt: fd,
    gold_amt: gold,
    mutual_fund_amt: mf,
  };

  useEffect(() => {
    const fetchData = async () => {
      const investments = await fetchInvestments();

      const { fd_amt, gold_amt, mutual_fund_amt } = investments;
      setFD(fd_amt);
      setGold(gold_amt);
      setMF(mutual_fund_amt);
    };

    fetchData();
  }, []);

  return (
    <div>
      <HomePage data={investmentData} />
    </div>
  );
};

export default Home;
