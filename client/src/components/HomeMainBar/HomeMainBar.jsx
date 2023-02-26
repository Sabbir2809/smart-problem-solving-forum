import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import QuestionsList from './QuestionsList';
import './HomeMainBar.css';

const HomeMainBar = () => {
  const questionsList = [
    {
      _id: 1,
      upVotes: 3,
      downVotes: 3,
      noOfAnswers: 2,
      questionTitle: 'What is a Function?',
      questionBody: 'It Meant to be',
      questionTags: ['java', 'node js', 'react js', 'mongodb'],
      userPosted: 'Sabu',
      userId: 1,
      askedOn: 'jan 1',
      answer: [
        {
          answerBody: 'Answer',
          userAnswered: 'Tahmid',
          answeredOn: 'jan 2',
          userId: 2,
        },
      ],
    },
    {
      _id: 2,
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 0,
      questionTitle: 'What is a Function?',
      questionBody: 'It Meant to be',
      questionTags: ['java', 'node js', 'react js', 'mongodb'],
      userPosted: 'Sabu',
      userId: 1,
      askedOn: 'jan 1',
      answer: [
        {
          answerBody: 'Answer',
          userAnswered: 'Tahmid',
          answeredOn: 'jan 2',
          userId: 2,
        },
      ],
    },
    {
      _id: 3,
      upVotes: 3,
      downVotes: 1,
      noOfAnswers: 0,
      questionTitle: 'What is a Function?',
      questionBody: 'It Meant to be',
      questionTags: ['java', 'node js', 'react js', 'mongodb'],
      userPosted: 'Sabu',
      userId: 1,
      askedOn: 'jan 1',
      answer: [
        {
          answerBody: 'Answer',
          userAnswered: 'Tahmid',
          answeredOn: 'jan 2',
          userId: 2,
        },
      ],
    },
  ];

  const location = useLocation();
  const navigate = useNavigate();
  const user = 1;

  const checkAuth = () => {
    if (user === null) {
      alert('Login or Sign Up to ask a question');
      navigate('/Auth');
    } else {
      navigate('/AskQuestion');
    }
  };

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>}
        <button onClick={checkAuth} className='ask-btn'>
          Ask Question
        </button>
      </div>
      <div>
        {questionsList === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList.length} questions</p>
            <QuestionsList questionsList={questionsList}></QuestionsList>
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainBar;
