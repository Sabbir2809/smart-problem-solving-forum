import React, { useState } from 'react';
import AboutAuth from './AboutAuth';
import logo from './../../assets/logo.png';
import './Auth.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, signup } from '../../actions/auth';

const Auth = () => {
  // logIn signIn
  const [isSignUp, setIsSignUp] = useState(false);
  //
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // is signUp or Login
  const handleSwitch = () => {
    setIsSignUp(!isSignUp);
  };

  // name, email, password in form
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email && !password) {
      alert('🙏 Enter email & password');
    }
    if (isSignUp) {
      if (!name) {
        alert('Enter a name to continue ✳️');
      }
      dispatch(signup({ name, email, password }, navigate));
    } else {
      dispatch(login({ email, password }, navigate));
    }
  };

  return (
    <section className='auth-section'>
      {/* About Auth Component */}
      {isSignUp && <AboutAuth></AboutAuth>}
      {/* Login * Sign In Page */}
      <div className='auth-container-2'>
        {!isSignUp && <img src={logo} alt='Smart Forum Logo' className='login-logo' />}
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            // Name Field
            <label htmlFor='name'>
              <h4>Display Name</h4>
              <input onChange={(event) => setName(event.target.value)} type='text' name='name' id='name' />
            </label>
          )}
          {/* Email Field */}
          <label htmlFor='email'>
            <h4>Email</h4>
            <input onChange={(event) => setEmail(event.target.value)} type='email' name='email' id='email' />
          </label>
          {/* Password  Field */}
          <label htmlFor='password'>
            <div className='pass-info'>
              <h4>Password</h4>
              {!isSignUp && <p className='forget-pass'>forget password?</p>}
            </div>
            <input
              onChange={(event) => setPassword(event.target.value)}
              type='password'
              name='password'
              id='password'
            />
            {isSignUp && (
              <small className='pass-condition'>
                passwords must contain at least eight characters, including at least 1 letter and 1 number
              </small>
            )}
          </label>
          {/* Conditional Rendering */}
          <button type='Submit' className='auth-btn'>
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>
        {/* Conditional Rendering */}
        <p>
          {isSignUp ? 'Already have an account? ' : `Don't have an account `}
          <button onClick={handleSwitch} type='button' className='handle-switch-btn'>
            {isSignUp ? 'Login' : 'Sign Up'}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;
