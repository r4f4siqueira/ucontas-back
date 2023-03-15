import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        console.log('Auth service');
        console.log('User:', user);

        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    //Controla oque será traduzido do token enviado pelo Bearer
    async login(user: any) {
        const payload = {
            userId: user.userId,
            name: user.name,
            username: user.username,
        };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
