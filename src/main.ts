import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets('public'); // Asegúrate de que 'public' sea la ruta correcta a la carpeta que contiene tus imágenes
  await app.listen(3000);
}
bootstrap();
