import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Questions from './pages/Questions/Questions';
import DisplayQuestion from './pages/Questions/DisplayQuestion';
import AskQuestion from './pages/AskQuestion/AskQuestion';

const AllRoutes = () => {
  return (
    <Routes>
      {/* Home Components */}
      <Route path='/' element={<Home></Home>} />
      {/* Login Logout Auth Component */}
      <Route path='/Auth' element={<Auth></Auth>} />
      {/* Questions Component */}
      <Route path='/Questions' element={<Questions></Questions>} />
      {/* Ask Question Component */}
      <Route path='/AskQuestion' element={<AskQuestion></AskQuestion>} />
      {/* Display Question Component */}
      <Route path='/Questions/:id' element={<DisplayQuestion></DisplayQuestion>} />
    </Routes>
  );
};

export default AllRoutes;
