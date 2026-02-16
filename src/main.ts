/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { cleanupOpenApiDoc } from 'nestjs-zod';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('AI Commerce API')
    .setDescription('API for managing products, users, and orders in an AI-powered e-commerce platform')
    .setVersion('1.0')
    .addTag('products')
    .addTag('users')
    .addTag('orders')
    .build();

  const rawDocument = SwaggerModule.createDocument(app, config);
  const document = cleanupOpenApiDoc(rawDocument);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3000);
}
bootstrap();
