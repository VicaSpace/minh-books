import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Book } from './Book';

@Table
export class Author extends Model<Author> {
  @Column
  name!: string;

  @Column
  bornOn!: string;

  @Column
  spouce!: string;

  @Column
  children!: number;

  @Column
  bornIn!: string;

  @HasMany(() => Book)
  books!: Book[];
}
