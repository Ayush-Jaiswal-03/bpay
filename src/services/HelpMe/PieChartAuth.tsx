export const pieChartData = async (token: string) => {
  try {
    const response = await fetch("https://your-backend-api.com/data", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const data = await response.json();

    return data;
  } catch (err) {
    throw new Error("Error fetching data: ");
  }
};
