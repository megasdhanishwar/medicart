import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import Medicines from "./Pages/Medicines";
import MedicineDetails from "./Pages/MedicineDetails";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Orders from "./Pages/Orders";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";

import "./App.css";


export default function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />


        {/* Medicines */}
        <Route
          path="/medicines"
          element={<Medicines />}
        />


        {/* Dynamic Medicine Details */}
        <Route
          path="/medicines/:id"
          element={<MedicineDetails />}
        />


        {/* Cart */}
        <Route
          path="/cart"
          element={<Cart />}
        />


        {/* Checkout */}
        <Route
          path="/checkout"
          element={<Checkout />}
        />


        {/* Orders */}
        <Route
          path="/orders"
          element={<Orders />}
        />


        {/* About */}
        <Route
          path="/about"
          element={<About />}
        />


        {/* Contact */}
        <Route
          path="/contact"
          element={<Contact />}
        />


        {/* 404 */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </BrowserRouter>

  );
}