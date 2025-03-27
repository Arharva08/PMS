import React from "react";

const PropertyManagement = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center bg-black fw-bold text-uppercase text-white">Lease Management</h2>

      {/* Filters Section */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
        {/* Filter Buttons */}
        <div className="btn-group gap-2">
          <button className="btn btn-primary rounded-pill px-4 fw-semibold shadow">All</button>
          <button className="btn btn-success rounded-pill px-4 fw-semibold shadow">Active</button>
          <button className="btn btn-secondary rounded-pill px-4 fw-semibold shadow">Expired</button>
          <button className="btn btn-warning rounded-pill px-4 fw-semibold shadow">Upcoming</button>
        </div>

        {/* Sort Dropdown */}
        <select className="form-select w-auto shadow-sm border-0 rounded-pill fw-semibold">
          <option selected>Newest</option>
          <option>Oldest</option>
        </select>
      </div>

      {/* Property Cards Section */}
      <div className="row g-4">
        {[
          {
            title: "Ambarrukmo Square",
            address: "3650 E Ambarrukmo St, Jogja 85032",
            status: "Active",
            badgeClass: "bg-success",
            action: "View Details",
          },
          {
            title: "The Wetan Kali",
            address: "3235 D Jogja, Jogja 85018",
            status: "Expired",
            badgeClass: "bg-danger",
            action: "Renew Lease",
          },
          {
            title: "Prawira Valley",
            address: "3825 E Prawirotaman, Jogja 85018",
            status: "Upcoming",
            badgeClass: "bg-warning",
            action: "Schedule Visit",
          },
        ].map((property, index) => (
          <div key={index} className="col-md-4">
            <div className="card shadow border-0 rounded-4 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg"
                className="card-img-top rounded-top-4"
                alt="Property"
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{property.title}</h5>
                <p className="card-text text-muted">{property.address}</p>
                <span className={`badge ${property.badgeClass} p-2`}>
                  {property.status}
                </span>
                <div className="mt-3">
                  <button className="btn btn-outline-primary w-100 fw-bold">
                    {property.action}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyManagement;
