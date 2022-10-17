import { Sequelize } from 'sequelize-typescript';
import { Author } from '../models/Author';
import { Book } from '../models/Book';
import { Rating } from '../models/Rating';
import { User } from '../models/User';

const sequelize = new Sequelize({
  database: 'postgres',
  dialect: 'postgres',
  username: 'myusername',
  password: 'mypassword',
  host: '127.0.0.1',
  port: 5432,
  models: [Author, Book, User, Rating],
});

export { sequelize };
