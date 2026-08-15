import React, { createContext, useContext, useState } from "react";


// Create Context
const CartContext = createContext();


export function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState([]);


    // Add medicine to cart
    const addToCart = (medicine) => {

        setCartItems((previousItems) => {

            const existingMedicine = previousItems.find(
                (item) => item.id === medicine.id
            );


            // If medicine already exists
            if (existingMedicine) {

                return previousItems.map((item) =>
                    item.id === medicine.id
                        ? {
                            ...item,
                            quantity: item.quantity + 1
                        }
                        : item
                );

            }


            // If medicine does not exist
            return [
                ...previousItems,
                {
                    ...medicine,
                    quantity: 1
                }
            ];

        });

    };


    // Remove medicine
    const removeFromCart = (id) => {

        setCartItems((previousItems) =>
            previousItems.filter(
                (item) => item.id !== id
            )
        );

    };


    // Increase quantity
    const increaseQuantity = (id) => {

        setCartItems((previousItems) =>
            previousItems.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }
                    : item
            )
        );

    };


    // Decrease quantity
    const decreaseQuantity = (id) => {

        setCartItems((previousItems) =>
            previousItems
                .map((item) =>
                    item.id === id
                        ? {
                            ...item,
                            quantity: item.quantity - 1
                        }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );

    };


    // Clear cart
    const clearCart = () => {

        setCartItems([]);

    };


    return (

        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity,
                clearCart
            }}
        >

            {children}

        </CartContext.Provider>

    );

}


// Custom hook for using CartContext
export function useCart() {

    return useContext(CartContext);

}