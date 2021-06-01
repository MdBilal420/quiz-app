import React from 'react';
import { Routes, Route } from "react-router-dom";
import Quiz from './components/Quiz';

import Home from './Home';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:id" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;

