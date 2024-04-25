import { useNavigate } from "react-router-dom";

export const handleLogout = () => {
  const navigate = useNavigate();
  console.log("inside handle ologi");
  sessionStorage.clear();
  navigate("/login");
};
