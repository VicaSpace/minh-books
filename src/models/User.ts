import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Rating } from './Rating';

@Table
export class User extends Model<User> {
  @Column
  username!: string;

  @HasMany(() => Rating)
  ratings!: Rating[];
}
