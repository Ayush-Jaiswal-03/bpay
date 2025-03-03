import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendOTP } from "../../../services/Login/OtpAuth";

const OTPPage: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const otpKey = localStorage.getItem("otpKey");

  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleOTPChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;

    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value !== "" && index < 3) {
        inputRefs[index + 1].current?.focus();
      }

      if (value === "" && index > 0) {
        inputRefs[index - 1].current?.focus();
      }
    } else {
      e.target.value = otp[index];
    }
  };

  const handleOTPSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!otpKey) setError("Otp Not Matched");

    const data = await sendOTP(otp);

    // backend
    console.log("token", data.jwt_token);

    if (data.jwt_token) {
      localStorage.setItem("token", data.jwt_token);
      navigate("/home");
    } else {
      setError("Invalid Otp, Please Try Again");
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
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 bg-transparent text-white text-xl font-bold hover:text-blue-500 focus:outline-none"
      >
        &#8592;
      </button>

      <h1 className="text-2xl font-semibold mb-4 text-blue-500">Enter OTP</h1>
      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleOTPSubmit} className="w-full max-w-sm">
        <div className="flex items-center justify-center space-x-2 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOTPChange(e, index)}
              ref={inputRefs[index]}
              className="w-12 h-12 text-center text-2xl border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default OTPPage;
