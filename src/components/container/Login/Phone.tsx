import { useState } from "react";
const Phone: React.FC<{ onSubmit: (phn: string) => void }> = ({ onSubmit }) => {
  const [phone, setPhone] = useState("");
  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(phone);
  };
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace(/[^0-9]/g, "");
    if (value.length > 10) {
      value = value.slice(0, 10);
    }
    setPhone(value);
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
          onChange={handlePhoneChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          maxLength={10}
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
