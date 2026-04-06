import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Fetch profile data using the profile ID from the URL parameter
    fetch(`https://links-backend-six.vercel.app/profile/${id}`)
      .then(response => response.json())
      .then(data => setProfile(data))
      .catch(error => console.error('Error:', error));
  }, [id]);

  if (!profile) {
    return (
      <div className="container-fluid bg-dark text-white min-vh-100 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid bg-dark text-white py-4 min-vh-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card bg-secondary border-0">
              <div className="card-body text-center">
                <h1 className="card-title mb-4">{profile.name}</h1>
                {profile.picture && (
                  <img src={profile.picture} alt={profile.name} className="rounded-circle mb-4" style={{ height: '200px', width: '200px', objectFit: 'cover' }} />
                )}
                <p className="card-text">Profile details coming soon...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
