import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Pagination from './Pagination'; // Import Pagination component

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const profilesPerPage = 52; // Changed to constant value

  useEffect(() => {
    fetch('https://links-backend-six.vercel.app/get_names')
    // fetch('http://localhost:5000/get_names') 
      .then(response => response.json())
      .then(data => setProfiles(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate indexes for current page
  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = profiles.slice(indexOfFirstProfile, indexOfLastProfile);

  return (
    <div className="container-fluid bg-dark text-white py-4 min-vh-100">
      <div className="container">
        <h2 className="text-center mb-4">Profiles</h2>
        <div className="row g-4">
          {currentProfiles.map((profile, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
              <div className="card bg-secondary text-white h-100 border-0">
                <div className="card-body d-flex flex-column text-center">
                  <Link to={`/profiles/${profile.id}`} className="text-decoration-none text-white">
                    <h6 className="card-title">{profile.name}</h6>
                  </Link>
                  {profile.picture ? (
                    <img src={profile.picture} alt={profile.name} className="card-img-bottom rounded-circle mx-auto mt-auto" style={{ height: '150px', width: '150px', objectFit: 'cover' }} />
                  ) : (
                    <div className="bg-dark rounded-circle d-flex align-items-center justify-content-center mx-auto mt-auto" style={{ height: '150px', width: '150px' }}>
                      <i className="bi bi-person fs-1 text-muted"></i>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-4">
          <Pagination profilesPerPage={profilesPerPage} totalProfiles={profiles.length} paginate={paginate} />
        </div>
      </div>
    </div>
  );
}

export default Profiles;
