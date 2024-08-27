import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config/config';
import { IUser } from '../models/userModel';

interface AuthenticatedRequest extends Request {
  user?: IUser; // Add the user property to the Request interface
}

export const authMiddleware = (
  req: AuthenticatedRequest, 
  res: Response, 
  next: NextFunction
) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret) as IUser;
    req.user = decoded; // Assign the decoded user data to req.user
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
