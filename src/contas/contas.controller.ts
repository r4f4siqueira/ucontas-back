import {
    Controller,
    Get,
    UseGuards,
    Post,
    Body,
    Delete,
    Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ContasService } from './contas.service';
import { CreateContaDto } from './dto/create-conta.dto';
import { DeleteContaDto } from './dto/delete-conta.dto';
import { UpdateContaDto } from './dto/update-conta.dto';

@ApiTags('🏦 Contas')
@Controller('contas')
export class ContasController {
    constructor(private readonly contasService: ContasService) {}

    @UseGuards(JwtAuthGuard)
    @Get('')
    getContas() {
        return this.contasService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Post('')
    async createConta(@Body() createConta: CreateContaDto) {
        return this.contasService.save(createConta);
    }

    @UseGuards(JwtAuthGuard)
    @Put('')
    async updateConta(@Body() updateConta: UpdateContaDto) {
        return this.contasService.update(updateConta);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('')
    async deleteConta(@Body() deleteConta: DeleteContaDto) {
        return this.contasService.delete(deleteConta);
    }

    //GET = Pegar dados,
    //POST = Cadastrar dados,
    //PUT = Atualizar dados,
    //DELETE = Adivinha!,
}
