import { Author } from '../models/Author';

/**
 * Get all authors from database
 * @returns All Authors
 */
export const getAllAuthors = async () => {
  const authors = await Author.findAll({});
  return authors;
};
