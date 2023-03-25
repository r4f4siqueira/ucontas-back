import { Controller, Get, UseGuards, Post, Body } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ContasService } from './contas.service';
import { CreateContaDto } from './dto/create-conta.dto';

@Controller('contas')
export class ContasController {
    constructor(private readonly contasService: ContasService) {}

    @UseGuards(JwtAuthGuard)
    @Get('')
    getContas() {
        return this.contasService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Post('save')
    async create(@Body() createConta: CreateContaDto) {
        return this.contasService.save(createConta);
    }
}
