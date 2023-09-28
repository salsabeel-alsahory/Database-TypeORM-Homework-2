import { Request, Response, NextFunction } from 'express';

export const validateRegistration = (req: Request, res: Response, next: NextFunction) => {
  // Implement your validation logic here
  // For example, check if the username and password meet certain criteria
  
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  // Call next() if validation passes
  next();
};
