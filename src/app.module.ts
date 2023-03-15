import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        AuthModule,
        UsersModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'admin',
            database: 'ucontas',
            autoLoadEntities: true,
            synchronize: true, //TEMPORARIO - mudar para false caso usar em produção
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
