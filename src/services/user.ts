import { User } from '../models/User';

/**
 * Register a user to the database
 * @param username Username to be registered
 * @returns Registered user
 */
export const registerUser = async (username: string) => {
  const user = await User.create({
    username,
  } as any);
  return user;
};
