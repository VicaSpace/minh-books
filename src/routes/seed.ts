import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { seedDataHandler } from '../controllers/seed';

const router = Router();

router.post('/', asyncHandler(seedDataHandler));

export { router as seedRouter };
