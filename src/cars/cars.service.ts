import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interfaces';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto/index';

// import interface car to use it in the service, this advice us to use the same interface in the service and the controller
// TO CarsService be provider in the module, we need to add the @Injectable() decorator
@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'Toyota',
    //   model: 'Corolla',
    // },
  ];

  create(createCarDto: CreateCarDto) {
    const newCar: Car = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(newCar);
    return newCar;
  }

  findAll() {
    return this.cars;
  }

  findOneByid(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findOneByid(id); // find the car by id

    // This is not important, but it is a good practice to check if the id in the body is the same as the id in the url
    if (updateCarDto.id && updateCarDto.id !== id) {
      throw new NotFoundException(
        `Car with id ${id} dont match with the id in the body ${updateCarDto.id}`,
      );
    }

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

  delete(id: string) {
    let carDB = this.findOneByid(id); // find the car by id
    this.cars = this.cars.filter((car) => car.id !== id); // filter the car by id

    return carDB; // return the deleted car
  }

  // here is where we fill the cars with the seed data
  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
