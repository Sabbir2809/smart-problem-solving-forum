import React from 'react';
import './AskQuestion.css';

const AskQuestion = () => {
  return (
    <div className='ask-question'>
      <div className='ask-question-container'>
        <h1>Ask A Forum Question</h1>
        <form>
          <div className='ask-form-container'>
            <label htmlFor='ask-question-title'>
              <h4>Title</h4>
              <p>Be specific & imagine you're asking a question to another person</p>
              <input
                type='text'
                placeholder='e.g is there are function for finding the index of an element in a vector?'
                id='ask-question-title'
              />
            </label>
            <label htmlFor='ask-question-body'>
              <h4>Body</h4>
              <p>Be specific & imagine you're asking a question to another person</p>
              <textarea
                type='text'
                placeholder='e.g is there are function for finding the index of an element in a vector?'
                id='ask-question-body'
                cols='30'
                rows='10'
              />
            </label>
            <label htmlFor='ask-question-tags'>
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your question is about</p>
              <input type='text' placeholder='e.g cse swe eee' id='ask-question-tags' />
            </label>
          </div>
          <input type='submit' value='Review Your Question' className='review-btn' />
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;
