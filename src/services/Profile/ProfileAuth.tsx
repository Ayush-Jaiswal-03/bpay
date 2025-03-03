export const sendProfileData = async (token: string) => {
  if (!token) {
    throw new Error("No token found");
  }

  const response = await fetch(
    "https://investpe-user-service-dev-production.up.railway.app/user/details",
    {
      method: "GET",
      mode: "cors",
      headers: { jwt_token: token },
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ jwt_token: token }),
    }
  );

  if (!response) {
    throw new Error("Failed TO Get Profile Details");
  }

  return await response.json();
};
