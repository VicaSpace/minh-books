import { Author } from '../../models/Author';
import { getAllAuthors } from '../author';

describe('test Author services', () => {
  it('should return an array of authors', async () => {
    jest.spyOn(Author, 'findAll').mockResolvedValue([
      {
        id: 1,
        name: 'J. K. Rowling',
        bornOn: '31 July 1965',
        spouce: 'Neil Murray',
        children: 3,
        bornIn: 'USA',
        createdAt: '2022-10-17T04:45:13.516Z',
        updatedAt: '2022-10-17T04:45:13.516Z',
      },
      {
        id: 2,
        name: 'Jeffrey Archer',
        bornOn: '15 April 1940',
        spouce: 'Mary Weeden',
        children: 2,
        bornIn: null,
        createdAt: '2022-10-17T04:45:13.516Z',
        updatedAt: '2022-10-17T04:45:13.516Z',
      },
    ] as any[]);

    const authors = await getAllAuthors();
    expect(authors.length).toBe(2);
  });
});
