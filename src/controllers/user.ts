import { Request, Response } from 'express';
import { registerUser } from '../services/user';

/**
 * Register a User handler
 * @param req Request
 * @param res Response
 */
export const registerUserHandler = async (req: Request, res: Response) => {
  const { username } = req.body;
  const registeredUser = await registerUser(username);
  res.status(201).json({
    message: 'Registered user successfully',
    data: registeredUser,
  });
};
