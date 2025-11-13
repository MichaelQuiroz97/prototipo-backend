import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

// Global error handlers to capture runtime errors and unhandled rejections
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err && (err.stack || err));
  // don't exit immediately so logs can flush; optionally exit if desired
});

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection at:', reason);
});

process.on('exit', (code) => {
  console.log('Process exit event with code:', code);
});

process.on('SIGINT', () => {
  console.log('Received SIGINT');
  // do not exit here to allow graceful shutdown
});

process.on('SIGTERM', () => {
  console.log('Received SIGTERM');
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
