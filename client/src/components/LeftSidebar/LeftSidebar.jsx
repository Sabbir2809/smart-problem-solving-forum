import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserIcon, TagIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import './LeftSidebar.css';

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
        {/* Home */}
        <NavLink to='/' className='side-nav-links' activeclass='active'>
          <p>Home</p>
        </NavLink>
        {/* Forum Post sidebar */}
        <div className='side-nav-div'>
          <div className='forum-post'>
            <p>FORUM POST</p>
          </div>
          {/* Questions */}
          <NavLink to='/Questions' className=' tag-link  side-nav-links' activeclass='active'>
            <QuestionMarkCircleIcon style={{ width: '18px', color: '#FFC239' }} />
            <p className='q-tag'> Questions</p>
          </NavLink>
          {/* Problem Tags */}
          <NavLink to='/Tags' className='tag-link side-nav-links' activeclass='active'>
            <TagIcon style={{ width: '18px', color: '#FFC239' }} />
            <p>Problem Tags</p>
          </NavLink>
          {/* Users Profile */}
          <NavLink to='/Users' className='tag-link side-nav-links' activeclass='active'>
            <UserIcon style={{ width: '18px', color: '#FFC239' }} />
            <p> Users Profile</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;
