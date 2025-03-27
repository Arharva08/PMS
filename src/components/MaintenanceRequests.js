// import React, { useState } from "react";

// const MaintenanceRequests = ({ isOwner }) => {
//   const [showSearch, setShowSearch] = useState(false);
//   const [newRequest, setNewRequest] = useState("");

//   return (
//     <div className="container mt-4">
//       {/* Page Header */}
//       <div className="d-flex justify-content-between align-items-center mb-4 p-3 bg-light rounded shadow-sm">
//         <h2 className="text-primary fw-bold">🛠 Maintenance Requests</h2>

//         {/* Only show "New Request" button for Renters */}
//         {!isOwner && (
//           <button
//             className="btn btn-dark btn-lg shadow-sm"
//             onClick={() => setShowSearch(true)}
//           >
//             + New Request
//           </button>
//         )}
//       </div>

//       {/* Search Bar for new requests */}
//       {showSearch && (
//         <div className="card shadow-sm p-3 mb-4 border-primary">
//           <div className="d-flex align-items-center">
//             <input
//               type="text"
//               className="form-control me-2 border-primary"
//               placeholder="Enter maintenance request..."
//               value={newRequest}
//               onChange={(e) => setNewRequest(e.target.value)}
//             />
//             <button className="btn btn-primary me-2">Submit</button>
//             <button
//               className="btn btn-outline-danger btn-sm"
//               onClick={() => setShowSearch(false)}
//             >
//               ❌
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Requests Table */}
//       <div className="card shadow-lg border-0 rounded-4 bg-light">
//         <div className="card-body p-4">
//           <div className="table-responsive">
//             <table className="table table-hover text-center align-middle">
//               <thead className="table-dark text-white">
//                 <tr>
//                   <th>#</th>
//                   <th>Request Title</th>
//                   <th>Status</th>
//                   {isOwner && <th>Actions</th>}  {/* Show Actions only for Owners */}
//                 </tr>
//               </thead>
//               <tbody className="table-light">
//                 <tr>
//                   <td>1</td>
//                   <td>Leaking Pipe</td>
//                   <td><span className="badge bg-warning text-dark">Pending</span></td>
//                   {isOwner && (
//                     <td>
//                       <button className="btn btn-outline-success btn-sm me-2">Complete</button>
//                       <button className="btn btn-outline-danger btn-sm">Delete</button>
//                     </td>
//                   )}
//                 </tr>
//                 <tr>
//                   <td>2</td>
//                   <td>Broken Door Lock</td>
//                   <td><span className="badge bg-info text-dark">In Progress</span></td>
//                   {isOwner && (
//                     <td>
//                       <button className="btn btn-outline-success btn-sm me-2">Complete</button>
//                       <button className="btn btn-outline-danger btn-sm">Delete</button>
//                     </td>
//                   )}
//                 </tr>
//                 <tr>
//                   <td>3</td>
//                   <td>Faulty AC</td>
//                   <td><span className="badge bg-success">Resolved</span></td>
//                   {isOwner && (
//                     <td>
//                       <button className="btn btn-outline-secondary btn-sm" disabled>✔ Completed</button>
//                     </td>
//                   )}
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MaintenanceRequests;

import React, { useState } from "react";

const MaintenanceRequests = ({ isOwner }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [newRequest, setNewRequest] = useState("");

  return (
    <div className="container py-4  ">
      <form className="bg-white shadow-lg rounded-4 overflow-hidden">
        {/* Page Header */}
        <div className="bg-light p-4 border-bottom">
          <div className="row align-items-center">
            <div className="col-md-8 d-flex align-items-center">
              <h2 className="text-primary me-4 d-flex align-items-center mb-0">
                <span className="me-2">🛠</span>
                <span className="fw-bold">Maintenance Requests</span>
              </h2>

              {/* Responsive Filter Buttons */}
              <div className="dropdown shadow-sm">
                <button
                  className="btn btn-sm btn-outline-primary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Filter
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <button className="dropdown-item active">All</button>
                  </li>
                  <li>
                    <button className="dropdown-item">Pending</button>
                  </li>
                  <li>
                    <button className="dropdown-item">In Progress</button>
                  </li>
                  <li>
                    <button className="dropdown-item">Resolved</button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4 text-end">
              {!isOwner && (
                <button
                  type="button"
                  className="btn btn-primary btn-lg shadow"
                  onClick={() => setShowSearch(true)}
                >
                  <i className="bi bi-plus-circle me-2"></i>
                  New Request
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {showSearch && (
          <div className="p-4 border-bottom">
            <div className="input-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Describe your maintenance issue..."
                value={newRequest}
                onChange={(e) => setNewRequest(e.target.value)}
              />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowSearch(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Requests Table */}
        <div className="table-responsive">
          <table className="table table-striped table-hover mb-0">
            <thead className="table-dark">
              <tr>
                <th className="text-center">#</th>
                <th>Request Title</th>
                <th className="text-center">Status</th>
                <th className="text-center">Priority</th>
                {isOwner && <th className="text-center">Actions</th>}
              </tr>
            </thead>
            <tbody>
              {/* Placeholder for API-driven data */}
              <tr className="text-center">
                <td colSpan={isOwner ? 5 : 4} className="text-muted py-4">
                  No maintenance requests available
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="bg-light p-3 text-center border-top">
          <small className="text-muted">
            All maintenance requests are processed in the order received.
          </small>
        </div>
      </form>
    </div>
  );
};

export default MaintenanceRequests;
