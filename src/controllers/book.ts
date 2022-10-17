import { Request, Response } from 'express';
import { getAllBooks, getAvgBookRating } from '../services/book';

/**
 * Get All Books with details handler
 * @param req Request
 * @param res Response
 */
export const getAllBooksHandler = async (_req: Request, res: Response) => {
  const books = await getAllBooks();
  res.status(201).json({
    message: 'Get all authors successfully',
    data: books,
  });
};

/**
 * Get an average rating of a book
 * @param req Request
 * @param res Response
 */
export const getAvgBookRatingHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const avgRating = await getAvgBookRating(parseInt(id));
  res.status(201).json({
    message: 'Get all authors successfully',
    data: avgRating,
  });
};
