import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lancamentos } from './entities/lancamento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LancamentosService {
  constructor(
    @InjectRepository(Lancamentos)
    private readonly lancamentoRepository: Repository<Lancamentos>,
  ) {}
  async findAll() {
    return await this.lancamentoRepository.find();
  }
}
