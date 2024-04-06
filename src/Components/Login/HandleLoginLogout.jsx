import { useNavigate } from "react-router-dom";
export const handleLogout = () => {
  const navigate = useNavigate();
  sessionStorage.clear();
  navigate("/login");
};
