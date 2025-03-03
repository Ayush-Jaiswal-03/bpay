import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
const KYCProtectedRoute = () => {
  const [isKYCVerified, setIsKYCVerified] = useState<boolean | null>(false); // Using boolean | null for better type safety
  const navigate = useNavigate();
  useEffect(() => {
    const checkKYC = async () => {
      const token = localStorage.getItem("token") || "";
      // const storedKYCStatus = localStorage.getItem("kyc_status");

      // console.log("before fetchj");
      try {
        const response = await fetch(
          "https://investpe-user-service-dev-production.up.railway.app/user/details",
          {
            method: "GET",
            mode: "cors",
            headers: { jwt_token: token },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch profile details");
        }
        const data = await response.json();
        const kycStatus = data.kyc_status;
        // localStorage.setItem("kyc_status", kycStatus ? "true" : "false");
        setIsKYCVerified(kycStatus);
        // console.log("before redirecting");
        if (kycStatus === false) {
          navigate("/kyc", { replace: true });
        }
        return;
      } catch (error) {
        console.error("Error checking KYC:", error);
        navigate("/login", { replace: true }); // Redirect to login on error
      }
    };
    checkKYC();
  }, [navigate]); // Empty dependency array means this effect runs once when the component mounts
  // console.log("before outlet");
  if (isKYCVerified != true) {
    navigate("/kyc", { replace: true });
  }
  return isKYCVerified && <Outlet />;
};
export default KYCProtectedRoute;
