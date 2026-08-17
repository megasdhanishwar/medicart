import React from "react";
import { useSearchParams } from "react-router-dom";

import useMedicines from "../Hooks/useMedicines";
import MedicineCard from "../Components/MedicineCard";

export default function Medicines() {
  const { medicines, loading, error } = useMedicines();

  // useSearchParams

  const [searchParams, setSearchParams] = useSearchParams();

  // Get search value from URL

  const searchValue = searchParams.get("name") || "";

  // Handle search

  const handleSearch = (event) => {
    const value = event.target.value;

    if (value) {
      setSearchParams({
        name: value,
      });
    } else {
      setSearchParams({});
    }
  };

  // Filter medicines

  const filteredMedicines = medicines.filter((medicine) => {
    const medicineName =
      medicine.openfda?.brand_name?.[0] ||
      medicine.openfda?.generic_name?.[0] ||
      "";

    return medicineName.toLowerCase().includes(searchValue.toLowerCase());
  });

  // Loading

  if (loading) {
    return (
      <div className="status-message">
        <h2>Loading medicines...</h2>

        <p>Please wait while we fetch the medicines.</p>
      </div>
    );
  }

  // Error

  if (error) {
    return (
      <div className="status-message error">
        <h2>Unable to fetch medicines.</h2>

        <p>Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="medicines-page">
      {/* Page Heading */}

      <div className="page-heading">
        <h1>Our Medicines</h1>

        <p>Explore medicines and healthcare products available at MediCart.</p>
      </div>

      {/* Search */}

      <div className="medicine-search">
        <input
          type="text"
          placeholder="Search medicine..."
          value={searchValue}
          onChange={handleSearch}
        />
      </div>

      {/* Medicine Grid */}

      {filteredMedicines.length > 0 ? (
        <div className="medicine-grid">
          {filteredMedicines.map((medicine, index) => (
            <MedicineCard key={index} medicine={medicine} />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <h2>No medicines found.</h2>

          <p>Try searching with a different medicine name.</p>
        </div>
      )}
    </div>
  );
}
