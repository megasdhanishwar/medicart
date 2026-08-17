import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

export default function Cart() {

    const {
        cartItems,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart
    } = useCart();


    // Empty cart

    if (cartItems.length === 0) {

        return (

            <div className="cart-page">

                <div className="empty-cart">

                    <div className="empty-cart-icon">
                        🛒
                    </div>

                    <h1>Your Cart is Empty</h1>

                    <p>
                        You haven't added any medicines to your cart yet.
                    </p>

                    <Link
                        to="/medicines"
                        className="details-button"
                    >
                        Browse Medicines
                    </Link>

                </div>

            </div>

        );

    }


    return (

        <div className="cart-page">

            <div className="cart-container">


                {/* Page Heading */}

                <div className="cart-heading">

                    <h1>Your Cart</h1>

                    <p>
                        Review your selected medicines before checkout.
                    </p>

                </div>


                {/* Cart Items */}

                <div className="cart-items">

                    {cartItems.map((medicine) => {

                        const medicineName =
                            medicine.openfda?.brand_name?.[0] ||
                            medicine.openfda?.generic_name?.[0] ||
                            "Medicine";


                        const manufacturer =
                            medicine.openfda?.manufacturer_name?.[0] ||
                            "Unknown Manufacturer";


                        return (

                            <div
                                className="cart-item"
                                key={medicine.id}
                            >


                                {/* Medicine Image */}

                                <div className="cart-item-image">
                                    💊
                                </div>


                                {/* Medicine Information */}

                                <div className="cart-item-info">

                                    <h2>
                                        {medicineName}
                                    </h2>

                                    <p>
                                        {manufacturer}
                                    </p>

                                </div>


                                {/* Quantity */}

                                <div className="quantity-control">

                                    <button
                                        onClick={() =>
                                            decreaseQuantity(medicine.id)
                                        }
                                    >
                                        −
                                    </button>

                                    <span>
                                        {medicine.quantity}
                                    </span>

                                    <button
                                        onClick={() =>
                                            increaseQuantity(medicine.id)
                                        }
                                    >
                                        +
                                    </button>

                                </div>


                                {/* Remove */}

                                <button
                                    className="remove-button"
                                    onClick={() =>
                                        removeFromCart(medicine.id)
                                    }
                                >
                                    Remove
                                </button>

                            </div>

                        );

                    })}

                </div>


                {/* Cart Actions */}

                <div className="cart-actions">

                    <button
                        className="clear-cart-button"
                        onClick={clearCart}
                    >
                        Clear Cart
                    </button>


                    <Link
                        to="/checkout"
                        className="checkout-button"
                    >
                        Proceed to Checkout
                    </Link>

                </div>

            </div>

        </div>

    );

}