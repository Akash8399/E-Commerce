import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //  Load user from localStorage (important)
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  //  LOGIN
  const login = (name, email) => {
    //  role logic
    const role = email === "admin@gmail.com" ? "admin" : "user";

    const userData = {
      name,
      email,
      role,
      token: "fake-token-123456" 
    };

    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  //  LOGOUT
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);