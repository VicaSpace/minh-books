import { Author } from '../../models/Author';
import { Book } from '../../models/Book';
import * as seedUtils from '../../utils/seed';
import { seedData } from '../seed';

describe('test Seed services', () => {
  it('should seed successfully without throwing any errors', async () => {
    jest.spyOn(seedUtils, 'getAuthorSeed').mockResolvedValue([]);
    jest.spyOn(seedUtils, 'getBookSeed').mockResolvedValue([]);
    jest.spyOn(Author, 'bulkCreate').mockResolvedValue([]);
    jest.spyOn(Book, 'bulkCreate').mockResolvedValue([]);
    await expect(seedData()).resolves.not.toThrow();
  });
});
