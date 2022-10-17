import { Request, Response } from 'express';
import { getAllAuthors } from '../services/author';

/**
 * Get All Authors handler
 * @param req Request
 * @param res Response
 */
export const getAllAuthorsHandler = async (_req: Request, res: Response) => {
  const authors = await getAllAuthors();
  res.status(201).json({
    message: 'Get all authors successfully',
    data: authors,
  });
};
