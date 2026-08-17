import React from "react";
import { Link } from "react-router-dom";
import { useOrders } from "../Context/OrderContext";

export default function Orders() {
  const { orders } = useOrders();

  // No Orders

  if (orders.length === 0) {
    return (
      <div className="orders-page">
        <div className="empty-orders">
          <div className="empty-orders-icon">📦</div>

          <h1>No Orders Yet</h1>

          <p>Your placed orders will appear here.</p>

          <Link to="/medicines" className="details-button">
            Browse Medicines
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <div className="orders-container">
        <div className="orders-heading">
          <h1>My Orders</h1>

          <p>View your recently placed medicine orders.</p>
        </div>

        <div className="orders-list">
          {orders.map((order) => (
            <div className="order-card" key={order.id}>
              <div className="order-info">
                <span>Order ID</span>

                <strong>#{order.id}</strong>
              </div>

              <div className="order-info">
                <span>Order Date</span>

                <strong>{order.orderDate}</strong>
              </div>

              <div className="order-info">
                <span>Items</span>

                <strong>{order.items.length}</strong>
              </div>

              <div className="order-status">{order.status}</div>

              <Link to={`/orders/${order.id}`} className="view-order-button">
                View Order
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
