import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Careers from './pages/Careers';
import Admin from './pages/Admin';
import './styles.css';

function Home() {
  return (
    <h1>
      Are you <Link to="/careers">applying</Link> or <Link to="/admin">admin</Link>?
    </h1>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
