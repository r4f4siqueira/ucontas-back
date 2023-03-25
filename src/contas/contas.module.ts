import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ContasController } from './contas.controller';
import { ContasService } from './contas.service';
import { Contas } from './enties/contas.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Contas])],
    controllers: [ContasController],
    providers: [ContasService, JwtAuthGuard],
    exports: [ContasService],
})
export class ContasModule {}
