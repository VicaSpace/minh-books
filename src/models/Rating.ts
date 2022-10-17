import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Book } from './Book';
import { User } from './User';

@Table
export class Rating extends Model<Rating> {
  @ForeignKey(() => Book)
  @Column
  bookId!: number;

  @BelongsTo(() => Book)
  book!: Book;

  @ForeignKey(() => User)
  @Column
  userId!: number;

  @BelongsTo(() => User)
  user!: User;

  @Column
  grade!: number;
}
