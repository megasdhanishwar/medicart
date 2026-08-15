import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page">

      {/* Hero Section */}

      <section className="hero-section">

        <div className="hero-content">

          <p className="hero-small-text">
            YOUR HEALTH, OUR PRIORITY
          </p>

          <h1>
            Healthcare made
            <span> simple.</span>
          </h1>

          <p className="hero-description">
            Explore medicines and healthcare products
            from the comfort of your home.
          </p>

          <Link
            to="/medicines"
            className="hero-button"
          >
            Explore Medicines
          </Link>

        </div>


        <div className="hero-image">

          <div className="hero-circle">
            💊
          </div>

        </div>

      </section>


      {/* Features */}

      <section className="features-section">

        <h2>Why Choose MediCart?</h2>

        <div className="features-grid">

          <div className="feature-card">

            <div className="feature-icon">
              ✓
            </div>

            <h3>Trusted Information</h3>

            <p>
              Access reliable medicine information
              from trusted sources.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              ⚡
            </div>

            <h3>Easy Shopping</h3>

            <p>
              Search, explore and manage your
              medicines with ease.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              🛡
            </div>

            <h3>Secure Experience</h3>

            <p>
              A simple and secure shopping
              experience for your needs.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}