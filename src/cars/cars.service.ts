import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interfaces';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto/index';

// import interface car to use it in the service, this advice us to use the same interface in the service and the controller
@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },

    {
      id: uuid(),
      brand: 'Ford',
      model: 'Fiesta',
    },

    {
      id: uuid(),
      brand: 'BMW',
      model: 'M3',
    },
  ];
  findAll() {
    return this.cars;
  }
  findOneByid(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  }

  create(createCarDto: CreateCarDto) {
    const newCar: Car = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(newCar);
    return newCar;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findOneByid(id); // find the car by id

    this.cars = this.cars.map((car) => {
      // only update if id is the same
      if (car.id === id) {
        carDB = {
          ...carDB, // get the car from the database
          ...updateCarDto, // update the car with the new data
          id, // keep the same id to avoid change it intentionally
        };
        return carDB; // return the updated car
      }
      return car; // if the id is different return the car without changes
    });

    return carDB; // return the updated car
  }
}
