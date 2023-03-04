import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: 'Rafael',
            password: '123123',
        },
        {
            userId: 2,
            username: 'Giovanna',
            password: '123123',
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find((user) => user.username === username);
    }
}
