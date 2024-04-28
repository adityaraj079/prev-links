import React, { useState, useEffect } from 'react';
import './Profiles.css'; // Import CSS file for Profiles component
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/get_names')
      .then(response => response.json())
      .then(data => setProfiles(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="container">
      <Sidebar />
      <main className="main-content">
        <header className="page-header">
          <h1>Profiles</h1>
        </header>
        <div className="profiles-container">
          {profiles.map((profile, index) => (
            <div className="profile-box" key={index}>
              <h2><a href={profile.url}>{profile.name}</a></h2>
              <img src={profile.url} alt={profile.name} />
              {/* Add additional profile information here */}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Profiles;
