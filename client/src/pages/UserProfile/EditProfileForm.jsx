import React, { useState } from 'react';

const EditProfileForm = ({ currentUser, setSwitch }) => {
  const [name, setName] = useState(currentUser?.result.name);
  const [about, setAbout] = useState(currentUser?.result.about);
  const [tags, setTags] = useState('');

  return (
    <div>
      <h2 className='edit-profile-title-1'>Edit Your Profile</h2>
      <h3 className='edit-profile-title-2'>Public Information</h3>
      <form className='edit-profile-form'>
        <label htmlFor='name'>
          <h3>Display Name</h3>
          <input onChange={(e) => setName(e.target.value)} type='text' id='name' value={name} />
        </label>
        <label htmlFor='about'>
          <h3>About Me</h3>
          <textarea
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            id='about'
            cols='30'
            rows='10'></textarea>
        </label>
        <label htmlFor='tags'>
          <h3>Watched Tags</h3>
          <p>Add Tags Separated by 1 Space</p>
          <input onChange={(e) => setTags(e.target.value.split(' '))} type='text' id='tags' />
        </label>
        <br />
        <input type='submit' value='Save Profile' className='user-submit-btn' />
        <button onClick={() => setSwitch(false)} type='button' className='user-cancel-btn'>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditProfileForm;
