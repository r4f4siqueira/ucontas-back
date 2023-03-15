import { Module } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Users])],
    providers: [UsersService, JwtAuthGuard],
    exports: [UsersService],
    controllers: [UsersController],
})
export class UsersModule {}
