import {
    Body,
    Controller,
    Get,
    Post,
    Request,
    UseGuards,
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
    create(@Body() createUsers: CreateUserDto) {
        return this.userService.save(createUsers);
    }
}
