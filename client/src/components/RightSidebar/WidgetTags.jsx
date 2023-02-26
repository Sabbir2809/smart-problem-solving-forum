import React from 'react';
import './RightSidebar.css';

const WidgetTags = () => {
  // Department Tags
  const tags = [
    'CSE',
    'SWE',
    'EEE',
    'CES',
    'Civil',
    'Physics',
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
