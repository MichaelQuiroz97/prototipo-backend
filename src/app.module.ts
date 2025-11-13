import { Module } from '@nestjs/common';
import { GeminiModule } from './gemini/gemini.module';
import { ConfigModule } from '@nestjs/config';
import { TratamientosModule } from './tratamientos/tratamientos.module';


@Module({
  imports: [
    GeminiModule, 
    ConfigModule.forRoot({
      isGlobal: true,
    }), TratamientosModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
