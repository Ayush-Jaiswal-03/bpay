import { BASE_URL } from "../../config";

export interface InvestmentData {
  fd_amt: number;
  mutual_fund_amt: number;
  gold_amt: number;
}

export const fetchInvestments = async (): Promise<InvestmentData> => {
  try {
    const token = localStorage.getItem("token");
    const link = `${BASE_URL}/assets/data`;

    const response = await fetch(link, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        jwt_token: token ? token : "",
      },
    });

    if (!response.ok) {
      console.log("Error fetching data on home page");
    }

    const data: InvestmentData = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return { fd_amt: 0, mutual_fund_amt: 0, gold_amt: 0 };
  }
};
