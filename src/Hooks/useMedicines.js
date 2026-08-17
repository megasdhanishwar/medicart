import React from "react";
import { useEffect, useState } from "react";

export default function useMedicines() {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.fda.gov/drug/label.json?search=openfda.product_type:%22HUMAN%20OTC%20DRUG%22&limit=20",
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch medicines");
        }

        return response.json();
      })
      .then((data) => {
        setMedicines(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);

        setError(true);
        setLoading(false);
      });
  }, []);

  return {
    medicines,
    loading,
    error,
  };
}
