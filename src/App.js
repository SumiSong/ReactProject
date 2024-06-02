import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home'
import FindConsonant from './pages/sumi/FindConsonant/FindConsonant'

function App() {
  return (
      <Routes>
          <Route path="/" element={<Home />}>
          <Route path="/seongyu" element={<div>Seongyu Component</div>} />
          <Route path="/sumi" element={<FindConsonant />} />
          </Route>
      </Routes>

  );
}

export default App;
