import axios from 'axios';
import { Author } from '../models/Author';
import { Book } from '../models/Book';

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

/**
 * Get author seed data from external API
 * @returns Author seed data
 */
export const getAuthorSeed = async () => {
  // NOTE: Currently there are 2 authors so we seed 2 authors with ID 1 & 2
  const res = await Promise.all([
    axios.get('http://3.95.158.224:3000/api/book/author/1'),
    axios.get('http://3.95.158.224:3000/api/book/author/2'),
  ]);
  const data = res.map((r) => {
    const resData = r.data;
    delete resData.id;
    return resData;
  });
  return data;
};

interface BookResponseData {
  id?: number;
  name: string;
  img: string;
}

/**
 * Get all book seed data from external API
 * @returns Book seed data
 */
export const getBookSeed = async () => {
  // Get all books
  const allBooksRes = await axios.get('http://3.95.158.224:3000/api/books');
  const allBooksData = allBooksRes.data as Array<BookResponseData>;

  // Get all book details by id
  const bookData = await Promise.all(
    allBooksData.map(async (book) => {
      const bookDetailRes = await axios.get(
        `http://3.95.158.224:3000/api/book/${book.id}`
      );
      const bookDetailData = bookDetailRes.data;
      const bookObj = {
        ...book,
        ...bookDetailData,
      };
      delete bookObj.id;
      return bookObj;
    })
  );
  return bookData;
};
