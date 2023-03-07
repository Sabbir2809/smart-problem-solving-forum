import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProfile } from '../../actions/users';

const EditProfileForm = ({ currentUser, setSwitch }) => {
  const [name, setName] = useState(currentUser?.result.name);
  const [about, setAbout] = useState(currentUser?.result.about);
  const [tags, setTags] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tags.length === 0) {
      dispatch(updateProfile(currentUser?.result?._id, { name, about, tags: currentUser?.result?.tags }));
    } else {
      dispatch(updateProfile(currentUser?.result?._id, { name, about, tags }));
    }
    setSwitch(false);
  };

  return (
    <div>
      <h2 className='edit-profile-title-1'>Edit Your Profile</h2>
      <h3 className='edit-profile-title-2'>Public Information</h3>
      <form onSubmit={handleSubmit} className='edit-profile-form'>
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
