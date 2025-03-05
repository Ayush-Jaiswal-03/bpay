import { BASE_URL } from "../../config";

export const investGold = async (amount: number) => {
  try {
    const token = localStorage.getItem("token");
    const link = `${BASE_URL}/assets/buy/gold`;
    const response = await fetch(link, {
      method: "Post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        jwt_token: token ? token : "",
      },
      body: JSON.stringify(amount),
    });

    return response.ok;
  } catch (err) {
    return false;
  }
};

export const withdrawGold = async (amount: number) => {
  try {
    const token = localStorage.getItem("token");

    const link = `${BASE_URL}/assets/sell/gold`;

    const response = await fetch(link, {
      method: "Post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        jwt_token: token ? token : "",
      },
      body: JSON.stringify(amount),
    });

    return response.ok;
  } catch (err) {
    return false;
  }
};

export const investBank = async (amount: number) => {
  try {
    const token = localStorage.getItem("token");
    const link = `${BASE_URL}/assets/buy/fd`;
    const response = await fetch(link, {
      method: "Post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        jwt_token: token ? token : "",
      },
      body: JSON.stringify(amount),
    });

    return response.ok;
  } catch (err) {
    return false;
  }
};

export const withdrawBank = async (amount: number) => {
  try {
    const token = localStorage.getItem("token");
    const link = `${BASE_URL}/assets/sell/fd`;
    const response = await fetch(link, {
      method: "Post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        jwt_token: token ? token : "",
      },
      body: JSON.stringify(amount),
    });

    return response.ok;
  } catch (err) {
    return false;
  }
};

export const investMF = async (amount: number) => {
  try {
    const token = localStorage.getItem("token");
    const link = `${BASE_URL}/assets/buy/mutual_fund`;
    const response = await fetch(link, {
      method: "Post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        jwt_token: token ? token : "",
      },
      body: JSON.stringify(amount),
    });

    return response.ok;
  } catch (err) {
    return false;
  }
};

export const withdrawMF = async (amount: number) => {
  try {
    const token = localStorage.getItem("token");

    const link = `${BASE_URL}/assets/sell/mutual_fund`;

    const response = await fetch(link, {
      method: "Post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        jwt_token: token ? token : "",
      },
      body: JSON.stringify(amount),
    });

    return response.ok;
  } catch (err) {
    return false;
  }
};
