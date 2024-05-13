import React, { useState, useEffect } from 'react';
import './Profiles.css'; // Import CSS file for Profiles component
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const profilesPerPage = 50; // Changed to constant value

  useEffect(() => {
    // fetch('http://localhost:5000/get_names')
    fetch('https://links-backend-six.vercel.app/get_names')
      .then(response => response.json())
      .then(data => setProfiles(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const shuffleArray = (array) => {
    // Implement a shuffling algorithm (e.g., Fisher-Yates shuffle)
    // Here's a simple implementation:
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const plusSlides = (n, containerIndex) => {
    const slides = document.querySelectorAll(`.profile-box:nth-child(${containerIndex + 1}) .mySlides`);
    let slideIndex = 0;
    for (let i = 0; i < slides.length; i++) {
      if (slides[i].style.display === "block") {
        slideIndex = i;
        break;
      }
    }
    let nextSlideIndex = slideIndex + n;
    if (nextSlideIndex >= slides.length) {
      nextSlideIndex = 0;
    }
    if (nextSlideIndex < 0) {
      nextSlideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[nextSlideIndex].style.display = "block";
  };
  // Calculate indexes for current page
  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = profiles.slice(indexOfFirstProfile, indexOfLastProfile);
  
  return (
    <div className="App">
      <Sidebar />
      <header className="App-header">
        <div className='page-name'><h1>This is Profiles</h1></div>
        <div className="profiles-container">
          {/* Map over profiles array */}
          {profiles.slice(indexOfFirstProfile, indexOfLastProfile).map((profile, index) => (
            <div className="profile-box" key={index}>
              <li key={profile.id}>
                <Link to={`/profiles/${profile.id}`}>
                  <h2>{profile.name}</h2>
                </Link>
              </li>
              {/* <a href={profile.follow_link} target="_blank" rel="noreferrer noopener">
                <h2>{profile.name}</h2>
              </a> */}
              <div className="slideshow-container">
                {shuffleArray([profile.image, profile.image1, profile.image2, profile.image3, profile.image4, profile.image5]).map((image, idx) => (
                  <img key={idx} className="mySlides" src={image} alt={profile.name} style={{ display: idx === 0 ? 'block' : 'none' }} />
                ))}
                <button className="prev" onClick={() => plusSlides(-1, index)}>&#10094;</button>
                <button className="next" onClick={() => plusSlides(1, index)}>&#10095;</button>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          linksPerPage={profilesPerPage}
          totalLinks={profiles.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </header>
    </div>
  );
}

function Pagination({ linksPerPage, totalLinks, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalLinks / linksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className={number === currentPage ? 'page-item active' : 'page-item'}>
            <Link onClick={() => paginate(number)} to='/profiles' className='page-link'>
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Profiles;
