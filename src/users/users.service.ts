import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AddTokenDto } from './dto/addToken-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>,
    ) {}

    findAll() {
        return this.usersRepository.find({
            //NOTE - Atributo select usado apenas para retornar os dados nescessários
            select: ['userId', 'username', 'name'],
        });
    }

    findOne(username: any) {
        const user = this.usersRepository.findOne({ where: { username } });

        if (!user) {
            throw new NotFoundException('Usuario não encontrado');
        }

        return user;
    }

    save(createUserDto: CreateUserDto) {
        this.usersRepository.save(createUserDto);
    }

    update(updateUserDto: UpdateUserDto) {
        this.usersRepository.update(updateUserDto.userId, {
            name: updateUserDto.name,
            password: updateUserDto.password,
            update: new Date().toLocaleString(),
        });
    }

    /**
     *
     * @param addToken objeto { `id` , `token` }
     * @example { id: user.id , token: usertoken }
     */
    addToken(addToken: AddTokenDto) {
        this.usersRepository.update(addToken.id, {
            token: addToken.token,
            update: new Date().toLocaleString(),
        });
    }
}
//this.usersRepository.save(createUserDto);
