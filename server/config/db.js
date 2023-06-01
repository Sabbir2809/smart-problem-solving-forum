import mongoose from 'mongoose';

const connectDB = async (options = { useNewUrlParser: true, useUnifiedTopology: true }) => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGODB_URI, options);
    console.log('Connect to MongoDB is Successfully');
    mongoose.connection.on('error', (error) => {
      console.error('Database Connection Error!', error);
    });
  } catch (error) {
    console.error('Could Not Connect to MongoDB', error.toString());
  }
};

export default connectDB;
