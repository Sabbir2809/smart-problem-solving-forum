import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import QuestionsList from './Questions/QuestionsList';
import './HomeMainBar.css';

const HomeMainBar = () => {
  const questionsList = [
    {
      id: 1,
      votes: 3,
      noOfAnswers: 2,
      questionTitle: 'What is a Function?',
      questionBody: 'It Meant to be',
      questionTags: ['java', 'node js', 'react js', 'mongodb'],
      userPosted: 'Sabu',
      askedOn: 'jan 1',
    },
    {
      id: 2,
      votes: 0,
      noOfAnswers: 0,
      questionTitle: 'What is a Function?',
      questionBody: 'It Meant to be',
      questionTags: ['java', 'node js', 'react js', 'mongodb'],
      userPosted: 'Sabu',
      askedOn: 'jan 1',
    },
    {
      id: 3,
      votes: 1,
      noOfAnswers: 0,
      questionTitle: 'What is a Function?',
      questionBody: 'It Meant to be',
      questionTags: ['java', 'node js', 'react js', 'mongodb'],
      userPosted: 'Sabu',
      askedOn: 'jan 1',
    },
  ];

  const location = useLocation();

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>}
        <Link to='/AskQuestion' className='ask-btn'>
          Ask Question
        </Link>
      </div>
      <dir>
        {questionsList === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList.length} questions</p>
            <QuestionsList questionsList={questionsList}></QuestionsList>
          </>
        )}
      </dir>
    </div>
  );
};

export default HomeMainBar;
