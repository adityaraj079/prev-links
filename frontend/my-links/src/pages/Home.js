import React, { useState, useEffect } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

function Home() {
  const [links, setLinks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [linksPerPage] = useState(40);

  useEffect(() => {
    fetch('https://links-backend-six.vercel.app/get_links_with_titles')
    // fetch('http://localhost:5000/get_links_with_titles')
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

  return (
    <div className="App">
      <Sidebar />   {/* Render the sidebar component */}
      <header className="App-header">
        <div className='page-name'><h1>This is Home</h1> </div>
        <div className='site-container'>
          <div className="links-container">
            {currentLinks.map((item, index) => (
              <div className="link-box" key={index}>
                <h3>{item.title}</h3>
                <a href={item.link} target="_blank" rel="noreferrer noopener" style={{ color: 'white' }}>
                {item.video_url ? (
                    <img src={item.video_url} alt={item.link} />
                ) : (
                    <img src={item.image_url} alt={item.link} />
                )}

                {/* <img src={item.image_url === "Img not Found" ? "alternative_image_url" : item.image_url} alt={item.link} /> */}
                </a>
              </div>
            ))}
          </div>
          <Pagination
            linksPerPage={linksPerPage}
            totalLinks={links.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
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
            <Link onClick={() => paginate(number)} to='/home' className='page-link'>
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Home;
