import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { getAllAuthorsHandler } from '../controllers/author';

const router = Router();

router.get('/', asyncHandler(getAllAuthorsHandler));

export { router as authorRouter };
