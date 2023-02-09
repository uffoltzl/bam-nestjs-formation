import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('player')
export class PlayerDAO extends BaseEntity {
  constructor(params?: { id: string; pseudo: string }) {
    super();
    if (!params) {
      return;
    }
    this.id = params.id;
    this.pseudo = params.pseudo;
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  pseudo: string;
}
