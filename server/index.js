import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import userRouter from './routes/users.js';

// port
const port = process.env.PORT || 5000;

// middleware
const app = express();
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// get root api
app.get('/', (req, res) => {
  res.send('Smart Problem Solving Forum API 👍');
});

// userRoute from routes -> users.js
app.use('/user', userRouter);

// mongodb connection
const CONNECTION_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@smart-problem-solving-f.g9brbct.mongodb.net/?retryWrites=true&w=majority`;

mongoose.set('strictQuery', false);
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(port, () => {
      console.log(`Server Running on Port ➡️ ${port}`);
    })
  )
  .catch((error) => console.error(error.message));
