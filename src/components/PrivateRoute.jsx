import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  // ❌ Not logged in → redirect
  if (!user) {
    return <Navigate to="/login" />;
  }

  // ✅ Logged in → allow
  return children;
};

export default PrivateRoute;