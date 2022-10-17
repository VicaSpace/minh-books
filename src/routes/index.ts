import { Router } from 'express';
import { authorRouter } from './author';
import { bookRouter } from './book';
import { ratingRouter } from './rating';
import { seedRouter } from './seed';
import { userRouter } from './user';

const router = Router();

router.use('/seed', seedRouter);

router.use('/user', userRouter);

router.use('/books', bookRouter);

router.use('/authors', authorRouter);

router.use('/ratings', ratingRouter);

export { router };
