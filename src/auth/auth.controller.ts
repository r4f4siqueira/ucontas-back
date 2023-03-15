import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@ApiTags('Rotas auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    //NOTE - Desativado temporariamente
    // @UseGuards(LocalAuthGuard)
    // @Post('local')
    // async loginLocal(
    //     @Query('username') username: string,
    //     @Query('password') password: string,
    //     @Request() req,
    // ) {
    //     return req.user;
    // }

    @UseGuards(LocalAuthGuard)
    @Post()
    async loginJwt(@Request() req) {
        return this.authService.login(req.user);
    }
}
