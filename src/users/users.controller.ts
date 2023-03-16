import {
    Body,
    Controller,
    Get,
    Post,
    Request,
    UseGuards,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@ApiTags('Rotas users')
@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(
        @Request()
        req,
    ) {
        return req.user;
    }

    @Post('save')
    async create(@Body() createUsers: CreateUserDto) {
        //NOTE - vai no banco verificar se o usuário já existe
        //Caso não tenha cria o usuário no banco e retorna o usuário sem a informação da senha
        const user = await this.userService.findOne(createUsers.username);
        if (!user) {
            this.userService.save(createUsers);
            delete createUsers.password;
            return createUsers;
        }
        throw new HttpException('Usuário já cadastrado', HttpStatus.FORBIDDEN);
    }

    @UseGuards(JwtAuthGuard)
    @Get('')
    getUsers() {
        return this.userService.findAll();
    }
}
