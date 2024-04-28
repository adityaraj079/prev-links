import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Import CSS file for sidebar styles

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <ul>
        <li>
        <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/profiles">Profiles</Link>
        </li>
        {/* Add more sidebar links as needed */}
      </ul>
    </div>
  );
}

export default Sidebar;
