import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || 'your_secret_key',
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/auth'
};
