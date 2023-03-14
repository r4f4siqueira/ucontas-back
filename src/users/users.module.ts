import { Module } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UsersService } from './users.service';

@Module({
    providers: [UsersService, JwtAuthGuard],
    exports: [UsersService],
})
export class UsersModule {}
