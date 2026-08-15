import React from "react";
import { Link } from "react-router-dom";

export default function MedicineCard({ medicine }) {

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

    // Get unique medicine ID from FDA API
    const medicineId =
        medicine.openfda?.spl_set_id?.[0];

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

                {medicineId && (
                    <div className="button-container">
                        <Link
                            to={`/medicines/${medicineId}`}
                            className="details-button"
                        >
                            View Details
                        </Link>
                    </div>
                )}

            </div>

        </div>
    );
}