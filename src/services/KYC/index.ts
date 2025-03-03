import { BASE_URL } from "../../config";

export const sendKYCRequest = async (formData: any) => {
  try {
    const token = localStorage.getItem("token");
    const link = `${BASE_URL}/kyc/set`;
    const response = await fetch(link, {
      method: "Post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        jwt_token: token ? token : "",
      },
      body: JSON.stringify(formData),
    });

    return response.ok;
  } catch (err) {
    return false;
  }
};
