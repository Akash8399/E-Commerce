import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminRoute = ({ children }) => {
  const { user } = useAuth();

  // ❌ Not logged in
  if (!user) {
    return <Navigate to="/login" />;
  }

  // ❌ Not admin
  if (user.role !== "admin") {
    return <h2 style={{ textAlign: "center" }}>Access Denied ❌</h2>;
  }

  // ✅ Admin access
  return children;
};

export default AdminRoute;