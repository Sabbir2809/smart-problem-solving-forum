import React, { useState } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import Avatar from '../../components/Avatar/Avatar';
import './Questions.css';
import DisplayAnswer from './DisplayAnswer';
import upVote from './../../assets/upVote.svg';
import downVote from './../../assets/downVote.svg';
import { useSelector, useDispatch } from 'react-redux';
import { deleteQuestion, postAnswer } from '../../actions/question';
import moment from 'moment';
import copy from 'copy-to-clipboard';

const QuestionsDetails = () => {
  // hook
  const { id } = useParams();
  const questionsList = useSelector((state) => state.questionsReducer);
  //
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const [answer, setAnswer] = useState('');
  //
  const location = useLocation();
  const url = `http://localhost:3000`;

  // post answer
  const handlePostAnswer = (e, answerLength) => {
    e.preventDefault();
    if (User === null) {
      alert('Login or SignUp to answer a Question');
      navigate('/Auth');
    } else {
      if (answer === '') {
        alert('Enter an answer before submitting');
      } else {
        dispatch(
          postAnswer({
            id,
            noOfAnswers: answerLength + 1,
            answerBody: answer,
            userAnswered: User.result.name,
            userId: User?.result?._id,
          })
        );
      }
    }
  };

  // share
  const handleShare = () => {
    copy(url + location.pathname);
    alert('Copied URL: ' + url + location.pathname);
  };

  // delete question
  const handleDelete = () => {
    dispatch(deleteQuestion(id, navigate));
  };

  return (
    <div className='question-details-page'>
      {/* Conditional Rendering */}
      {questionsList?.data === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionsList?.data
            .filter((question) => question._id === id)
            .map((question) => (
              <div key={question._id}>
                {/* Question Details Container */}
                <section className='question-details-container-1'>
                  <h2>{question.questionTitle}</h2>
                  <div className='question-details-container-2'>
                    <div className='question-votes'>
                      <img src={upVote} className='votes-icon' width='18' alt='up' />
                      <p>{question.upVotes - question.downVotes || 0}</p>
                      <img src={downVote} className='votes-icon' width='18' alt='down' />
                    </div>
                    <div style={{ width: '100%' }}>
                      <p className='question-body'>{question.questionBody}</p>
                      <div className='question-details-tags'>
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className='question-actions-user'>
                        <div>
                          <button onClick={handleShare} type='button'>
                            Share
                          </button>
                          {User?.result?._id === question?.userId && (
                            <button onClick={handleDelete} type='button'>
                              Delete
                            </button>
                          )}
                        </div>
                        <div>
                          <p>asked {moment(question.askedOn).fromNow()}</p>
                          <Link
                            to={`/User/${question.userId}`}
                            className='user-link'
                            style={{ color: '#0086d8' }}>
                            <Avatar backgroundColor='orange' color='white' px='8px' py='5px'>
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* Tags */}
                {question.noOfAnswers !== 0 && (
                  <section>
                    <h3>{question.noOfAnswers} Answers</h3>
                    {/* Display Answer Component */}
                    <DisplayAnswer
                      handleShare={handleShare}
                      key={question._id}
                      question={question}></DisplayAnswer>
                  </section>
                )}
                {/* Post Answer Container */}
                <section className='post-ans-container'>
                  <h3>Your Answer</h3>
                  <form
                    onSubmit={(e) => {
                      handlePostAnswer(e, question.answer.length);
                    }}>
                    <textarea onChange={(e) => setAnswer(e.target.value)} cols='30' rows='10'></textarea>
                    <br />
                    <input type='submit' className='post-ans-btn' value='Post Your Answer' />
                  </form>
                  <p>
                    Browse other Question tagged{' '}
                    {question.questionTags.map((tag) => (
                      <Link to='/Tags' key={tag} className='ans-tags'>
                        {tag}
                      </Link>
                    ))}{' '}
                    or{' '}
                    <Link to='/AskQuestion' style={{ textDecoration: 'none', color: '#009dff' }}>
                      ask your own question.
                    </Link>
                  </p>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default QuestionsDetails;
