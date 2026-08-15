import React from "react";
import { Link } from "react-router-dom";

import { useCart } from "../Context/CartContext";


export default function MedicineCard({ medicine }) {

    const { addToCart } = useCart();


    const medicineName =
        medicine.openfda?.brand_name?.[0] ||
        medicine.openfda?.generic_name?.[0] ||
        "Medicine";


    const manufacturer =
        medicine.openfda?.manufacturer_name?.[0] ||
        "Unknown Manufacturer";


    const dosageForm =
        medicine.openfda?.dosage_form?.[0] ||
        "Not Available";


    const medicineId =
        medicine.openfda?.spl_set_id?.[0];


    const handleAddToCart = () => {

        addToCart({
            id: medicineId,
            name: medicineName,
            manufacturer: manufacturer,
            dosageForm: dosageForm
        });

        alert(`${medicineName} added to cart`);

    };


    return (

        <div className="medicine-card">

            <div className="medicine-image">
                💊
            </div>


            <div className="medicine-content">

                <h2>{medicineName}</h2>


                <p>
                    <strong>Manufacturer:</strong>{" "}
                    {manufacturer}
                </p>


                <p>
                    <strong>Dosage Form:</strong>{" "}
                    {dosageForm}
                </p>


                <div className="medicine-buttons">

                    <Link
                        to={`/medicines/${medicineId}`}
                        className="view-button"
                    >
                        View Details
                    </Link>


                    <button
                        className="cart-button"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>

                </div>

            </div>

        </div>

    );
}