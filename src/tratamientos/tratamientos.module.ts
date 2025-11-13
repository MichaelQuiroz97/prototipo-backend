import { Module } from '@nestjs/common';
import { TratamientosService } from './tratamientos.service';
import { TratamientosController } from './tratamientos.controller';
<<<<<<< HEAD
import { Tratamiento } from './dtos/tratamiento.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Especialidad } from './dtos/especialidad.entity';

@Module({

  imports: [TypeOrmModule.forFeature([Tratamiento, Especialidad])],
  controllers: [TratamientosController],
  providers: [TratamientosService],
  
=======

@Module({
  controllers: [TratamientosController],
  providers: [TratamientosService],
>>>>>>> 0d4bb5140643cb909f37cd1e4dce11fd7e1a2150
})
export class TratamientosModule {}
