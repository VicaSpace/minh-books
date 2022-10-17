import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import {
  getAllBooksHandler,
  getAvgBookRatingHandler,
} from '../controllers/book';

const router = Router();

router.get('/', asyncHandler(getAllBooksHandler));

router.get('/:id/avg-rating', asyncHandler(getAvgBookRatingHandler));

export { router as bookRouter };
