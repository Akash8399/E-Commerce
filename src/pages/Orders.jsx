import { useOrders } from "../context/OrderContext";

const Orders = () => {
  const { orders } = useOrders();

  return (
    <div className="container">
      <h2>Your Orders</h2>

      {orders.length === 0 && <p>No orders yet</p>}

      {orders.map((order) => (
        <div className="order-card" key={order.id}>
          <h3>Order ID: {order.id}</h3>
          <p>Date: {order.date}</p>
          <p>Status: {order.status}</p>
          <p>Total: ₹{order.total}</p>

          <h4>Items:</h4>
          {order.items.map((item) => (
            <p key={item.id}>
              {item.name} (x{item.qty})
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Orders;