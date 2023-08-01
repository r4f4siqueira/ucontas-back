import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LancamentosService } from './lancamentos.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('💲 lancamento')
@Controller('lancamentos')
export class LancamentosController {
  constructor(private readonly lancamentoService: LancamentosService) {}

  @UseGuards(JwtAuthGuard)
  @Get('')
  getLancamentos() {
    return this.lancamentoService.findAll();
  }
}
