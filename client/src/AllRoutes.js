import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';
import Questions from './pages/Questions/Questions';

const AllRoutes = () => {
  return (
    <Routes>
      <Route ptah='/' element={<Home />} />
      <Route path='/Auth' element={<Auth />} />
      <Route path='/Questions' element={<Questions />} />
    </Routes>
  );
};

export default AllRoutes;
