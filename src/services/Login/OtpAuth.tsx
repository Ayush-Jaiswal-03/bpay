// import { BASE_URL } from "../../config";

export const sendOTP = async (otp: String[]) => {
  const otpKey = localStorage.getItem("otpKey");
  const response = await fetch(
    "https://investpe-user-service-dev-production.up.railway.app/auth/otp/verify",
    {
      method: "Post",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ otp: otp.join(""), otp_code: otpKey }),
    }
  );

  if (!response) {
    throw new Error("Failed TO Send OTP");
  }

  return response.json();
};
