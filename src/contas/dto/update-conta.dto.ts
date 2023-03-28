import { ApiProperty } from '@nestjs/swagger';

export class UpdateContaDto {
    @ApiProperty()
    contaId: number;
    @ApiProperty()
    name?: string;
    @ApiProperty()
    balance?: number;
}
