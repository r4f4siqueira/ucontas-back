import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tag')
export class Tag {
  @PrimaryGeneratedColumn()
  tagId: number;

  @Column({ type: 'text', nullable: false })
  descricao: string;

  @Column({ type: 'boolean', nullable: false })
  receita: boolean;

  @Column({
    type: 'timestamptz',
    default: new Date().toLocaleString(),
  })
  update: Date;
}
