// import { BASE_URL } from "../../config";

export const sendPhoneNumber = async (phone: string) => {
  const response = await fetch(
    "https://investpe-user-service-dev-production.up.railway.app/auth/login",
    {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone_number: phone }),
    }
  );

  if (!response) {
    throw new Error("Failed To Send Phone Number");
  }

  return response.json();
};
