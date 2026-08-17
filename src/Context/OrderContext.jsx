import React, { createContext, useContext, useState } from "react";

// Create Context

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);

  // Add new order

  const addOrder = (order) => {
    setOrders((previousOrders) => [...previousOrders, order]);
  };

  // Clear all orders

  const clearOrders = () => {
    setOrders([]);
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder,
        clearOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

// Custom hook

export function useOrders() {
  return useContext(OrderContext);
}
