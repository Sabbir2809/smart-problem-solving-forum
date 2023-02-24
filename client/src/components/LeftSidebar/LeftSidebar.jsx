import React from 'react';
import { NavLink } from 'react-router-dom';
import './LeftSidebar.css';
import { UserIcon, TagIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid';

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
        <NavLink to='' className='side-nav-links' activeClass='active'>
          <p>Home</p>
        </NavLink>
        <div className='side-nav-div'>
          <div className='forum-post'>
            <p>Forum Post</p>
          </div>
          <NavLink to='/Questions' className=' tag-link  side-nav-links' activeClass='active'>
            <QuestionMarkCircleIcon style={{ width: '18px', color: '#FFC239' }} />
            <p className='q-tag'> Questions</p>
          </NavLink>
          <NavLink to='/Tags' className='tag-link side-nav-links' activeClass='active'>
            <TagIcon style={{ width: '18px', color: '#FFC239' }} />
            <p>Problem Tags</p>
          </NavLink>
          <NavLink to='/Users' className='tag-link side-nav-links' activeClass='active'>
            <UserIcon style={{ width: '18px', color: '#FFC239' }} />
            <p> Users Profile</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;
