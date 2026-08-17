import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="footer-logo-icon">+</span>
            MediCart
          </Link>

          <p>
            Simple and convenient medicine information and online healthcare
            shopping.
          </p>
        </div>

        {/* Quick Links */}

        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/medicines">Medicines</Link>

          <Link to="/orders">Orders</Link>

          <Link to="/about">About</Link>
        </div>

        {/* Support */}

        <div className="footer-links">
          <h3>Support</h3>

          <Link to="/contact">Contact Us</Link>

          <Link to="/cart">Cart</Link>
        </div>
      </div>

      {/* Bottom */}

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MediCart. All rights reserved.</p>
      </div>
    </footer>
  );
}
