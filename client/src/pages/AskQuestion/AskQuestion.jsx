import React, { useState } from 'react';
import './AskQuestion.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { askQuestion } from '../../actions/question';

const AskQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState();
  const [questionBody, setQuestionBody] = useState();
  const [questionTags, setQuestionTags] = useState();

  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ questionTitle, questionBody, questionTags });
    dispatch(
      askQuestion(
        {
          questionTitle,
          questionBody,
          questionTags,
          userPosted: User.result.name,
          userId: User?.result?._id,
        },
        navigate
      )
    );
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      setQuestionBody(questionBody + '\n');
    }
  };

  return (
    <div className='ask-question'>
      <div className='ask-question-container'>
        <h1>Ask A Forum Question</h1>
        <form onSubmit={handleSubmit}>
          <div className='ask-form-container'>
            {/* Problem Title */}
            <label htmlFor='ask-question-title'>
              <h4>Title</h4>
              <p>Be Specific & Imagine you're asking a Problem to another Person</p>
              <input
                onChange={(e) => {
                  setQuestionTitle(e.target.value);
                }}
                type='text'
                placeholder='problem title'
                id='ask-question-title'
              />
            </label>
            {/* Problem Body */}
            <label htmlFor='ask-question-body'>
              <h4>Body</h4>
              <p>Be Specific & Imagine you're asking a Problem to another Person</p>
              <textarea
                onChange={(e) => {
                  setQuestionBody(e.target.value);
                }}
                onKeyPress={handleEnter}
                type='text'
                placeholder='problem body'
                id='ask-question-body'
                cols='30'
                rows='10'
              />
            </label>
            {/* Problem Tags */}
            <label htmlFor='ask-question-tags'>
              <h4>Tags</h4>
              <p>Add up to 5 Tags to Describe what your Problem is About</p>
              <input
                onChange={(e) => {
                  setQuestionTags(e.target.value.split(' '));
                }}
                type='text'
                placeholder='e.g cse swe eee'
                id='ask-question-tags'
              />
            </label>
          </div>
          <input type='submit' value='Review Your Question' className='review-btn' />
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;
