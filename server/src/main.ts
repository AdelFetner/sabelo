import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidNonWhitelisted: false,
      whitelist: false,
    }),
  );

  const allowedOrigins = [
    'https://sabelo-mu.vercel.app', // hosted URL
    'http://localhost:3001', // local development
  ];

  app.enableCors({
    origin: allowedOrigins,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders: 'Content-Type,Authorization',
  });

  await app.listen(3000);
}

bootstrap();
