import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Brand } from './entities/brand.entity';

import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'Toyota',
      createdAt: new Date().getTime(),
    },
  ];

  create(createBrandDto: CreateBrandDto) {
    // return 'This action adds a new brand';
    const { name } = createBrandDto;

    const newBrand: Brand = {
      id: uuid(),
      // ...createBrandDto,
      name: name.toLocaleLowerCase(),
      createdAt: new Date().getTime(),
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    // return `This action returns a #${id} brand`;
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) throw new NotFoundException(`Brand with id "${id}"not found`);

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);

    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        brandDB.updatedAt = new Date().getTime();
        brand = { ...brand, ...updateBrandDto };
        return brandDB;
      }
      return brand;
    });
  }

  remove(id: string) {
    // return `This action removes a #${id} brand`;
    this.brands = this.brands.filter((brand) => brand.id !== id);
  }
}
