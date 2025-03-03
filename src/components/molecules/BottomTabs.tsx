// import { Link } from "react-router-dom";

// // import React from 'react'

// const BottomTabs = () => {
//   return (
//     <div>
//       <nav className="fixed bottom-0 w-full shadow-md flex justify-around py-3 border-t">
//         <Link
//           to="/home"
//           className="text-gray-600 hover:text-blue-500 flex flex-col items-center"
//         >
//           <span className="text-lg">🏠</span>
//           Home
//         </Link>
//         <Link
//           to="/portfolio"
//           className="text-gray-600 hover:text-blue-500 flex flex-col items-center"
//         >
//           <span className="text-lg">📊</span>
//           Portfolio
//         </Link>
//         <Link
//           to="/profile"
//           className="text-gray-600 hover:text-blue-500 flex flex-col items-center"
//         >
//           <span className="text-lg">👤</span>
//           Profile
//         </Link>
//       </nav>
//     </div>
//   );
// };

// export default BottomTabs;
import { useState } from "react";
import { FaHome, FaBriefcase, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BottomNavigation = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    {
      id: "home",
      label: "Home",
      icon: FaHome,
      link: "/home",
    },
    {
      id: "portfolio",
      label: "Portfolio",
      icon: FaBriefcase,
      link: "/portfolio",
    },
    {
      id: "profile",
      label: "Profile",
      icon: FaUser,
      link: "/profile",
    },
  ];

  return (
    <nav
      className="fixed bottom-0 w-full bg-gray-800 shadow-lg z-50"
      role="navigation"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                navigate(item.link);
              }}
              className={`flex-1 flex flex-col items-center justify-center py-4 px-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-all duration-300 ease-in-out min-h-[64px] ${
                activeTab === item.id
                  ? "text-blue-400"
                  : "text-gray-400 hover:text-gray-200"
              }`}
              aria-label={item.label}
              aria-current={activeTab === item.id ? "page" : undefined}
            >
              <item.icon
                className={`w-6 h-6 mb-1 transform transition-transform duration-300 ${
                  activeTab === item.id ? "scale-110" : "hover:scale-105"
                }`}
              />
              <span className="text-xs font-medium">{item.label}</span>
              {activeTab === item.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400 transform scale-x-100 transition-transform duration-300" />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BottomNavigation;
