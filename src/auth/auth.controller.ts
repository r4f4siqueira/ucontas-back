import { Controller, Post, Query, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Rotas Funcionais')
@Controller('auth')
export class AuthController {
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(
        @Query('username') username: string,
        @Query('password') password: string,
        @Request() req,
    ) {
        return req.user;
    }
}
