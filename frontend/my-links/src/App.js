// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Profiles from './pages/Profiles';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <header className="App-header">
          <h1>Links from Excel</h1>
        </header>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profiles" element={<Profiles />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
