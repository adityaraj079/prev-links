import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <i className="bi bi-link-45deg fs-4"></i>
          LinkShoarder
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                <i className="bi bi-house-door me-1"></i>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profiles">
                <i className="bi bi-people me-1"></i>
                Profiles
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-video">
                <i className="bi bi-plus-circle me-1"></i>
                Add Video
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-profile">
                <i className="bi bi-person-plus me-1"></i>
                Add Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
