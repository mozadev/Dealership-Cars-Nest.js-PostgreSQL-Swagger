import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';
import { CarsService } from 'src/cars/cars.service';

@Injectable()
export class SeedService {
  constructor(private readonly carsService: CarsService) {}

  populateDB() {
    // CARS_SEED
    // BRANDS_SEED

    // return CARS_SEED;
    // return BRANDS_SEED;

    this.carsService.fillCarsWithSeedData(CARS_SEED);

    return 'Seed executed successfully!';
  }
}
