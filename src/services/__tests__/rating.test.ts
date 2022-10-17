import { Rating } from '../../models/Rating';
import { rateBook } from '../rating';

describe('test Rating services', () => {
  it('should return a created rating of a book', async () => {
    const expectedRating = {
      id: 2,
      userId: 2,
      bookId: 1,
      grade: 5,
      updatedAt: '2022-10-17T04:46:56.956Z',
      createdAt: '2022-10-17T04:46:56.956Z',
    };
    jest.spyOn(Rating, 'create').mockResolvedValue(expectedRating);
    const rating = await rateBook(2, 1, 5);
    expect(rating).toMatchObject(expectedRating);
  });
});
