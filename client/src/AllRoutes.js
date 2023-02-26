import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AskQuestion from './pages/AskQuestion/AskQuestion';
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';
import DisplayQuestion from './pages/Questions/DisplayQuestion';
import Questions from './pages/Questions/Questions';

const AllRoutes = () => {
  return (
    <Routes>
      <Route ptah='/' element={<Home />} />
      <Route path='/Auth' element={<Auth />} />
      <Route path='/Questions' element={<Questions />} />
      <Route path='/AskQuestion' element={<AskQuestion />} />
      <Route path='/Questions/:id' element={<DisplayQuestion />} />
    </Routes>
  );
};

export default AllRoutes;
