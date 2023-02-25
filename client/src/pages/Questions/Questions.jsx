import React from 'react';
import HomeMainBar from '../../components/HomeMainBar/HomeMainBar';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';

const Questions = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar></LeftSidebar>
      <div className='home-container-2'>
        <HomeMainBar></HomeMainBar>
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
};

export default Questions;
