import { Routes, Route, useLocation } from "react-router-dom";
import Profile from "../components/container/Profile";
import InvestFD from "../components/pages/Invest/InvestFD";
import InvestGold from "../components/pages/Invest/InvestGold";
import InvestMF from "../components/pages/Invest/InvestMF";
import Invest from "../components/container/Invest";
import Home from "../components/container/Home";
import OTPPage from "../components/pages/Login/OTPPage";
import LoginPage from "../components/pages/Login/LoginPage";
import BottomTabs from "../components/molecules/BottomTabs";
import Portfolio from "../components/container/Portfolio";
import BackButton from "../components/atoms/BackButton";
import InvestBank from "../components/pages/Invest/InvestBank";
import KYCProtectedRoute from "../components/container/Wrapper";
import KYC from "../components/container/KYC";
// import HistoryPage from "../components/pages/Profile/HistoryPage";
import MyAccountPage from "../components/pages/Profile/MyAccountPage";
import HelpMe from "../components/container/HelpMe/HelpMe";
import HelpMeAns from "../components/container/HelpMe/HelpMeAns";
import History from "../components/container/Profile/History";

const Router = () => {
  const location = useLocation();
  const hide = ["/", "/otp", "/helpmeans"];
  const show = !hide.includes(location.pathname);
  return (
    <div>
      <BackButton />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/otp" element={<OTPPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/kyc" element={<KYC />} />
        <Route element={<KYCProtectedRoute />}>
          <Route path="/invest/gold" element={<InvestGold />} />
          <Route path="/invest/fixed-deposits" element={<InvestFD />} />
          <Route path="/invest/mutual-funds" element={<InvestMF />} />
          <Route path="/invest/bank" element={<InvestBank />} />
        </Route>

        <Route path="/invest/fixed-deposits" element={<InvestFD />} />
        <Route path="/invest/gold" element={<InvestGold />} />
        <Route path="/invest/mutual-funds" element={<InvestMF />} />
        <Route path="/helpme" element={<HelpMe />} />

        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/history" element={<History/>} /> */}
        <Route path="/history" element={<History />} />
        <Route path="/myaccount" element={<MyAccountPage />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/helpmeans" element={<HelpMeAns />} />
      </Routes>
      {show && <BottomTabs />}
    </div>
  );
};

export default Router;
