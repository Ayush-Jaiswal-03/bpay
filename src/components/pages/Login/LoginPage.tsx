import React, { useState } from "react";
import Phone from "../../container/Login/Phone";
import { sendPhoneNumber } from "../../../services/Login/LoginAuth";
import { useNavigate } from "react-router-dom";
import BharatPeLogo from "../../../assets/invest-bharatpe-logo.png";

const LoginPage: React.FC = () => {
  // const [phoneData, setPhoneData] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handlePhoneSubmit = async (phone: string) => {
    setError(null);

    const phonePattern = /^[789]\d{9}$/;

    if (!phonePattern.test(phone)) {
      setError("Please enter a valid phone number");
      return;
    }

    try {
      const data = await sendPhoneNumber(phone);
      // setPhoneData(phone);

      console.log("OTP", data.otp_code);

      if (data.otp_code) {
        localStorage.setItem("otpKey", data.otp_code);
        navigate("/otp");
      } else {
        setError("Error sending phone number");
      }
    } catch (error) {
      setError("Network error or failed to send request");
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center p-6 min-h-screen"
      style={{
        backgroundColor: "#0093E9",
        backgroundImage:
          "linear-gradient(147deg, #0093E9 0%, #80D0C7 33%, #ffffff 66%, #ffffff 100%)",
      }}
    >
      <div className="flex flex-col mb-20">
        <img
          src={BharatPeLogo}
          alt="BP Logo"
          className="mb-4 w-70 h-auto animate-pulse-scale"
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
    </div>
  );
};

export default LoginPage;
