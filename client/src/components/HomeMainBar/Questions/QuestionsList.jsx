import React from 'react';
import Questions from './Questions';

const QuestionsList = ({ questionsList }) => {
  return (
    <>
      {questionsList.map((question) => (
        <Questions key={question.id} question={question}></Questions>
      ))}
    </>
  );
};

export default QuestionsList;
