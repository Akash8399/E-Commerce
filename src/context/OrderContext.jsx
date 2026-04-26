import { createContext, useContext, useState, useEffect } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // Place Order
  const placeOrder = (cart, totalPrice) => {
    const newOrder = {
      id: Date.now(),
      items: cart,
      total: totalPrice,
      date: new Date().toLocaleString(),
      status: "Pending"
    };

    setOrders([newOrder, ...orders]);
  };

  return (
    <OrderContext.Provider value={{ orders, placeOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => useContext(OrderContext);