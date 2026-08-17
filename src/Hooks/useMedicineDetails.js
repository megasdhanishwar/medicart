import { useEffect, useState } from "react";

export default function useMedicineDetails(id) {
  const [medicine, setMedicine] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setMedicine(null);

    fetch(`https://api.fda.gov/drug/label.json?search=openfda.spl_set_id:${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Medicine not found");
        }

        return response.json();
      })
      .then((data) => {
        if (!data.results || data.results.length === 0) {
          throw new Error("Medicine not found");
        }

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
    error,
  };
}
