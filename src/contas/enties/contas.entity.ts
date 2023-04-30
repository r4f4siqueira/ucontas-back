import { Users } from 'src/users/entities/users.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('contas')
export class Contas {
  @PrimaryGeneratedColumn()
  contaId: number;

  @Column('text')
  name: string;

  @Column('money')
  balance: number;

  @Column({
    type: 'timestamptz',
    default: new Date().toLocaleString(),
  })
  update: Date;

  @ManyToOne(() => Users, (user) => user.userId)
  @Column('int')
  user: number;
}
