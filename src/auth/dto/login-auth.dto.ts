import { ApiProperty } from '@nestjs/swagger';

export class LoginAuthDto {
    @ApiProperty()
    username: string;
    password: string;
}
