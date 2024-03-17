import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/get_links_with_titles')
      .then(response => response.json())
      .then(data => setLinks(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Links from Excel</h1>
        <div className="links-container">
          {links.map((item, index) => (
            <div className="link-box" key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="title">{item.title ? item.title : item.link}</div>
              </a>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

function truncateTitle(title) {
  // Limit title to three lines
  const maxLength = 3 * 30; // Assuming average character width of 30px
  if (title.length > maxLength) {
    return title.substring(0, maxLength) + '...';
  }
  return title;
}

export default App;
