import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Profiles.css'; // Import CSS file for Profiles component
import Sidebar from '../components/Sidebar';

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const { id } = useParams();
  const { name } = useParams();

  useEffect(() => {
    // Fetch profile data using the profile ID from the URL parameter
    fetch(`http://localhost:5000/profiles/${id}`)
      .then(response => response.json())
      .then(data => setProfile(data))
      .catch(error => console.error('Error:', error));
  }, [id]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{profile.name}</h1>
      <p>{profile.bio}</p>
      <img src={profile.image} alt={profile.name} />
      {/* Display other profile details */}
    </div>
  );
}

export default ProfilePage;
