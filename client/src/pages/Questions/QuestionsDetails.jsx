import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronDoubleUpIcon, ChevronDoubleDownIcon } from '@heroicons/react/24/solid';
import Avatar from '../../components/Avatar/Avatar';
import './Questions.css';

const QuestionsDetails = () => {
  const { id } = useParams();

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

  return (
    <div className='question-details-page'>
      {questionsList === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionsList
            .filter((question) => question._id === parseInt(id))
            .map((question) => (
              <div key={question._id}>
                <section className='questions-details-container-1'>
                  <h1>{question.questionTitle}</h1>
                  <div className='question-details-container-2'>
                    <div className='question-votes'>
                      <ChevronDoubleUpIcon width='18' />
                      <p>{question.upVotes - question.downVotes}</p>
                      <ChevronDoubleDownIcon width='18' />
                    </div>
                    <div style={{ width: '100%' }}>
                      <p className='question-body'>{question.questionBody}</p>
                      <div className='question-details-tags'>
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className='question-action-user'>
                        <div>
                          <button type='button'>Share</button>
                          <button type='button'>Delete</button>
                        </div>
                        <div>
                          <p>asked {question.askedOn}</p>
                          <Link
                            to={`/User/${question.userId}`}
                            className='user-link'
                            style={{ color: '#0086d8' }}>
                            <Avatar backgroundColor='orange' px='8px' py='5px'>
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {question.noOfAnswers !== 0 && (
                  <section>
                    <h3>{question.noOfAnswers} answers</h3>
                  </section>
                )}
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default QuestionsDetails;
