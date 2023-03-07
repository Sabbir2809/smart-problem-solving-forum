import moment from 'moment';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { deleteAnswer } from '../../actions/question';
import Avatar from './../../components/Avatar/Avatar';

const DisplayAnswer = ({ question, handleShare }) => {
  const { id } = useParams();
  const User = useSelector((state) => state.currentUserReducer);

  const dispatch = useDispatch();

  // delete question
  const handleDelete = (answerId, noOfAnswers) => {
    dispatch(deleteAnswer(id, answerId, noOfAnswers - 1));
  };

  return (
    <>
      {question.answer.map((ans) => (
        // Display Answer
        <div className='display-ans' key={ans._id}>
          <p>{ans.answerBody}</p>
          <div className='question-actions-user'>
            <div>
              <button onClick={handleShare} type='button'>
                Share
              </button>
              {User?.result?._id === ans?.userId && (
                <button
                  onClick={() => {
                    handleDelete(ans._id, question.noOfAnswers);
                  }}
                  type='button'>
                  Delete
                </button>
              )}
            </div>
            <div>
              <p>answered {moment(ans.answeredOn).fromNow()}</p>
              <Link to={`/Users/${ans.userId}`} className='user-link' style={{ color: '#0086d8' }}>
                <Avatar backgroundColor='green' color='white' px='8px' py='5px'>
                  {ans.userAnswered.charAt(0).toUpperCase()}
                </Avatar>
                <div>{ans.userAnswered}</div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DisplayAnswer;
