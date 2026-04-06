// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Profiles from './pages/Profiles';
import ProfilePage from './pages/ProfilePage';
import AddVideo from './pages/AddVideo';
import AddProfile from './pages/AddProfile';
import Welcome from './pages/Welcome';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<><Sidebar /><Home /></>} />
          <Route path="/profiles" element={<><Sidebar /><Profiles /></>} />
          <Route path="/profiles/:id" element={<><Sidebar /><ProfilePage /></>} />
          <Route path="/add-video" element={<><Sidebar /><AddVideo /></>} />
          <Route path="/add-profile" element={<><Sidebar /><AddProfile /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
