import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { get } from 'http';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
@UsePipes(ValidationPipe) // validate Dtos, This pipe is used to validate the data that comes from the body of the request and the parameters of the request, apply the validation to all the methods in the controller
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  // @Get(':id/:status') if id isn't a uuid don't request database o  service
  @Get(':id')
  getCarById(@Param('id', new ParseUUIDPipe({ version: '5' })) id: string) {
    console.log({ id });
    return this.carsService.findOneByid(id);
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return createCarDto;
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    body: any,
  ) {
    return body;
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      method: 'delete',
      id,
    };
  }
}
