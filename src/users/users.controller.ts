import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('Rotas users')
@Controller('users')
export class UsersController {
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(
        @Request()
        req,
    ) {
        return req.user;
    }
}
