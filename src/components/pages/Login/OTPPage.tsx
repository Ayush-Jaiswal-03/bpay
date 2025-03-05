import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { sendOTP } from "../../../services/Login/OtpAuth";
const OTPPage: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
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
      if (value && index < 3) {
        inputRefs[index + 1].current?.focus();
      }
    } else {
      e.target.value = otp[index];
    }
  };
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };
  const handleOTPSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (!otpKey) {
      setError("Otp Not Matched");
      setLoading(false);
      return;
    }
    try {
      const data = await sendOTP(otp);
      console.log("token", data.jwt_token);
      if (data.jwt_token) {
        const decoded = JSON.parse(atob(data.jwt_token.split(".")[1]));
        const expirationTime = decoded.exp;
        localStorage.setItem("token_expiry", expirationTime.toString());
        localStorage.setItem("token", data.jwt_token);
        navigate("/home");
      } else {
        setError("Invalid Otp, Please Try Again");
      }
    } catch (error) {
      setError("Something went wrong, Please try again");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (inputRefs[0].current) {
      inputRefs[0].current.focus();
    }
  }, []);
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
          <button
            onClick={() => navigate("/")}
            className="absolute top-4 left-4 bg-transparent text-white text-xl font-bold hover:text-blue-500 focus:outline-none"
          >
            &#8592;
          </button>
          {error && <p className="text-red-500">{error}</p>}
          <h1 className="text-2xl font-semibold mb-4 text-blue-500">
            Enter OTP
          </h1>
          <form onSubmit={handleOTPSubmit} className="w-full max-w-sm">
            <div className="flex items-center justify-center space-x-2 mb-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOTPChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
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
        </>
      )}
    </div>
  );
};
export default OTPPage;
