import { QueryTypes } from 'sequelize';
import { sequelize } from '../db';
import { Author } from '../models/Author';
import { Book } from '../models/Book';

/**
 * Get All Books from Database with details
 * @returns All Books with details
 */
export const getAllBooks = async () => {
  const books = await Book.findAll({
    include: {
      model: Author,
    },
  });
  return books;
};

/**
 * Get Average Rating of a Book based on ID
 * @param bookId Book ID
 * @returns Average rating from Book ID
 */
export const getAvgBookRating = async (bookId: number) => {
  const avgBookRating = await sequelize.query(
    'SELECT "bookId", AVG("grade") "avgRating" FROM "Ratings" WHERE "bookId" = :bookId GROUP BY "bookId"',
    {
      type: QueryTypes.SELECT,
      replacements: {
        bookId,
      },
    }
  );
  if (avgBookRating.length == 0) return {};
  return avgBookRating[0];
};
