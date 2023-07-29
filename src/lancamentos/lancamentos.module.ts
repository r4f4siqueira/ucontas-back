import { TypeOrmModule } from '@nestjs/typeorm';
import { Lancamentos } from './entities/lancamento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lancamentos])],
  controllers: [ContasController],
  providers: [ContasService, JwtAuthGuard],
  exports: [ContasService],
})
export class ContasModule {}
