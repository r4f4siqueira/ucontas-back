import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
    @ApiProperty()
    userId: number;
    name: string;
    password: string;
}
