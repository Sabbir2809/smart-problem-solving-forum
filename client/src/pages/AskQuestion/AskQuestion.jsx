import React from 'react';
import './AskQuestion.css';

const AskQuestion = () => {
  return (
    <div className='ask-question'>
      <div className='ask-question-container'>
        <h1>Ask A Forum Question</h1>
        <form>
          <div className='ask-form-container'>
            {/* Problem Title */}
            <label htmlFor='ask-question-title'>
              <h4>Title</h4>
              <p>Be Specific & Imagine you're asking a Problem to another Person</p>
              <input type='text' placeholder='problem title' id='ask-question-title' />
            </label>
            {/* Problem Body */}
            <label htmlFor='ask-question-body'>
              <h4>Body</h4>
              <p>Be Specific & Imagine you're asking a Problem to another Person</p>
              <textarea type='text' placeholder='problem body' id='ask-question-body' cols='30' rows='10' />
            </label>
            {/* Problem Tags */}
            <label htmlFor='ask-question-tags'>
              <h4>Tags</h4>
              <p>Add up to 5 Tags to Describe what your Problem is About</p>
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
