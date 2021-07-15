import React from 'react';
import { Routes, Route } from "react-router-dom";
import Quiz from './components/Quiz';

import Home from './pages/Home';
import Result from './pages/Result';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Header from './components/Header';
import Score from './pages/Score';
import PrivateRoute from './PrivateRoute'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <PrivateRoute path='/score' element={<Score />} />
      </Routes>
    </>
  );
}

export default App;

