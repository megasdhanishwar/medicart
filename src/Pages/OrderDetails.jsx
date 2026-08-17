import React from "react";
import { Link, useParams } from "react-router-dom";
import { useOrders } from "../Context/OrderContext";

export default function OrderDetails() {
  const { id } = useParams();

  const { orders } = useOrders();

  const order = orders.find((item) => item.id.toString() === id);

  // Order not found

  if (!order) {
    return (
      <div className="status-message error">
        <h2>Order Not Found</h2>

        <p>The requested order could not be found.</p>

        <Link to="/orders" className="details-button">
          Back to Orders
        </Link>
      </div>
    );
  }

  return (
    <div className="order-details-page">
      <div className="order-details-container">
        <Link to="/orders" className="back-link">
          ← Back to Orders
        </Link>

        <div className="order-details-header">
          <div>
            <p className="details-label">ORDER DETAILS</p>

            <h1>Order #{order.id}</h1>

            <p>{order.orderDate}</p>
          </div>

          <span className="order-status">{order.status}</span>
        </div>

        {/* Customer Information */}

        <div className="order-details-section">
          <h2>Delivery Information</h2>

          <div className="customer-details">
            <p>
              <strong>Name:</strong> {order.customer.fullName}
            </p>

            <p>
              <strong>Mobile:</strong> {order.customer.mobile}
            </p>

            <p>
              <strong>Email:</strong> {order.customer.email}
            </p>

            <p>
              <strong>Address:</strong> {order.customer.address}
            </p>

            <p>
              <strong>City:</strong> {order.customer.city}
            </p>

            <p>
              <strong>State:</strong> {order.customer.state}
            </p>

            <p>
              <strong>Pincode:</strong> {order.customer.pincode}
            </p>

            <p>
              <strong>Payment:</strong> {order.customer.paymentMethod}
            </p>
          </div>
        </div>

        {/* Ordered Medicines */}

        <div className="order-details-section">
          <h2>Ordered Medicines</h2>

          <div className="ordered-items">
            {order.items.map((medicine) => {
              const medicineName =
                medicine.openfda?.brand_name?.[0] ||
                medicine.openfda?.generic_name?.[0] ||
                "Medicine";

              const manufacturer =
                medicine.openfda?.manufacturer_name?.[0] ||
                "Unknown Manufacturer";

              return (
                <div className="ordered-item" key={medicine.id}>
                  <div className="ordered-item-image">💊</div>

                  <div className="ordered-item-info">
                    <h3>{medicineName}</h3>

                    <p>{manufacturer}</p>
                  </div>

                  <div className="ordered-item-quantity">
                    Quantity: <strong>{medicine.quantity}</strong>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
