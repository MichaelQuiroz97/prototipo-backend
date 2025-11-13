import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
<<<<<<< HEAD
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

// ============================================================
//  MANEJADORES GLOBALES DE ERRORES
// ============================================================

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err?.stack || err);
});

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason);
=======

// Global error handlers to capture runtime errors and unhandled rejections
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err && (err.stack || err));
  // don't exit immediately so logs can flush; optionally exit if desired
});

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection at:', reason);
>>>>>>> 0d4bb5140643cb909f37cd1e4dce11fd7e1a2150
});

process.on('exit', (code) => {
  console.log('Process exit event with code:', code);
});

process.on('SIGINT', () => {
<<<<<<< HEAD
  console.log('Received SIGINT (Ctrl+C) — graceful shutdown');
});

process.on('SIGTERM', () => {
  console.log('Received SIGTERM — graceful shutdown');
});


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
=======
  console.log('Received SIGINT');
  // do not exit here to allow graceful shutdown
});

process.on('SIGTERM', () => {
  console.log('Received SIGTERM');
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
>>>>>>> 0d4bb5140643cb909f37cd1e4dce11fd7e1a2150
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );
<<<<<<< HEAD

  // ============================================================
  // SERVIR ARCHIVOS ESTÁTICOS (IMÁGENES)
  // ============================================================

  // Esto permite acceder a /recursos/... desde el navegador o Flutter
  app.useStaticAssets(join(__dirname, '..', 'recursos'), {
    prefix: '/recursos/', // URL base
  });

  // (Opcional) Habilitar CORS si accedes desde Flutter o web
  app.enableCors({
    origin: '*', // o restringe según tu dominio o IP del móvil
    methods: 'GET,POST,PATCH,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });


=======
>>>>>>> 0d4bb5140643cb909f37cd1e4dce11fd7e1a2150
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
