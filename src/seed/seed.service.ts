import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';
import { CarsService } from 'src/cars/cars.service';

// to
@Injectable()
export class SeedService {
  constructor(private readonly carsService: CarsService) {}

  populateDB() {
    // CARS_SEED
    // BRANDS_SEED

    // return CARS_SEED;
    // return BRANDS_SEED;

    // here we are calling the fillCarsWithSeedData method from the CarsService to populate the database with the seed data
    this.carsService.fillCarsWithSeedData(CARS_SEED);

    return 'Seed executed successfully!';
  }
}
