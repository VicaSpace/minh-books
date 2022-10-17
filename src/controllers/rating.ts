import { Request, Response } from 'express';
import { rateBook } from '../services/rating';

/**
 * Handler for user rating book
 * @param req Request
 * @param res Response
 */
export const rateBookHandler = async (req: Request, res: Response) => {
  const { userId, bookId, grade } = req.body;
  const rating = await rateBook(userId, bookId, parseInt(grade));
  res.status(201).json({
    message: 'Seed data successfully',
    data: rating,
  });
};
