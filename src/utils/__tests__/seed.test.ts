import axios from 'axios';
import { getAuthorSeed, getBookSeed } from '../seed';

jest.mock('axios');

(axios as any).get.mockImplementation((url: string) => {
  switch (url) {
    case 'http://3.95.158.224:3000/api/book/author/1':
      return Promise.resolve({
        data: {
          id: 1,
          name: 'J. K. Rowling',
          bornOn: '31 July 1965',
          spouce: 'Neil Murray',
          children: 3,
          bornIn: 'USA',
        },
      });
    case 'http://3.95.158.224:3000/api/book/author/2':
      return Promise.resolve({
        data: {
          id: 2,
          name: 'Jeffrey Archer',
          bornOn: '15 April 1940',
          spouce: 'Mary Weeden',
          children: 2,
          nationality: 'UK',
        },
      });
    // get book details by ID:
    case 'http://3.95.158.224:3000/api/book/1':
      return Promise.resolve({
        data: {
          id: 1,
          authorId: 1,
          noOfPages: 223,
          dateOfPublishing: '26 June 1997',
          illustrator: 'Cliff Wright',
          genre: 'Fiction',
          publisher: 'Bloomsbury',
        },
      });
    case 'http://3.95.158.224:3000/api/book/2':
      return Promise.resolve({
        data: {
          id: 2,
          authorId: 1,
          noOfPages: 251,
          dateOfPublishing: '2 July 1998',
          illustrator: 'Cliff Wright',
          genre: 'Fiction',
          publisher: 'Bloomsbury',
        },
      });
    // get all books API
    case 'http://3.95.158.224:3000/api/books':
      return Promise.resolve({
        data: [
          {
            id: 1,
            name: "Harry Potter and the Philosopher's Stone",
            img: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg',
          },
          {
            id: 2,
            name: 'Harry Potter and the Chamber of Secrets',
            img: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Harry_Potter_and_the_Chamber_of_Secrets.jpg',
          },
        ],
      });
  }
});

describe('test Seed utils', () => {
  it('should return author seeds as a list', async () => {
    // NOTE: Mock axios get for different urls
    const expectedSeedData = [
      {
        name: 'J. K. Rowling',
        bornOn: '31 July 1965',
        spouce: 'Neil Murray',
        children: 3,
        bornIn: 'USA',
      },
      {
        name: 'Jeffrey Archer',
        bornOn: '15 April 1940',
        spouce: 'Mary Weeden',
        children: 2,
        nationality: 'UK',
      },
    ];
    const authorSeedData = await getAuthorSeed();
    expect(authorSeedData).toMatchObject(expectedSeedData);
  });

  it('should return book seeds as a list', async () => {
    const expectedSeedData = [
      {
        name: "Harry Potter and the Philosopher's Stone",
        img: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg',
      },
      {
        name: 'Harry Potter and the Chamber of Secrets',
        img: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Harry_Potter_and_the_Chamber_of_Secrets.jpg',
      },
    ];
    const bookSeedData = await getBookSeed();
    expect(bookSeedData).toMatchObject(expectedSeedData);
  });
});
