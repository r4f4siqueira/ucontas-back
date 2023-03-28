import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginAuthDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async validateUser(userLogin: LoginAuthDto): Promise<any> {
        const user = await this.usersService.findOne(userLogin.username);
        // console.log('Auth service');
        // console.log('User:', user);

        if (user && user.password === userLogin.password) {
            const { ...result } = user;
            return result;
        }
        return null;
    }

    //Controla oque será traduzido do token enviado pelo Bearer
    async login(userLogin: LoginAuthDto) {
        const user = await this.usersService.findOne(userLogin.username);

        if (user && user.password === userLogin.password) {
            const payload = {
                userId: user.userId,
                name: user.name,
                username: user.username,
            };

            this.usersService.addToken({
                id: user.userId,
                token: this.jwtService.sign(payload),
            });
            return {
                access_token: this.jwtService.sign(payload),
            };
        }
        throw new NotFoundException('Usuario não encontrado');
    }
}
