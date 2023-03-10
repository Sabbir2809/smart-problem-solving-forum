import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import QuestionsList from './QuestionsList';
import './HomeMainBar.css';
import { useSelector } from 'react-redux';

const HomeMainBar = () => {
  // // Fake Data
  // const questionsList = [
  //   {
  //     _id: 1,
  //     upVotes: 3,
  //     downVotes: 3,
  //     noOfAnswers: 2,
  //     questionTitle: 'What is a Function?',
  //     questionBody: 'It Meant to be',
  //     questionTags: ['java', 'node js', 'react js', 'mongodb'],
  //     userPosted: 'Sabu',
  //     userId: 1,
  //     askedOn: 'jan 1',
  //     answer: [
  //       {
  //         answerBody: 'Answer',
  //         userAnswered: 'Tahmid',
  //         answeredOn: 'jan 2',
  //         userId: 2,
  //       },
  //     ],
  //   },
  //   {
  //     _id: 2,
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 0,
  //     questionTitle: 'What is a Arrow Function?',
  //     questionBody: 'It Meant to be',
  //     questionTags: ['java', 'node js', 'react js', 'mongodb'],
  //     userPosted: 'Sabu',
  //     userId: 1,
  //     askedOn: 'jan 1',
  //     answer: [
  //       {
  //         answerBody: 'Answer',
  //         userAnswered: 'Tahmid',
  //         answeredOn: 'jan 2',
  //         userId: 2,
  //       },
  //     ],
  //   },
  //   {
  //     _id: 3,
  //     upVotes: 3,
  //     downVotes: 1,
  //     noOfAnswers: 0,
  //     questionTitle: 'What is a Dynamic Function?',
  //     questionBody: 'It Meant to be',
  //     questionTags: ['java', 'node js', 'react js', 'mongodb'],
  //     userPosted: 'Sabu',
  //     userId: 1,
  //     askedOn: 'jan 1',
  //     answer: [
  //       {
  //         answerBody: 'Answer',
  //         userAnswered: 'Tahmid',
  //         answeredOn: 'jan 2',
  //         userId: 2,
  //       },
  //     ],
  //   },
  // ];

  // hooks
  const location = useLocation();
  const navigate = useNavigate();
  const user = 1;
  const questionsList = useSelector((state) => state.questionsReducer);

  // check User login & logout function
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
        {/* Ask Question Button */}
        <button onClick={checkAuth} className='ask-btn'>
          Ask Question
        </button>
      </div>
      <div>
        {questionsList.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList.data.length} questions</p>
            {/* Question List Component */}
            <QuestionsList questionsList={questionsList.data}></QuestionsList>
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainBar;
