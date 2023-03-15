import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>,
    ) {}

    findAll() {
        return this.usersRepository.find();
    }

    findOne(username: any) {
        console.log(username);

        const user = this.usersRepository.findOne({ where: { username } });

        if (!user) {
            throw new NotFoundException('Usuario não encontrado');
        }

        return user;
    }

    save(createUserDto: any) {
        return this.usersRepository.save(createUserDto);
    }
}
