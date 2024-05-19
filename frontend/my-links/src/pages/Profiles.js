import React, { useState, useEffect } from 'react';
import './Profiles.css'; // Import CSS file for Profiles component
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Pagination from './Pagination'; // Import Pagination component

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const profilesPerPage = 52; // Changed to constant value

  useEffect(() => {
    fetch('http://localhost:5000/get_names')
      .then(response => response.json())
      .then(data => setProfiles(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const shuffleArray = (array) => {
    // Implement a shuffling algorithm (e.g., Fisher-Yates shuffle)
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate indexes for current page
  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = profiles.slice(indexOfFirstProfile, indexOfLastProfile);

  return (
    <div className="container-fluid" style={{ backgroundImage: 'radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%)' }}>
      <div className="row justify-content-center">
        {/* Map over profiles array */}
        {currentProfiles.map((profile, index) => (
          <div className="col-md-4" key={index} style={{width:'300px', height:'450px'}}>
            <div className="shadow-lg p-3 mb-5 profiles-container rounded-4 justify-content-center" style={{ backgroundImage: 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)' }}>
              <Link to={`/profiles/${profile.id}`} class="link-opacity-75 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">
                <h2>{profile.name}</h2>
              </Link>
              <div id={`carousel${index}`} className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {shuffleArray([profile.image, profile.image1, profile.image2, profile.image3, profile.image4, profile.image5]).map((image, idx) => (
                    <div key={idx} className={`carousel-item ${idx === 0 ? 'active' : ''}`} style={{ backgroundImage: 'radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%)' }}>
                      <img src={image} className="d-block h-50 w-100" alt={profile.name} style={{ maxWidth: '100%', maxHeight: '300px' }} />
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={`#carousel${index}`} data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#carousel${index}`} data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination profilesPerPage={profilesPerPage} totalProfiles={profiles.length} paginate={paginate} />
    </div>
  );
}

export default Profiles;
