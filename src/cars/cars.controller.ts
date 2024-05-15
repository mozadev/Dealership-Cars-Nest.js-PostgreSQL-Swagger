import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
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
  getCarById(@Param('id', ParseIntPipe) id: number) {
    console.log({ id });
    throw new Error('Not implemented');
    return this.carsService.findOneByid(id);
  }
}
