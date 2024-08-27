import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import authRoutes from './routes/authRoutes';
import { config } from './config/config';

const app = express();

// Use Morgan to log requests to the console
app.use(morgan('dev'));


app.use(express.json());
app.use('/auth', authRoutes);

mongoose.connect(config.mongoUri)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });
  })
  .catch(err => console.log(err));


  export { app }; 