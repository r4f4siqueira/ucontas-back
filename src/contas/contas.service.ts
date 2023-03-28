import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContaDto } from './dto/create-conta.dto';
import { DeleteContaDto } from './dto/delete-conta.dto';
import { UpdateContaDto } from './dto/update-conta.dto';
import { Contas } from './enties/contas.entity';

@Injectable()
export class ContasService {
    constructor(
        @InjectRepository(Contas)
        private readonly contasRepository: Repository<Contas>,
    ) {}

    async findAll() {
        return await this.contasRepository.find();
    }

    async save(createContaDto: CreateContaDto) {
        return await this.contasRepository.save(createContaDto);
    }

    async update(updateConta: UpdateContaDto) {
        try {
            return await this.contasRepository.update(updateConta.contaId, {
                name: updateConta.name,
                balance: updateConta.balance,
                update: new Date().toLocaleString(),
            });
        } catch (error) {
            console.log(error);
        }
    }

    async delete(deleteConta: DeleteContaDto) {
        try {
            return await this.contasRepository.delete(deleteConta.contaId);
        } catch (error) {
            console.log(error);
        }
    }
}
