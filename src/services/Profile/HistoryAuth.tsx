export const transactionData = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Token not found");
  }

  const response = await fetch(
    "https://investpe-user-service-dev-production.up.railway.app/transaction/details",
    {
      method: "GET",
      mode: "cors",
      headers: { jwt_token: token },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch transaction history");
  }

  const data = await response.json();
  console.log(data);
  return data;
};
