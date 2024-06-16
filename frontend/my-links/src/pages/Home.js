import React, { useState, useEffect } from 'react';
import './Home.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Pagination from './Pagination'; // Import Pagination component

function Home() {
  const [links, setLinks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [linksPerPage] = useState(40);

  useEffect(() => {
    // fetch('https://links-backend-six.vercel.app/get_links_with_titles')
    fetch('http://localhost:5000/get_links_with_titles')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (!Array.isArray(data)) {
        throw new Error('Data is not an array');
      }
      setLinks(data);
    })
    .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Get current links
  const indexOfLastLink = currentPage * linksPerPage;
  const indexOfFirstLink = indexOfLastLink - linksPerPage;
  const currentLinks = links.slice(indexOfFirstLink, indexOfLastLink);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const truncateTitle = (title) => {
    return title.length > 35 ? title.substring(0, 35) + '...' : title;
  };

  return (
    <div className="container-fluid" style={{ backgroundImage: 'radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%)'}}>
      <div className="row justify-content-center">
        {currentLinks.map((item, index) => (
          <div className="col-md-3" key={index} style={{width:'auto'}}>
            <div className="shadow-lg p-3 mb-2 link-box rounded-4">
            <p className="fs-4 link-opacity-75 text-dark-emphasis">
                {item.title_from_link && item.title_from_link.trim() !== '' ? truncateTitle(item.title_from_link) : truncateTitle(item.title)}
              </p>
              <a href={item.link} target="_blank" rel="noreferrer noopener" >
                {item.video_url ? (
                  <img src={item.video_url} alt={item.link} className="d-block h-50 w-100" />
                ) : (
                  <img src={item.image_url} alt={item.link} className="d-block h-50 w-100" />
                )}
              </a>
            </div>
          </div>
        ))}
      </div>
      <Pagination profilesPerPage={linksPerPage} totalProfiles={links.length} paginate={paginate} />
    </div>
  );
}
export default Home;
