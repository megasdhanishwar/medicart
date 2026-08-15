import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-container">

        {/* Logo */}
        <NavLink to="/" className="logo">
          <span className="logo-icon">+</span>
          MediCart
        </NavLink>


        {/* Navigation Links */}
        <div className="nav-links">

          <NavLink to="/" className="nav-link">
            Home
          </NavLink>

          <NavLink to="/medicines" className="nav-link">
            Medicines
          </NavLink>

          <NavLink to="/about" className="nav-link">
            About
          </NavLink>

          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>

        </div>


        {/* Cart */}
        <NavLink to="/cart" className="cart-button">
          🛒 Cart
        </NavLink>

      </div>

    </nav>
  );
}