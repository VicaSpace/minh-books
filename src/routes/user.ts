import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { registerUserHandler } from '../controllers/user';

const router = Router();

router.post('/register', asyncHandler(registerUserHandler));

export { router as userRouter };
