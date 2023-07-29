import { Contas } from 'src/contas/enties/contas.entity';
import { Tag } from 'src/tags/entities/tag.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('lancamentos')
export class Lancamentos {
  @PrimaryGeneratedColumn()
  lancamentoId: number;

  @Column({ type: 'text' })
  descricao: string;

  @OneToOne(() => Contas, (conta) => conta.contaId)
  contaOrigem: number;

  @OneToOne(() => Contas, (conta) => conta.contaId)
  contaDestino: number;

  @Column({ type: 'money', nullable: false })
  valor: number;

  @OneToOne(() => Tag, (tag) => tag.tagId)
  Tag: number;

  @Column({ type: 'date', default: new Date() })
  dataLancamento: Date;

  @Column({
    type: 'timestamptz',
    default: new Date(),
  })
  update: Date;
}
