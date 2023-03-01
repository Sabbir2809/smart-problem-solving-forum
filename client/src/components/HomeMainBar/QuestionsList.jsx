import React from 'react';
import Questions from './Questions';

const QuestionsList = ({ questionsList }) => {
  console.log(questionsList);
  return (
    <>
      {questionsList.map((question) => (
        // Questions Component
        <Questions key={question._id} question={question}></Questions>
      ))}
    </>
  );
};

export default QuestionsList;
