import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
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
}
