import { sequelize } from '../../db';
import { Book } from '../../models/Book';
import { getAllBooks, getAvgBookRating } from '../book';

describe('test Book services', () => {
  it('should return a list of books', async () => {
    const expectedBooks = [
      {
        id: 1,
        name: "Harry Potter and the Philosopher's Stone",
        authorId: 1,
        noOfPages: 223,
        dateOfPublishing: '26 June 1997',
        illustrator: 'Cliff Wright',
        genre: 'Fiction',
        publisher: 'Bloomsbury',
        createdAt: '2022-10-17T04:23:22.680Z',
        updatedAt: '2022-10-17T04:23:22.680Z',
        author: {
          id: 1,
          name: 'J. K. Rowling',
          bornOn: '31 July 1965',
          spouce: 'Neil Murray',
          children: 3,
          bornIn: 'USA',
          createdAt: '2022-10-17T04:23:21.344Z',
          updatedAt: '2022-10-17T04:23:21.344Z',
        },
      },
      {
        id: 2,
        name: 'Harry Potter and the Chamber of Secrets',
        authorId: 1,
        noOfPages: 251,
        dateOfPublishing: '2 July 1998',
        illustrator: 'Cliff Wright',
        genre: 'Fiction',
        publisher: 'Bloomsbury',
        createdAt: '2022-10-17T04:23:22.680Z',
        updatedAt: '2022-10-17T04:23:22.680Z',
        author: {
          id: 1,
          name: 'J. K. Rowling',
          bornOn: '31 July 1965',
          spouce: 'Neil Murray',
          children: 3,
          bornIn: 'USA',
          createdAt: '2022-10-17T04:23:21.344Z',
          updatedAt: '2022-10-17T04:23:21.344Z',
        },
      },
    ];
    jest.spyOn(Book, 'findAll').mockResolvedValue(expectedBooks as any);
    const books = await getAllBooks();
    expect(books.length).toBe(2);
  });

  it('should return an average rating of a book based on bookId', async () => {
    const bookId = 1;
    const expectedBookRating = {
      bookId,
      avgRating: '4.5000000000000000',
    };
    jest
      .spyOn(sequelize, 'query')
      .mockResolvedValue([expectedBookRating] as any);

    const avgRating = await getAvgBookRating(bookId);
    expect(avgRating).toMatchObject(expectedBookRating);
  });

  it('should return empty objet when bookId is not valid', async () => {
    const bookId = 1337;
    jest.spyOn(sequelize, 'query').mockResolvedValue([] as any);
    const avgRating = await getAvgBookRating(bookId);
    expect(avgRating).toMatchObject({});
  });
});
