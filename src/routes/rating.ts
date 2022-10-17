import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { rateBookHandler } from '../controllers/rating';

const router = Router();

router.patch('/', asyncHandler(rateBookHandler));

export { router as ratingRouter };
