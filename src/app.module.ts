import { Module } from '@nestjs/common';
import { GeminiModule } from './gemini/gemini.module';
import { ConfigModule } from '@nestjs/config';
<<<<<<< HEAD
import { TypeOrmModule } from '@nestjs/typeorm';
import { TratamientosModule } from './tratamientos/tratamientos.module';
import { Tratamiento } from './tratamientos/dtos/tratamiento.entity';
import { Especialidad } from './tratamientos/dtos/especialidad.entity';
import { ClientesModule } from './clientes/clientes.module';
=======
import { TratamientosModule } from './tratamientos/tratamientos.module';
>>>>>>> 0d4bb5140643cb909f37cd1e4dce11fd7e1a2150


@Module({
  imports: [
<<<<<<< HEAD

    // Configuración global
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT ?? '5432') ,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || 'admin97',
      database: process.env.DB_NAME || 'prototipo',
      entities: [Tratamiento, Especialidad],
      synchronize: false, 
      autoLoadEntities: true,
    }),

    // Módulos del sistema
    GeminiModule,
    TratamientosModule,
    ClientesModule

=======
    GeminiModule, 
    ConfigModule.forRoot({
      isGlobal: true,
    }), TratamientosModule
>>>>>>> 0d4bb5140643cb909f37cd1e4dce11fd7e1a2150
  ],
  controllers: [],
  providers: [],
})
<<<<<<< HEAD
export class AppModule { }
=======
export class AppModule {}
>>>>>>> 0d4bb5140643cb909f37cd1e4dce11fd7e1a2150
