export const sendAnswers = async (answers: string[]) => {
  const token = localStorage.getItem("token") || "";
  try {
    const response = await fetch(
      "https://invest-backend-production.up.railway.app/help/create",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          jwt_token: token,
        },
        body: JSON.stringify({ answers: answers }),
      }
    );

    if (!response) {
      throw new Error("Submission failed");
    }

    // const data = await response.json();
    return response;
  } catch (error) {
    console.error("Error:", error);
    return { success: false, message: "Something went wrong" };
  }
};
