import { useProducts } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const { products, setSearch } = useProducts();

  return (
    <div className="container">
      <h2>All Products</h2>

      {/* SEARCH */}
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* PRODUCTS */}
      <div className="grid">
        {products.length === 0 ? (
          <p>Loading...</p>
        ) : (
          products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;