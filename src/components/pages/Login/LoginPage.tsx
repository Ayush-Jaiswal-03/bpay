import React, { useState } from "react";
import Phone from "../../container/Login/Phone";
import { sendPhoneNumber } from "../../../services/Login/LoginAuth";
import { useNavigate } from "react-router-dom";
import BharatPeLogo from "../../../assets/invest-bharatpe-logo.png";
const LoginPage: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handlePhoneSubmit = async (phone: string) => {
    setError(null);
    setLoading(true);
    const phonePattern = /^[789]\d{9}$/;
    if (!phonePattern.test(phone)) {
      setError("Please enter a valid phone number");
      setLoading(false);
      return;
    }
    try {
      const data = await sendPhoneNumber(phone);
      console.log("OTP", data.otp_code);
      if (data.otp_code) {
        localStorage.setItem("otpKey", data.otp_code);
        navigate("/otp");
      } else {
        setError("Error sending phone number");
      }
    } catch (error) {
      setError("Network error or failed to send request");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className="flex flex-col items-center justify-center p-6 min-h-screen"
      style={{
        backgroundColor: "#0093E9",
        backgroundImage:
          "linear-gradient(147deg, #0093E9 0%, #80D0C7 33%, #FFFFFF 66%, #FFFFFF 100%)",
      }}
    >
      {loading ? (
        <div className="flex justify-center items-center w-full h-screen">
          <div className="relative w-16 h-20 md:w-20 md:h-24">
            <div className="absolute bottom-0 left-0 w-2 h-1/2 bg-black transform origin-bottom scale-y-20 animate-bar1"></div>
            <div className="absolute bottom-0 left-4 w-2 h-1/2 bg-black transform origin-bottom scale-y-40 animate-bar2"></div>
            <div className="absolute bottom-0 left-8 w-2 h-1/2 bg-black transform origin-bottom scale-y-60 animate-bar3"></div>
            <div className="absolute bottom-0 left-12 w-2 h-1/2 bg-black transform origin-bottom scale-y-80 animate-bar4"></div>
            <div className="absolute bottom-0 left-16 w-2 h-1/2 bg-black transform origin-bottom scale-y-100 animate-bar5"></div>
            <div className="absolute bottom-2 left-0 w-2.5 h-2.5 bg-blue-500 rounded-full animate-ball"></div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col mb-20 ">
            <img
              src={BharatPeLogo}
              alt="BP Logo"
              className="mb-4 w-70 h-auto animate-pulse-scale mr-7"
            />
            <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center text-c sm:text-3xl md:text-4xl">
              Invest With Bharat
              <span className="px-1 py-1" style={{ color: "#46B8DA" }}>
                Pe
              </span>
            </h2>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <Phone onSubmit={handlePhoneSubmit} />
        </>
      )}
    </div>
  );
};
export default LoginPage;
