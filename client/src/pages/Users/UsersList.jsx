import React from 'react';
import { useSelector } from 'react-redux';
import User from './User';

const UsersList = () => {
  const users = useSelector((state) => state.usersReducer);
  return (
    <div className='user-list-container'>
      {users.map((user) => (
        <User key={user?._id} user={user}></User>
      ))}
    </div>
  );
};

export default UsersList;
