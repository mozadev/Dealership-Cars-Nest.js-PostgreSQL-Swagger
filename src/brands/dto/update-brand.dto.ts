// import { PartialType } from '@nestjs/mapped-types';
// import { CreateBrandDto } from './create-brand.dto';

import { IsString, MinLength } from 'class-validator';

// partial type is used to make all the properties in the CreateBrandDto optional
// export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
// This will make more sense when CreattebrandDto will have more properties

export class UpdateBrandDto {
  @IsString()
  @MinLength(1)
  name: string;
}
