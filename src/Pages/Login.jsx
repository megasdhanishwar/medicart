import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const [showPassword, setShowPassword] = useState(false);

  const [message, setMessage] = useState("");


  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }));

    setMessage("");
  };


  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must contain at least 6 characters.";
    }

    return newErrors;
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      return;
    }

    localStorage.setItem("isLoggedIn", "true");

    window.dispatchEvent(new Event("loginStatusChanged"));

    setMessage("Login successful! Welcome to MediCart.");

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        {/* Logo */}

        <div className="login-logo">
          <span className="login-logo-icon">+</span>

          <span>MediCart</span>
        </div>

        {/* Heading */}

        <div className="login-heading">
          <h1>Welcome Back</h1>

          <p>Sign in to continue to MediCart.</p>
        </div>

        {/* Success Message */}

        {message && <div className="login-message">{message}</div>}

        {/* Form */}

        <form onSubmit={handleSubmit}>
          {/* Email */}

          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />

            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>

          {/* Password */}

          <div className="form-group">
            <label>Password</label>

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {errors.password && (
              <span className="form-error">{errors.password}</span>
            )}
          </div>

          {/* Login Button */}

          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>

        {/* Back */}

        <Link to="/" className="login-back">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
