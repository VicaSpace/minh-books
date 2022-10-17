import { User } from '../../models/User';
import { registerUser } from '../user';

describe('test User services', () => {
  it('should return a registered user', async () => {
    const expectedUser = {
      id: 1,
      username: 'bietdoikiem',
      updatedAt: '2022-10-17T04:46:08.392Z',
      createdAt: '2022-10-17T04:46:08.392Z',
    };
    jest.spyOn(User, 'create').mockResolvedValue(expectedUser);
    const user = await registerUser('bietdoikiem');
    expect(user).toMatchObject(expectedUser);
  });
});
