import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import logo from './../../assets/logo.png';
import search from './../../assets/search.svg';
import './Navbar.css';

const Navbar = () => {
  let User = 1;

  return (
    <nav className='main-nav'>
      <div className='navbar'>
        {/* Nav Items */}
        <Link to='/' className='nav-item nav-logo'>
          <img src={logo} alt='Logo' />
        </Link>
        <Link to='/Departments' className='nav-item nav-btn'>
          Departments
        </Link>
        <Link to='/Career' className='nav-item nav-btn'>
          Career Path
        </Link>
        <Link to='/About' className='nav-item nav-btn'>
          About
        </Link>

        {/* Input Field */}
        <form>
          <input type='text' placeholder='Search...' />
          <img src={search} className='search-icon' width='18' alt='search' />
        </form>

        {/* Conditional Rendering: For Login & Log out button */}
        {User === null ? (
          <Link to='/Auth' className='nav-item nav-links'>
            Login
          </Link>
        ) : (
          <>
            <Avatar backgroundColor='#009dff' px='10px' py='7px' borderRadius='50%' color='white'>
              <Link to='/User' style={{ color: 'white', textDecoration: 'none' }}>
                S
              </Link>
            </Avatar>
            <button className='nav-item nav-links'>Log Out</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
