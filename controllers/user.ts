import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../db/entities/userdb';

export const registerUser = async (req: Request, res: Response) => {
  const userRepository = getRepository(User);
  
  const { username, password } = req.body;

  const newUser = userRepository.create({ username, password });
  await userRepository.save(newUser);

  return res.status(201).json({ message: 'User registered successfully' });
};
