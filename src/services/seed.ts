import { Author } from '../models/Author';
import { Book } from '../models/Book';
import { getAuthorSeed, getBookSeed } from '../utils/seed';

/**
 * Seed data into the database
 */
export const seedData = async () => {
  const authorSeed = await getAuthorSeed();
  // Insert authors into DB
  await Author.bulkCreate(authorSeed);
  console.log('Bulk created author seed data successfully.');

  // Insert books into DB
  const bookSeed = await getBookSeed();
  await Book.bulkCreate(bookSeed);
  console.log('Bulk created book seed data successfully.');
};
