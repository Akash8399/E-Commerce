import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(function () {
    const saved = JSON.parse(localStorage.getItem("cart"));
    if (saved) setCart(saved);
  }, []);

  useEffect(function () {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    const exist = cart.find(function (item) {
      return item.id === product.id;
    });

    if (exist) {
      setCart(
        cart.map(function (item) {
          if (item.id === product.id) {
            return { ...item, qty: item.qty + 1 };
          }
          return item;
        })
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  }

  function removeItem(id) {
    setCart(
      cart.filter(function (item) {
        return item.id !== id;
      })
    );
  }

  function updateQty(id, type) {
    setCart(
      cart.map(function (item) {
        if (item.id === id) {
          const newQty = type === "inc" ? item.qty + 1 : item.qty - 1;
          return { ...item, qty: newQty < 1 ? 1 : newQty };
        }
        return item;
      })
    );
  }

  const totalPrice = cart.reduce(function (acc, item) {
    return acc + item.price * item.qty;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        addToCart: addToCart,
        removeItem: removeItem,
        updateQty: updateQty,
        totalPrice: totalPrice,
      }} >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}