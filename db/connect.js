import mongoose from 'mongoose';

mongoose.set('strictQuery', false); // remove depracation warning

const connectDB = (url) => {
  return mongoose.connect(url);
};

export default connectDB;
