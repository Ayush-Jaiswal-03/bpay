import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BharatPeLogo from "../../../assets/invest-bharatpe-logo.png";
interface profileUserData {
  user: {
    name: string;
    address: string;
    email: string;
    phone_number: string;
    kyc_status: boolean;
  } | null;
  error: string;
}
const ProfilePage: React.FC<profileUserData> = ({ user, error }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const isKYC = user?.kyc_status;
  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <div className="relative w-16 h-20 md:w-20 md:h-24">
          <div className="absolute bottom-0 left-0 w-2 h-1/2 bg-black transform origin-bottom scale-y-20 animate-bar1"></div>
          <div className="absolute bottom-0 left-4 w-2 h-1/2 bg-black transform origin-bottom scale-y-40 animate-bar2"></div>
          <div className="absolute bottom-0 left-8 w-2 h-1/2 bg-black transform origin-bottom scale-y-60 animate-bar3"></div>
          <div className="absolute bottom-0 left-12 w-2 h-1/2 bg-black transform origin-bottom scale-y-80 animate-bar4"></div>
          <div className="absolute bottom-0 left-16 w-2 h-1/2 bg-black transform origin-bottom scale-y-100 animate-bar5"></div>
          <div className="absolute bottom-2 left-0 w-2.5 h-2.5 bg-blue-500 rounded-full animate-ball"></div>
        </div>
      </div>
    );
  }
  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }
  if (!user) {
    return (
      <div className="text-center">
        No user data found. Please log in again.
      </div>
    );
  }
  return (
    <div className="p-6 min-h-screen mb-20">
      <div
        className="flex justify-center items-center flex-col mb-15 w-full h-40 rounded-3xl"
        style={{
          backgroundColor: "#0093E9",
          backgroundImage:
            "linear-gradient(147deg, #0093E9 0%, #80D0C7 33%, #FFFFFF 66%, #FFFFFF 100%)",
        }}
      >
        <img
          src={BharatPeLogo}
          alt="BP Logo"
          className="mb-4 w-32 h-auto animate-pulse-scale sm:w-28 md:w-40"
        />
      </div>
      <div className="mb-6 text-center">
        {isKYC ? (
          <h2 className="text-2xl font-semibold">{user.name}</h2>
        ) : (
          <h2 className="text-2xl font-semibold text-red-500 cursor-pointer">
            <span
              onClick={() => {
                navigate("/kyc");
              }}
            >
              Complete your KYC first
            </span>
          </h2>
        )}
      </div>
      <div
        className=" mb-6 cursor-pointer text-blue-600 p-4 rounded-xl bg-white shadow-lg"
        onClick={() =>
          navigate("/myaccount", {
            state: user,
          })
        }
      >
        My Account
      </div>
      <div
        className=" mb-6 cursor-pointer text-blue-600 p-4 rounded-xl bg-white shadow-lg"
        onClick={() => navigate("/history")}
      >
        History Page
      </div>
      <div
        className=" mb-6 cursor-pointer text-blue-600 p-4 rounded-xl bg-white shadow-lg"
        onClick={() => navigate("/helpme")}
      >
        Manage Preferences
      </div>
      <div className="text-center">
        <button
          onClick={handleLogout}
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};
export default ProfilePage;
