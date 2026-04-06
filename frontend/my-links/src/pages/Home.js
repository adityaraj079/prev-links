import React, { useState, useEffect } from 'react';
import Pagination from './Pagination'; // Import Pagination component

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
    <div className="container-fluid bg-dark text-white py-4 min-vh-100">
      <div className="container">
        <h2 className="text-center mb-4">Video Links</h2>
        <div className="row g-4">
          {currentLinks.map((item, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
              <div className="card bg-secondary text-white h-100 border-0">
                <div className="card-body d-flex flex-column">
                  <h6 className="card-title text-truncate" title={item.title}>
                    {item.title}
                  </h6>
                  <a href={item.link} target="_blank" rel="noreferrer noopener" className="mt-auto">
                    {item.image_url ? (
                      <img src={item.image_url} alt={item.title} className="card-img-bottom rounded" style={{ height: '150px', objectFit: 'cover' }} />
                    ) : (
                      <div className="bg-dark d-flex align-items-center justify-content-center rounded" style={{ height: '150px' }}>
                        <span className="text-muted">No Image</span>
                      </div>
                    )}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-4">
          <Pagination profilesPerPage={linksPerPage} totalProfiles={links.length} paginate={paginate} />
        </div>
      </div>
    </div>
  );
}
export default Home;
