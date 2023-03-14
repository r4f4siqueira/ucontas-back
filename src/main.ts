import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
        .setTitle('UContas - Backend')
        .setDescription(
            'API desenvolvida para teste de conhecimento em Nest.js, com intenções de usala futuramente em um projeto de controle contas',
        )
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    await app.listen(3333);
    console.table([
        { Descricao: 'Base URL', url: 'http://127.0.0.1:3333/' },
        { Descricao: 'Test URL', url: 'http://127.0.0.1:3333/api' },
    ]);
    console.log('\tCtrl + Click acess link');
}
bootstrap();
