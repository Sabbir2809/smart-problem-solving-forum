import React from 'react';
import './RightSidebar.css';

const WidgetTags = () => {
  // Department Tags
  const tags = [
    'CSE',
    'SWE',
    'EEE',
    'CIS',
    'MCT',
    'Architecture',
    'Civil',
    'ICE',
    'Programming',
    'OOP',
    'Computer Fundamentals',
    'DBMS',
    'Mathematics',
    'Discrete Mathematics',
    'Robotics',
    'Data Structure',
    'Algorithms',
    'Computer Network',
  ];
  return (
    <div className='widget-tags'>
      <h4>Department Tags</h4>
      <div className='widget-tags-div'>
        {tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>
    </div>
  );
};

export default WidgetTags;
