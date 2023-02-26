import React, { useState } from 'react';
import AboutAuth from './AboutAuth';
import logo from './../../assets/logo.png';
import './Auth.css';

const Auth = () => {
  // state: login logout
  const [isSignUp, setIsSignUp] = useState(false);

  //
  const handleSwitch = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <section className='auth-section'>
      {/* About Auth Component */}
      {isSignUp && <AboutAuth></AboutAuth>}
      {/* Login * Sign In Page */}
      <div className='auth-container-2'>
        {!isSignUp && <img src={logo} alt='Smart Forum Logo' className='login-logo' />}
        <form>
          {isSignUp && (
            <label htmlFor='name'>
              <h4>Display Name</h4>
              <input type='text' name='name' id='name' />
            </label>
          )}
          <label htmlFor='email'>
            <h4>Email</h4>
            <input type='email' name='email' id='email' />
          </label>
          <label htmlFor='password'>
            <div className='pass-info'>
              <h4>Password</h4>
              {!isSignUp && <p className='forget-pass'>forget password?</p>}
            </div>
            <input type='password' name='email' id='password' />
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
