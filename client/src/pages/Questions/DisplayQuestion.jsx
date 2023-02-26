import React from 'react';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import QuestionsDetails from './QuestionsDetails';

const DisplayQuestion = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar></LeftSidebar>
      <div className='home-container-2'>
        {/* Question Details Component */}
        <QuestionsDetails></QuestionsDetails>
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
};

export default DisplayQuestion;
