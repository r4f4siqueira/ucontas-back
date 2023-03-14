import {
    Controller,
    Get,
    Post,
    Query,
    Request,
    UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

@ApiTags('Rotas Funcionais')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    @UseGuards(LocalAuthGuard)
    @Post('local')
    async loginLocal(
        @Query('username') username: string,
        @Query('password') password: string,
        @Request() req,
    ) {
        return req.user;
    }

    @UseGuards(LocalAuthGuard)
    @Post('jwt')
    async loginJwt(
        @Query('username') username: string,
        @Query('password') password: string,
        @Request() req,
    ) {
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(
        @Request()
        req,
    ) {
        return req.user;
    }
}
