import React from "react";

export default function About() {
  return (
    <div className="about-page">

      <div className="about-heading">
        <h1>About MediCart</h1>

        <p>
          Your simple and convenient way to explore medicines and manage your
          healthcare needs.
        </p>
      </div>


      <div className="about-section">
        <h2>What We Provide</h2>

        <div className="about-cards">
          <div className="about-card">
            <div className="about-card-icon">💊</div>

            <h3>Medicine Information</h3>

            <p>
              Explore detailed information about medicines, including their
              generic name, manufacturer, dosage form, and usage information.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-icon">🔍</div>

            <h3>Easy Search</h3>

            <p>
              Quickly search for medicines by name and find the information you
              need with ease.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-icon">🛒</div>

            <h3>Easy Shopping</h3>

            <p>
              Add medicines to your cart, manage quantities, and review your
              selected medicines before checkout.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-icon">📦</div>

            <h3>Order Management</h3>

            <p>
              Place orders conveniently and view your order details and
              previously placed orders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
