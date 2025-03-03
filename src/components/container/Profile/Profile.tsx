import React, { useState, useEffect } from "react";
import { sendProfileData } from "../../../services/Profile/ProfileAuth";
import ProfilePage from "../../pages/Profile/ProfilePage";

interface userData {
  name: string;
  address: string;
  email: string;
  phone_number: string;
  kyc_status: boolean;
  // phone_number: string;
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<userData | null>(null);
  const [error, setError] = useState<string>("");
  // const tempData = {
  //   name: "yash",
  //   address: "Delhi",
  //   email: "xyz@gmail.com",
  //   kyc_status: true,
  // };

  const fetchData = async () => {
    const token = localStorage.getItem("token") || "";
    try {
      const data = await sendProfileData(token);
      setUser(data);
    } catch (err) {
      setError("Failed to fetch user data");
    }
  };

  console.log(user);

  //frontend
  // const fetchData = async () => {
  //   setUser(tempData);
  // };

  useEffect(() => {
    fetchData();
  }, []);

  return <ProfilePage user={user} error={error} />;
};

export default Profile;
