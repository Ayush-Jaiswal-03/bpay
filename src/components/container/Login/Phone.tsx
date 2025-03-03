import { useState } from "react";
// import { Input, Typography } from "@material-tailwind/react";

const Phone: React.FC<{ onSubmit: (phn: string) => void }> = ({ onSubmit }) => {
  const [phone, setPhone] = useState("");

  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(phone);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h2 className="text-2xl mb-1 mr-4 sm:text-2xl md:text-2xl whitespace-nowrap ">
        Login
      </h2>
      <form onSubmit={formSubmit} className="w-full max-w-sm">
        <input
          type="text"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Send Otp
        </button>
      </form>
    </div>
  );
};

export default Phone;
