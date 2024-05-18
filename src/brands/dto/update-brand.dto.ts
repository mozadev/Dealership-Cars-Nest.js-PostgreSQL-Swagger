import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';

// partial type is used to make all the properties in the CreateBrandDto optional
export class UpdateBrandDto extends PartialType(CreateBrandDto) {}

// export class UpdateBrandDto {}
