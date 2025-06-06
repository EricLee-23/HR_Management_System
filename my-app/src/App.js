import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <h1>
      Are you <Link to="/apply">applying</Link> or <Link to="/create">creating</Link>?
    </h1>
  );
}

export default App;
