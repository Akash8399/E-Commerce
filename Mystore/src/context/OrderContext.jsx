<<<<<<< HEAD
import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const placeOrder = (cart) => {
    const newOrder = {
      id: Date.now(),
      items: cart,
      total: cart.reduce((a, c) => a + c.price * c.qty, 0),
      date: new Date().toLocaleString(),
      status: "Pending"
    };

    setOrders([...orders, newOrder]);
  };

  return (
    <OrderContext.Provider value={{ orders, placeOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

=======
import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const placeOrder = (cart) => {
    const newOrder = {
      id: Date.now(),
      items: cart,
      total: cart.reduce((a, c) => a + c.price * c.qty, 0),
      date: new Date().toLocaleString(),
      status: "Pending"
    };

    setOrders([...orders, newOrder]);
  };

  return (
    <OrderContext.Provider value={{ orders, placeOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

>>>>>>> 3949c0e (update)
export const useOrders = () => useContext(OrderContext);