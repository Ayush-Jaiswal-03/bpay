import React from "react";
import { useNavigate } from "react-router-dom";
import BharatPeLogo from "../../../assets/invest-bharatpe-logo.png";

interface profileUserData {
  user: {
    name: string;
    address: string;
    email: string;
    phone_number: string;
    kyc_status: boolean;
    // phone_number:string;
  } | null;
  error: string;
}

const ProfilePage: React.FC<profileUserData> = ({ user, error }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  // const isKYC = localStorage.getItem("isKYC");
  const isKYC = user?.kyc_status;

  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!user)
    return (
      <div className="text-center">
        No user data found. Please log in again.
      </div>
    );

  return (
    <div className="p-6 min-h-screen ">
      <div
        className="flex justify-center items-center flex-col mb-20 w-full h-40 rounded-3xl"
        style={{
          backgroundColor: "#0093E9",
          backgroundImage:
            "linear-gradient(147deg, #0093E9 0%, #80D0C7 33%, #ffffff 66%, #ffffff 100%)",
        }}
      >
        <img
          src={BharatPeLogo}
          alt="BP Logo"
          //   className="mb-4 w-45 h-auto animate-pulse-scale sm:w-40 md:w-40"
          className="mb-4 w-32 h-auto animate-pulse-scale sm:w-28 md:w-40"
        />
      </div>
      {/* <div className="profile-header mb-8">
        <h1 className="text-3xl font-bold text-center mb-8">Profile</h1>
      </div> */}

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

// bg-gradient-to-b from-[#0093E9] via-[#80D0C7] to-[#ffffff]
