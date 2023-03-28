import { Contas } from 'src/contas/enties/contas.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('users')
export class Users {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column('text')
    name: string;

    @Column('text', { unique: true })
    username: string;

    @Column('text')
    password: string;

    @Column('text', { nullable: true })
    token: string;

    @Column({
        type: 'timestamptz',
        default: new Date().toLocaleString(),
    })
    update: Date;

    @OneToMany(() => Contas, (conta) => conta.user)
    contas: Contas[];
}
