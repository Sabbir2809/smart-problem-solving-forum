import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import logo from './../../assets/logo.png';
import search from './../../assets/search.svg';
import './Navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from '../../actions/currentUser';

const Navbar = () => {
  // current user
  let User = useSelector((state) => state.currentUserReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // logout
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
    dispatch(setCurrentUser(null));
  };

  useEffect(() => {
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
  }, [dispatch]);

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
            <Avatar backgroundColor='#0086D8' px='10px' py='7px' borderRadius='10%'>
              <Link to={`/Users/${User?.result?._id}`} style={{ color: 'white', textDecoration: 'none' }}>
                {/* {User.result.name.charAt(0).toUpperCase()} */}
                {User.result.name.toUpperCase()}
              </Link>
            </Avatar>
            <button onClick={handleLogout} className='nav-item nav-links'>
              Log Out
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
