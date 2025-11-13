import { Controller } from '@nestjs/common';
import { TratamientosService } from './tratamientos.service';

@Controller('tratamientos')
export class TratamientosController {
  constructor(private readonly tratamientosService: TratamientosService) {}
}
