import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="container-fluid bg-dark text-white min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h1 className="display-4 fw-bold mb-4">Welcome to LinkShoarder</h1>
            <p className="lead mb-5">
              Discover and manage your favorite video links and profiles in one place.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Link to="/home" className="btn btn-primary btn-lg">
                <i className="bi bi-house-door me-2"></i>
                Explore Videos
              </Link>
              <Link to="/profiles" className="btn btn-outline-light btn-lg">
                <i className="bi bi-people me-2"></i>
                Browse Profiles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;