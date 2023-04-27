import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty()
  userId: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  update: Date;
}
