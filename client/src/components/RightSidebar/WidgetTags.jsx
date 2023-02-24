import React from 'react';
import './RightSidebar.css';

const WidgetTags = () => {
  const tags = [
    'CSE',
    'SWE',
    'EEE',
    'CES',
    'Civil',
    'Physics',
    'Computer Fundamentals',
    'Programming',
    'OOP',
    'DBMS',
    'Discrete Mathematics',
    'Robotics',
    'Data Structure',
    'Algorithms',
    'Computer Network',
    'Mathematics',
    'HTML',
    'CSS',
    'Bootstrap',
    'JavaScript',
    'React',
    'Node',
    'Express',
    'MongoDB',
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
