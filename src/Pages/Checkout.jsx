import React, { useId, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useOrders } from "../Context/OrderContext";

const initialState = {
    formData: {
        fullName: "",
        mobile: "",
        email: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        paymentMethod: "Cash on Delivery"
    },

    errors: {}
};


function checkoutReducer(state, action) {

    switch (action.type) {

        case "UPDATE_FIELD":

            return {
                ...state,

                formData: {
                    ...state.formData,
                    [action.field]: action.value
                },

                errors: {
                    ...state.errors,
                    [action.field]: ""
                }
            };


        case "SET_ERRORS":

            return {
                ...state,
                errors: action.errors
            };


        case "RESET":

            return initialState;


        default:
            return state;
    }
}


export default function Checkout() {

    const navigate = useNavigate();
    

    const {
        cartItems,
        clearCart
    } = useCart();

    const { addOrder } = useOrders();


    const [state, dispatch] = useReducer(
        checkoutReducer,
        initialState
    );


    const fullNameId = useId();
    const mobileId = useId();
    const emailId = useId();
    const addressId = useId();
    const cityId = useId();
    const stateId = useId();
    const pincodeId = useId();


    /* Empty Cart */

    if (cartItems.length === 0) {

        return (

            <div className="status-message">

                <h2>Your Cart is Empty</h2>

                <p>
                    Add medicines to your cart before proceeding to checkout.
                </p>

                <button
                    className="details-button"
                    onClick={() => navigate("/medicines")}
                >
                    Browse Medicines
                </button>

            </div>

        );
    }


    /* Handle Input */

    const handleChange = (event) => {

        const {
            name,
            value
        } = event.target;


        dispatch({
            type: "UPDATE_FIELD",
            field: name,
            value: value
        });

    };


    /* Validation */

    const validateForm = () => {

        const errors = {};

        const {
            fullName,
            mobile,
            email,
            address,
            city,
            state: stateName,
            pincode
        } = state.formData;


        if (!fullName.trim()) {
            errors.fullName = "Full name is required.";
        }
        else if (fullName.trim().length < 3) {
            errors.fullName = "Name must contain at least 3 characters.";
        }


        if (!mobile.trim()) {
            errors.mobile = "Mobile number is required.";
        }
        else if (!/^[6-9]\d{9}$/.test(mobile)) {
            errors.mobile = "Enter a valid 10-digit mobile number.";
        }


        if (!email.trim()) {
            errors.email = "Email is required.";
        }
        else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ) {
            errors.email = "Enter a valid email address.";
        }


        if (!address.trim()) {
            errors.address = "Address is required.";
        }


        if (!city.trim()) {
            errors.city = "City is required.";
        }


        if (!stateName.trim()) {
            errors.state = "State is required.";
        }


        if (!pincode.trim()) {
            errors.pincode = "Pincode is required.";
        }
        else if (!/^\d{6}$/.test(pincode)) {
            errors.pincode = "Enter a valid 6-digit pincode.";
        }


        return errors;
    };


    /* Submit */

    const handleSubmit = (event) => {

        event.preventDefault();


        const validationErrors = validateForm();


        if (Object.keys(validationErrors).length > 0) {

            dispatch({
                type: "SET_ERRORS",
                errors: validationErrors
            });

            return;
        }


        /*
            Order is successfully placed.
            Clear cart and navigate to Orders page.
        */

        const order = {

            id: Date.now(),

            orderDate: new Date().toLocaleString(),

            customer: {
                ...state.formData
            },

            items: [...cartItems],

            status: "Order Placed"

        };


        addOrder(order);

        dispatch({
            type: "RESET"
        });

        clearCart();

        navigate("/orders");

    };


    return (

        <div className="checkout-page">

            <div className="checkout-container">


                {/* Heading */}

                <div className="checkout-heading">

                    <h1>Checkout</h1>

                    <p>
                        Enter your delivery details to place your order.
                    </p>

                </div>


                <form
                    className="checkout-form"
                    onSubmit={handleSubmit}
                >


                    {/* Full Name */}

                    <div className="form-group">

                        <label htmlFor={fullNameId}>
                            Full Name
                        </label>

                        <input
                            id={fullNameId}
                            type="text"
                            name="fullName"
                            value={state.formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                        />

                        {state.errors.fullName && (
                            <span className="form-error">
                                {state.errors.fullName}
                            </span>
                        )}

                    </div>


                    {/* Mobile */}

                    <div className="form-group">

                        <label htmlFor={mobileId}>
                            Mobile Number
                        </label>

                        <input
                            id={mobileId}
                            type="tel"
                            name="mobile"
                            value={state.formData.mobile}
                            onChange={handleChange}
                            placeholder="Enter your mobile number"
                        />

                        {state.errors.mobile && (
                            <span className="form-error">
                                {state.errors.mobile}
                            </span>
                        )}

                    </div>


                    {/* Email */}

                    <div className="form-group">

                        <label htmlFor={emailId}>
                            Email Address
                        </label>

                        <input
                            id={emailId}
                            type="email"
                            name="email"
                            value={state.formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                        />

                        {state.errors.email && (
                            <span className="form-error">
                                {state.errors.email}
                            </span>
                        )}

                    </div>


                    {/* Address */}

                    <div className="form-group">

                        <label htmlFor={addressId}>
                            Delivery Address
                        </label>

                        <textarea
                            id={addressId}
                            name="address"
                            value={state.formData.address}
                            onChange={handleChange}
                            placeholder="Enter your delivery address"
                            rows="4"
                        />

                        {state.errors.address && (
                            <span className="form-error">
                                {state.errors.address}
                            </span>
                        )}

                    </div>


                    {/* City + State */}

                    <div className="form-row">

                        <div className="form-group">

                            <label htmlFor={cityId}>
                                City
                            </label>

                            <input
                                id={cityId}
                                type="text"
                                name="city"
                                value={state.formData.city}
                                onChange={handleChange}
                                placeholder="City"
                            />

                            {state.errors.city && (
                                <span className="form-error">
                                    {state.errors.city}
                                </span>
                            )}

                        </div>


                        <div className="form-group">

                            <label htmlFor={stateId}>
                                State
                            </label>

                            <input
                                id={stateId}
                                type="text"
                                name="state"
                                value={state.formData.state}
                                onChange={handleChange}
                                placeholder="State"
                            />

                            {state.errors.state && (
                                <span className="form-error">
                                    {state.errors.state}
                                </span>
                            )}

                        </div>

                    </div>


                    {/* Pincode */}

                    <div className="form-group">

                        <label htmlFor={pincodeId}>
                            Pincode
                        </label>

                        <input
                            id={pincodeId}
                            type="text"
                            name="pincode"
                            value={state.formData.pincode}
                            onChange={handleChange}
                            placeholder="Enter 6-digit pincode"
                        />

                        {state.errors.pincode && (
                            <span className="form-error">
                                {state.errors.pincode}
                            </span>
                        )}

                    </div>


                    {/* Payment */}

                    <div className="form-group">

                        <label>
                            Payment Method
                        </label>

                        <select
                            name="paymentMethod"
                            value={state.formData.paymentMethod}
                            onChange={handleChange}
                        >

                            <option>
                                Cash on Delivery
                            </option>

                            <option>
                                Online Payment
                            </option>

                        </select>

                    </div>


                    {/* Submit */}

                    <button
                        type="submit"
                        className="place-order-button"
                    >
                        Place Order
                    </button>

                </form>

            </div>

        </div>

    );
}