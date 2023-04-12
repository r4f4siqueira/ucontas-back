import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tag')
export class Tag {
    @PrimaryGeneratedColumn()
    tagId: number;

    @Column('text')
    descricao: string;

    @Column('character')
    type: string;

    @Column({
        type: 'timestamptz',
        default: new Date().toLocaleString(),
    })
    update: Date;
}
