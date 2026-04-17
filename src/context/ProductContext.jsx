import { createContext,useContext,useState } from "react";
import { products as initialProducts } from "../data/products";

const ProductContext = createContext();

export default function ProductProvider({children}){
    const [products] = useState(initialProducts);
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter(function (p) {
    return p.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <ProductContext.Provider value={{ products: filteredProducts, setSearch }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}