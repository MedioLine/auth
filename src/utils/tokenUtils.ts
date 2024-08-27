import jwt from 'jsonwebtoken';
import { config } from '../config/config';
import { IUser } from '../models/userModel';

export const generateToken = (user: IUser) => {
  return jwt.sign({ id: user._id, email: user.email }, config.jwtSecret, {
    expiresIn: '1h'
  });
};
