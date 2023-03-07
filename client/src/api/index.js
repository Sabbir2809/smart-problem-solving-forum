import axios from 'axios';

const API = axios.create({ baseURL: 'https://smart-problem-solving-forum.vercel.app' });

// Authentication: logIn & signIn
export const logIn = (authData) => API.post('/user/login', authData);
export const signUp = (authData) => API.post('/user/signup', authData);

// post and get question
export const postQuestion = (questionData) => API.post('/questions/Ask', questionData);
export const getAllQuestions = () => API.get('/questions/get');
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);
export const voteQuestion = (id, value, userId) => API.patch(`/questions/vote/${id}`, { value, userId });

// post answer and delete
export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId) =>
  API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered, userId });
export const deleteAnswer = (id, answerId, noOfAnswers) =>
  API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers });

// all User information
export const fetchAllUsers = () => API.get('/user/getAllUsers');

// updateProfile
export const updateProfile = (id, updateData) => API.patch(`/user/update/${id}`, updateData);
