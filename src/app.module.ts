import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarouselModule } from './carousel/carousel.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.BD_TYPE as any,
      host: process.env.BD_HOST,
      port: parseInt(process.env.BD_PORT),
      username: process.env.BD_USERNAME,
      password: process.env.BD_PASSWORD,
      database: process.env.BD_DATABASE,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: process.env.BD_SYNCHRONIZE === 'true',
    }),
    CarouselModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
