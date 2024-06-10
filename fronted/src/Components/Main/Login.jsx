import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// Make sure to create this CSS file for styling

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.status != 200) {
        throw new Error("Failed to Login");
      }

      const result = await response.json();
      console.log(result.data.token);
      setSuccess(true);
      localStorage.setItem("authToken", result.data.token);
      dispatch({ type: "LOGIN" });
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="auth-page">
      <h1 className="text-5xl font-semibold w-full text-center py-[3rem]">
        Login
      </h1>
      <div className="form-container">
        <div className={`form-wrapper ${isLogin ? "login" : "signup"}`}>
          <div className="form login-form">
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <label>Password</label>
                <input
                  type="password"
                  required
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit" className="submit-button">
                Login
              </button>
              <div className="toggle-link">
                Don't have an account? <NavLink to="/signin">Signup</NavLink>
              </div>
              {error && <div className="error-message">{error}</div>}
              {success && (
                <div className="success-message">Login successful!</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
