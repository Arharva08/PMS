import React from 'react';
import { User, Mail, Phone, MapPin, CheckCircle2, Settings, Edit3 } from 'lucide-react';

function App() {
  return (
    <div className="container-fluid bg-light py-4">
      <div className="row">
        <div className="col-12">
          <div className="card border-0 shadow">
            {/* Header */}
            <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
              <h4 className="mb-0">Profile Management</h4>
              <div>
                <button className="btn btn-outline-light me-2">
                  <Edit3 className="me-2" size={16} />
                  Edit Profile
                </button>
                <button className="btn btn-outline-light">
                  <Settings className="me-2" size={16} />
                  Settings
                </button>
              </div>
            </div>

            {/* Profile Content */}
            <div className="card-body">
              <div className="row">
                {/* Profile Sidebar */}
                <div className="col-md-4 text-center">
                  <div className="position-relative d-inline-block mb-3">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80"
                      alt="Profile"
                      className="rounded-circle border border-4 border-primary shadow"
                      style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                    />
                    <span className="position-absolute bottom-0 end-0 p-2 bg-success rounded-circle">
                      <CheckCircle2 className="text-white" size={24} />
                    </span>
                  </div>
                  <h3 className="fw-bold mb-1">John Doe</h3>
                  <p className="text-primary">Property Manager</p>
                </div>

                {/* Profile Details */}
                <div className="col-md-8">
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="card h-100">
                        <div className="card-body d-flex align-items-center">
                          <User className="text-primary" size={32} />
                          <div className="ms-3">
                            <small className="text-muted text-uppercase">Full Name</small>
                            <h6 className="mb-0">John Doe</h6>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="card h-100">
                        <div className="card-body d-flex align-items-center">
                          <Mail className="text-primary" size={32} />
                          <div className="ms-3">
                            <small className="text-muted text-uppercase">Email</small>
                            <h6 className="mb-0">johndoe@email.com</h6>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="card h-100">
                        <div className="card-body d-flex align-items-center">
                          <Phone className="text-primary" size={32} />
                          <div className="ms-3">
                            <small className="text-muted text-uppercase">Phone</small>
                            <h6 className="mb-0">+91 98765 43210</h6>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="card h-100">
                        <div className="card-body d-flex align-items-center">
                          <MapPin className="text-primary" size={32} />
                          <div className="ms-3">
                            <small className="text-muted text-uppercase">Location</small>
                            <h6 className="mb-0">Mumbai, India</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats Section */}
                  <div className="row mt-4 g-4">
                    <div className="col-md-4">
                      <div className="card bg-primary bg-opacity-10 border-0">
                        <div className="card-body text-center">
                          <h4 className="text-primary mb-1">12</h4>
                          <small className="text-muted text-uppercase">Total Listings</small>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="card bg-success bg-opacity-10 border-0">
                        <div className="card-body text-center">
                          <h4 className="text-success mb-1">8</h4>
                          <small className="text-muted text-uppercase">Active Listings</small>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="card bg-warning bg-opacity-10 border-0">
                        <div className="card-body text-center">
                          <h4 className="text-warning mb-1">Mar 2024</h4>
                          <small className="text-muted text-uppercase">Joined</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;