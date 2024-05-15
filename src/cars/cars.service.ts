import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interfaces';

// import interface car to use it in the service, this advice us to use the same interface in the service and the controller
@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },

    {
      id: 2,
      brand: 'Ford',
      model: 'Fiesta',
    },

    {
      id: 3,
      brand: 'BMW',
      model: 'M3',
    },
  ];
  findAll() {
    return this.cars;
  }
  findOneByid(id: number) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  }
}
