import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    name: "",
    email: ""
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email) {
      alert("Please fill all fields");
      return;
    }

    login(form.name, form.email);

    alert("Login Successful ");

    navigate("/"); // redirect to home
  }

  return (
    <div className="form-container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;