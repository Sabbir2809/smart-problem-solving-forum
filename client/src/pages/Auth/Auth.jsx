import React, { useState } from 'react';
import logo from './../../assets/logo.png';
import './Auth.css';
import AboutAuth from './AboutAuth';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSwitch = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <section className='auth-section'>
      {isSignUp && <AboutAuth></AboutAuth>}
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
          <button type='Submit' className='auth-btn'>
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>
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
