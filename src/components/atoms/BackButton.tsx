import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const BackButton: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Hide back button on home ("/") and login ("/login")
  if (location.pathname === "/" || location.pathname === "/home") return null;

  const handleBack = () => {
    navigate(-1); // Go back
  };

  return (
    <button
      onClick={handleBack}
      className="fixed top-4 left-4 bg-white p-2 rounded-full shadow-md border border-gray-300
             hover:bg-gray-200 transition-all duration-200 flex items-center z-50"
    >
      <FaArrowLeft className="text-gray-700" size={20} />
    </button>
  );
};

export default BackButton;
