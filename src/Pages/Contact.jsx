import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

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
  };

  const validateForm = () => {
    const newErrors = {};

    /* Name */

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must contain at least 3 characters.";
    }

    /* Email */

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    /* Message */

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must contain at least 10 characters.";
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

    alert("Your message has been sent successfully.");

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setErrors({});
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Left Side */}

        <div className="contact-info">
          <h1>Contact Us</h1>

          <p>
            Have a question about our medicines or your order? Get in touch with
            the MediCart team.
          </p>

          <div className="contact-detail">📍 Chennai, Tamil Nadu</div>

          <div className="contact-detail">📞 +91 98765 43210</div>

          <div className="contact-detail">✉️ support@medicart.com</div>
        </div>

        {/* Right Side */}

        <div className="contact-form-card">
          <form onSubmit={handleSubmit}>
            {/* Name */}

            <div className="form-group">
              <label>Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />

              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            {/* Email */}

            <div className="form-group">
              <label>Email</label>

              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />

              {errors.email && (
                <span className="form-error">{errors.email}</span>
              )}
            </div>

            {/* Message */}

            <div className="form-group">
              <label>Message</label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                rows="5"
              />

              {errors.message && (
                <span className="form-error">{errors.message}</span>
              )}
            </div>

            {/* Button */}

            <button type="submit" className="contact-submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
