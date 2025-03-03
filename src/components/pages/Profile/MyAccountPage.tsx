import React from "react";
import { useLocation } from "react-router-dom";

interface myAccountData {
  name: string;
  address: string;
  email: string;
  phone_number: string;
  kyc_status: boolean;
}

const MyAccountPage: React.FC = () => {
  const location = useLocation();

  const user: myAccountData = location.state || {};

  return (
    <div className="w-full min-h-screen bg-blue-200">
      <div className="p-6 flex flex-col items-center justify-center gap-20 bg-blue-200 h-full">
        <div className="rounded-2xl bg-blue-900 w-full mt-12">
          <h2 className="flex items-center justify-center mt-1.5 text-xl font-semibold mb-4 text-white">
            My Account
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-6 w-full h-96 max-w-lg mt-6 shadow-lg flex flex-col justify-evenly">
          <div className="mb-4 ">
            <p className="font-semibold text-gray-700">Name:</p>
            <p>{user.name}</p>
          </div>

          <div className="mb-4">
            <p className="font-semibold text-gray-700">Email:</p>
            <p>{user.email}</p>
          </div>

          <div className="mb-4">
            <p className="font-semibold text-gray-700">Address:</p>
            <p>{user.address}</p>
          </div>

          <div className="mb-4">
            <p className="font-semibold text-gray-700">Phone Number:</p>
            <p>{user.phone_number}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccountPage;
