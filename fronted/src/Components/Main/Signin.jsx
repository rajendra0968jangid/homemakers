import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Signin() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    // Handle signup logic here
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("http://localhost:8000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.status != 201) {
        throw new Error("Failed to sign up");
      }

      const result = await response.json();
      setSuccess(true);
      // console.log("Signup successful:", result);
    } catch (error) {
      setError(error.message);
    }
    // console.log("Signup submitted", formData);
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
        Sign in
      </h1>
      <div className="form-container">
        <div className="form signup-form">
          <h2>Signup</h2>
          <form onSubmit={handleSignupSubmit}>
            <div className="input-group">
              <label>Name</label>
              <input
                type="text"
                required
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
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
              Signup
            </button>
            <div className="toggle-link">
              Already have an account? <NavLink to="/login">Login</NavLink>
            </div>
            {error && <div className="error-message">{error}</div>}
            {success && (
              <div className="success-message">Signup successful!</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
