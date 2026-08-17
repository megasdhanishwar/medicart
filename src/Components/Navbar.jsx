import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

export default function Navbar() {
  const navigate = useNavigate();

  const { cartItems } = useCart();

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true",
  );

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateLoginStatus = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    window.addEventListener("loginStatusChanged", updateLoginStatus);

    return () => {
      window.removeEventListener("loginStatusChanged", updateLoginStatus);
    };
  }, []);

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      localStorage.removeItem("isLoggedIn");

      setIsLoggedIn(false);
    } else {
      navigate("/login");
    }

    setMenuOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}

        <NavLink to="/" className="logo" onClick={closeMenu}>
          <span className="logo-icon">+</span>
          MediCart
        </NavLink>

        {/* Desktop Navigation */}

        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>

          <NavLink to="/medicines" className="nav-link">
            Medicines
          </NavLink>

          <NavLink to="/orders" className="nav-link">
            Orders
          </NavLink>

          <NavLink to="/about" className="nav-link">
            About
          </NavLink>

          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </div>

        {/* Desktop Actions */}

        <div className="navbar-actions">
          <NavLink to="/cart" className="cart-button">
            🛒 Cart
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>
            )}
          </NavLink>

          <button className="login-nav-button" onClick={handleLoginLogout}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>

        {/* Hamburger */}

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="mobile-menu">
          <NavLink to="/" className="mobile-nav-link" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink
            to="/medicines"
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            Medicines
          </NavLink>

          <NavLink to="/orders" className="mobile-nav-link" onClick={closeMenu}>
            Orders
          </NavLink>

          <NavLink to="/about" className="mobile-nav-link" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink
            to="/contact"
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            Contact
          </NavLink>

          <NavLink to="/cart" className="mobile-nav-link" onClick={closeMenu}>
            🛒 Cart
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>
            )}
          </NavLink>

          {/* Login / Logout inside mobile menu */}

          <button className="mobile-login-button" onClick={handleLoginLogout}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      )}
    </nav>
  );
}
