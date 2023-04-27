import { ApiProperty } from '@nestjs/swagger';

export class CreateContaDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  balance: number;
  @ApiProperty()
  user: number;
}
