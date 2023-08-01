import { TypeOrmModule } from '@nestjs/typeorm';
import { Lancamentos } from './entities/lancamento.entity';
import { LancamentosController } from './lancamentos.controller';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Module } from '@nestjs/common';
import { LancamentosService } from './lancamentos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Lancamentos])],
  controllers: [LancamentosController],
  providers: [LancamentosService, JwtAuthGuard],
  exports: [LancamentosService],
})
export class LancamentosModule {}
