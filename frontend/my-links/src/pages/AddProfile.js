import React, { useState } from 'react';
import axios from 'axios';

const AddProfile = () => {
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://links-backend-six.vercel.app/add_profile', {
        name,
        picture
      });
      setMessage('Profile added successfully!');
      setName('');
      setPicture('');
    } catch (error) {
      setMessage('Error adding profile: ' + error.message);
    }
  };

  return (
    <div className="container-fluid bg-dark text-white py-4 min-vh-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="text-center mb-4">Add New Profile</h2>
            <div className="card bg-secondary border-0">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control bg-dark text-white border-secondary"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="picture" className="form-label">Picture URL</label>
                    <input
                      type="url"
                      className="form-control bg-dark text-white border-secondary"
                      id="picture"
                      value={picture}
                      onChange={(e) => setPicture(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Add Profile</button>
                </form>
                {message && <p className="mt-3 text-center">{message}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProfile;