import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Questions from './pages/Questions/Questions';
import DisplayQuestion from './pages/Questions/DisplayQuestion';
import AskQuestion from './pages/AskQuestion/AskQuestion';
import Tags from './pages/Tags/Tags';
import Users from './pages/Users/Users';
import UserProfile from './pages/UserProfile/UserProfile';

const AllRoutes = () => {
  return (
    <Routes>
      {/* Home Components */}
      <Route path='/' element={<Home></Home>} />
      {/* Login Logout Auth Component */}
      <Route path='/Auth' element={<Auth></Auth>} />
      {/* Ask Question Component */}
      <Route path='/AskQuestion' element={<AskQuestion></AskQuestion>} />
      {/* Questions Component */}
      <Route path='/Questions' element={<Questions></Questions>} />
      {/* Display Question Component */}
      <Route path='/Questions/:id' element={<DisplayQuestion></DisplayQuestion>} />
      {/* Tags */}
      <Route path='/Tags' element={<Tags></Tags>} />
      {/* Users */}
      <Route path='/Users' element={<Users></Users>} />
      {/* Users Profile */}
      <Route path='/Users/:id' element={<UserProfile></UserProfile>} />
    </Routes>
  );
};

export default AllRoutes;
