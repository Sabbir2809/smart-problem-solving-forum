import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/logo.png';
import search from './../../assets/search.svg';
import Avatar from './../../assets/avatar.png';
import Button from './../../assets/logout.png';
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
            <Link to='/'>
              <Avatar>S</Avatar>
            </Link>
            <Button>Log Out</Button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
