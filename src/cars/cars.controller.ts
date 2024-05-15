import { Controller, Get, Param } from '@nestjs/common';
import { get } from 'http';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id') id: string) {
    console.log({ id: +1 });
    return this.carsService.findOneByid(+id);
  }
}
