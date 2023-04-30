import { ApiProperty } from '@nestjs/swagger';

export class AddTokenDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  token: string;
}
