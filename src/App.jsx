import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import AddProduct from "./pages/AddProduct";
import Login from "./pages/Login";
import Orders from "./pages/Orders";

import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { OrderProvider } from "./context/OrderContext";

function App() {
  return (
    <ProductProvider>
      <AuthProvider>
        <CartProvider>
          <OrderProvider>
            <BrowserRouter>
              <Navbar />

              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />

                {/* Protected Routes (Only Logged-in Users) */}
                <Route
                  path="/cart"
                  element={
                    <PrivateRoute>
                      <Cart />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/orders"
                  element={
                    <PrivateRoute>
                      <Orders />
                    </PrivateRoute>
                  }
                />

                {/* Admin Only Route */}
                <Route
                  path="/add-product"
                  element={
                    <AdminRoute>
                      <AddProduct />
                    </AdminRoute>
                  }
                />
              </Routes>

            </BrowserRouter>
          </OrderProvider>
        </CartProvider>
      </AuthProvider>
    </ProductProvider>
  );
}

export default App;