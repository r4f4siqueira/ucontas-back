import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContaDto } from './dto/create-conta.dto';
import { Contas } from './enties/contas.entity';

@Injectable()
export class ContasService {
    constructor(
        @InjectRepository(Contas)
        private readonly contasRepository: Repository<Contas>,
    ) {}

    findAll() {
        return this.contasRepository.find();
    }

    save(createContaDto: CreateContaDto) {
        return this.contasRepository.save(createContaDto);
    }
}
