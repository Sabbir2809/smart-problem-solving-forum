// Dependencies
import express from 'express';
const app = express();
import cors from 'cors';
import userRouters from './routes/users.js';
import questionRouters from './routes/questions.js';
import answerRouters from './routes/answers.js';

// middleware
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// root API
app.get('/', (req, res) => {
  res.send('Smart Problem Solving Forum API 👍');
});

// Authentication logIn, signIn API
app.use('/user', userRouters);
// ask question API
app.use('/questions', questionRouters);
// answer the question API
app.use('/answer', answerRouters);

export default app;
