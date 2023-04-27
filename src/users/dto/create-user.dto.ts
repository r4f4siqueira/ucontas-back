import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly username: string;
  @ApiProperty()
  password: string;
}
