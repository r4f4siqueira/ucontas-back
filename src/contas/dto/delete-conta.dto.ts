import { ApiProperty } from '@nestjs/swagger';

export class DeleteContaDto {
    @ApiProperty()
    contaId: number;
}
