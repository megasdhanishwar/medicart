import React from "react";
import { Link, useParams } from "react-router-dom";
import useMedicineDetails from "../Hooks/useMedicineDetails";

export default function MedicineDetails() {

    const { id } = useParams();

    const {
        medicine,
        loading,
        error
    } = useMedicineDetails(id);


    /* Loading */

    if (loading) {

        return (

            <div className="status-message">

                <h2>Loading medicine details...</h2>

                <p>
                    Please wait while we fetch the information.
                </p>

            </div>

        );
    }


    /* Error */

    if (error || !medicine) {

        return (

            <div className="status-message error">

                <h2>Unable to fetch medicine details.</h2>

                <p>
                    The requested medicine could not be found.
                </p>

                <Link
                    to="/medicines"
                    className="details-button"
                >
                    Back to Medicines
                </Link>

            </div>

        );
    }


    /* Extract data */

    const medicineName =
        medicine.openfda?.brand_name?.[0] ||
        medicine.openfda?.generic_name?.[0] ||
        "Medicine";


    const genericName =
        medicine.openfda?.generic_name?.[0] ||
        "Not Available";


    const manufacturer =
        medicine.openfda?.manufacturer_name?.[0] ||
        "Unknown Manufacturer";


    const dosageForm =
        medicine.openfda?.dosage_form?.[0] ||
        "Not Available";


    const route =
        medicine.openfda?.route?.[0] ||
        "Not Available";


    const purpose =
        medicine.purpose?.[0] ||
        "Not Available";


    const warnings =
        medicine.warnings?.[0] ||
        "No warning information available.";


    const directions =
        medicine.directions?.[0] ||
        "No direction information available.";


    return (

        <div className="medicine-details-page">

            <div className="medicine-details-container">


                {/* Back Button */}

                <Link
                    to="/medicines"
                    className="back-link"
                >
                    ← Back to Medicines
                </Link>


                {/* Header */}

                <div className="medicine-details-header">

                    <div className="details-image">
                        💊
                    </div>


                    <div className="details-title">

                        <p className="details-label">
                            MEDICINE INFORMATION
                        </p>

                        <h1>{medicineName}</h1>

                        <p>
                            {genericName}
                        </p>

                    </div>

                </div>


                {/* Basic Information */}

                <div className="details-section">

                    <h2>Basic Information</h2>


                    <div className="details-grid">

                        <div className="detail-item">

                            <span>
                                Manufacturer
                            </span>

                            <strong>
                                {manufacturer}
                            </strong>

                        </div>


                        <div className="detail-item">

                            <span>
                                Dosage Form
                            </span>

                            <strong>
                                {dosageForm}
                            </strong>

                        </div>


                        <div className="detail-item">

                            <span>
                                Route
                            </span>

                            <strong>
                                {route}
                            </strong>

                        </div>


                        <div className="detail-item">

                            <span>
                                Generic Name
                            </span>

                            <strong>
                                {genericName}
                            </strong>

                        </div>

                    </div>

                </div>


                {/* Purpose */}

                <div className="details-section">

                    <h2>Purpose</h2>

                    <p>
                        {purpose}
                    </p>

                </div>


                {/* Directions */}

                <div className="details-section">

                    <h2>Directions</h2>

                    <p>
                        {directions}
                    </p>

                </div>


                {/* Warnings */}

                <div className="details-section warning-section">

                    <h2>Warnings</h2>

                    <p>
                        {warnings}
                    </p>

                </div>


            </div>

        </div>

    );
}