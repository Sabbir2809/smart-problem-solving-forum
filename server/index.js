import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import userRouter from './routes/users.js';

// port
const port = process.env.PORT || 5000;

// express server
const app = express();

// middleware
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// root API
app.get('/', (req, res) => {
  res.send('Smart Problem Solving Forum API 👍');
});

// Authentication logIn, signIn API
app.use('/user', userRouter);

// mongodb connection info
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@smart-problem-solving-f.g9brbct.mongodb.net/?retryWrites=true&w=majority`;

mongoose.set('strictQuery', false);
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(port, () => {
      console.log(`Server Running on Port ➡️ ${port}`);
    })
  )
  .catch((error) => console.error(error.message));
