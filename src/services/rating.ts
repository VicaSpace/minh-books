import { Rating } from '../models/Rating';

/**
 * Rate a book from user
 * @param userId User ID
 * @param bookId Book ID
 * @returns Book Rating from a user
 */
export const rateBook = async (
  userId: number,
  bookId: number,
  grade: number
) => {
  const rating = await Rating.create({
    userId,
    bookId,
    grade,
  } as any);
  return rating;
};
