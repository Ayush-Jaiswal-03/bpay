import { useEffect, useState } from "react";
import PortfolioPage from "../../pages/Portfolio";
import { InvestmentData } from "../../../services/Home";
import { fetchInvestments } from "../../../services/Portfolio";

const Portfolio = () => {
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
      console.log("inside container");
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
      <PortfolioPage data={investmentData} />
    </div>
  );
};

export default Portfolio;
