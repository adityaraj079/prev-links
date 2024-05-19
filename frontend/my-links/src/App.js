// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Profiles from './pages/Profiles';
import Terabox from './pages/Terabox';
import ProfilePage from './pages/ProfilePage';
import bg from './images/bg-dark.jpg'

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/profiles/:id" component={ProfilePage} />
          <Route path="/terabox" element={<Terabox />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
