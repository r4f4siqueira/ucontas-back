import { Module } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
    providers: [UsersService, JwtAuthGuard],
    exports: [UsersService],
    controllers: [UsersController],
})
export class UsersModule {}
