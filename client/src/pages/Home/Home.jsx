import React from 'react';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import HomeMainBar from '../../components/HomeMainBar/HomeMainBar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import './Home.css';

const Home = () => {
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

export default Home;
