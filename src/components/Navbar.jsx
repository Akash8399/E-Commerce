import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { cart } = useCart();
  const { user, logout } = useAuth();

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <nav className="navbar">
      <h2 className="logo">ShopEasy</h2>

      <div className="nav-right">
        {/* Home */}
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>

        {/* Show only if logged in */}
        {user && (
          <>
            <NavLink to="/cart" className="nav-link">
              Cart ({totalItems})
            </NavLink>

            <NavLink to="/orders" className="nav-link">
              Orders
            </NavLink>
          </>
        )}

        {/* Admin only */}
        {user && user.role === "admin" && (
          <NavLink to="/add-product" className="nav-link admin">
            Add Product
          </NavLink>
        )}

        {/* Login / Logout */}
        {user ? (
          <>
            <span className="user">Hi, {user.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <NavLink to="/login" className="nav-link">
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;