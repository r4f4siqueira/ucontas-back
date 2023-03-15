import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class Users {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column('text')
    name: string;

    @Column('text')
    username: string;

    @Column('text')
    password: string;
}
