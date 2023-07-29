import { ApiProperty } from '@nestjs/swagger';
import { Contas } from '../enties/contas.entity';
import { Users } from 'src/users/entities/users.entity';

export class CreateContaDto extends Contas {
  @ApiProperty()
  name: string;
  @ApiProperty()
  balance: number;
  @ApiProperty()
  user: Users;
}
