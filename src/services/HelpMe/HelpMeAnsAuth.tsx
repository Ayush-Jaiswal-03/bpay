export const helpMeAnsData = async (token: string) => {
  try {
    const response = await fetch(
      "https://invest-backend-production.up.railway.app/help/fetch",
      {
        method: "GET",
        headers: { jwt_token: token },
      }
    );

    if (!response.ok) {
      throw new Error("Error fetching data from the API");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("An error occurred while fetching data.");
  }
};
