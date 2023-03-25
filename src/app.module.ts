import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ContasModule } from './contas/contas.module';

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
            synchronize: false, //REVIEW - deixar false caso usar em produção para não correr o risco de perdar os dados
        }),
        ContasModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
