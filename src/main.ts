import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

     app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );



   const config = new DocumentBuilder()
    .setTitle('API Gestão Agro')
    .setDescription('Documentação da API do sistema de gestão agro')
    .setVersion('1.0')
    .addTag('animais') // tag opcional
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(Number(process.env.PORT));
}
bootstrap();
