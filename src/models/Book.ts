import {
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Author } from './Author';
import { Rating } from './Rating';

@Table
export class Book extends Model<Book> {
  @Column
  name!: string;

  /* Associations */
  @ForeignKey(() => Author)
  @Column
  authorId!: number;

  @BelongsTo(() => Author)
  author!: Author;

  @HasMany(() => Rating)
  ratings!: Rating[];
  /* ----------- */

  @Column
  noOfPages!: number;

  @Column
  dateOfPublishing!: string;

  @Column({ allowNull: true })
  illustrator?: string;

  @Column
  genre!: string;

  @Column
  publisher!: string;
}
