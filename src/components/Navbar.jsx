import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Navbar(){
  const { cart } = useCart();
  const { user, login, logout } = useAuth();

  const totalItems = cart.reduce((a, c) => a + c.qty, 0);

  return (
    <nav style={styles.nav}>
      <h2>MyStore</h2>

      <div style={{ display: "flex", gap: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({totalItems})</Link>

        {user ? (
          <>
            <span>Hi {user.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <button onClick={() => login("User")}>Login</button>
        )}
      </div>
    </nav>
  );
};



const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    background: "#eee",
  },
};