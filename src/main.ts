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
    .addTag('UContas-backend')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3333);
}
bootstrap();
