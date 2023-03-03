import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

// Authentication: logIn & signIn
export const logIn = (authData) => API.post('/user/login', authData);
export const signUp = (authData) => API.post('/user/signup', authData);

// post and get question
export const postQuestion = (questionData) => API.post('/questions/Ask', questionData);
export const getAllQuestions = () => API.get('/questions/get');

// delete question
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);

// post answer
export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId) =>
  API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered, userId });

// delete answer
export const deleteAnswer = (id, answerId, noOfAnswers) =>
  API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers });
