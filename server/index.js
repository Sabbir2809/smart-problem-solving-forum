import dotenv from 'dotenv';
dotenv.config();
import app from './app.js';
import connectDB from './config/db.js';

// port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is Running on ➡️ http//:localhost:${port}`);
  connectDB();
});
