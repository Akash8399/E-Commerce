import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrderContext";
import { useNavigate } from "react-router-dom";
import "../styles/cart.css"

const Cart = () => {
  const { cart, updateQty, removeItem, totalPrice, setCart } = useCart();
  const { placeOrder } = useOrders();
  const navigate = useNavigate();

  const handleCheckout = () => {
    // ❌ Empty cart check
    if (cart.length === 0) {
      alert("Cart is empty ❌");
      return;
    }

    // ✅ Place order
    placeOrder(cart, totalPrice);

    // 🧹 Clear cart
    setCart([]);

    // ✅ Success
    alert("Order Placed Successfully ✅");

    // 🔁 Redirect
    navigate("/orders");
  };

  return (
    <div className="container">
      <h2 className="cart-title">Your Cart</h2>

      {cart.length === 0 && <p className="empty-cart">Cart is empty</p>}

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>

          <div className="qty-box">
            <button onClick={() => updateQty(item.id, "dec")}>-</button>
            <span>{item.qty}</span>
            <button onClick={() => updateQty(item.id, "inc")}>+</button>
          </div>

          <button className="remove-btn" onClick={() => removeItem(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <div className="cart-total">
        <h3>Total: ₹{totalPrice}</h3>

        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;