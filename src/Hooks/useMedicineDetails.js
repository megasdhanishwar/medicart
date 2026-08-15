import { useEffect, useState } from "react";

export default function useMedicineDetails(id) {

    const [medicine, setMedicine] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

        fetch(
            `https://api.fda.gov/drug/label.json?search=openfda.spl_set_id:${id}`
        )
            .then((response) => {

                if (!response.ok) {
                    throw new Error("Medicine not found");
                }

                return response.json();
            })
            .then((data) => {

                setMedicine(data.results[0]);
                setLoading(false);

            })
            .catch((error) => {

                console.log(error);

                setError(true);
                setLoading(false);

            });

    }, [id]);

    return {
        medicine,
        loading,
        error
    };
}