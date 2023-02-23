import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import logo from './../../assets/logo.png';
import search from './../../assets/search.svg';
import './Navbar.css';

const Navbar = () => {
  let User = null;

  return (
    <nav>
      <div className='navbar'>
        <Link to='/' className='nav-item nav-logo'>
          <img src={logo} alt='Logo' />
        </Link>
        <Link to='/about' className='nav-item nav-btn'>
          About
        </Link>
        <Link to='/products' className='nav-item nav-btn'>
          Products
        </Link>
        <Link to='/teams' className='nav-item nav-btn'>
          For Teams
        </Link>
        <form>
          <input type='text' placeholder='Search...' />
          <img src={search} className='search-icon' width='18' alt='search' />
        </form>
        {User === null ? (
          <Link to='/Auth' className='nav-item nav-links'>
            Log In
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
