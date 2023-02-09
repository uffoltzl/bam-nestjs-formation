import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserDAO extends BaseEntity {
  constructor(params?: { id: string; username: string }) {
    super();
    if (!params) {
      return;
    }
    this.id = params.id;
    this.username = params.username;
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  username: string;
}
