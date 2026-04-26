import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  // 🔥 fetch all products
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:3000/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // 🔍 search filter
  const filteredProducts =
    search.trim() === ""
      ? products
      : products.filter((p) =>
          p.name.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <ProductContext.Provider
      value={{ products: filteredProducts, setSearch, fetchProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);