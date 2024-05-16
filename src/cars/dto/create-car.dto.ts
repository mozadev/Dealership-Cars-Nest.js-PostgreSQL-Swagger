import { IsString } from 'class-validator';

export class CreateCarDto {
  @IsString()
  readonly brand: string;

  @IsString()
  readonly model: string;
}

// It could be a interface but we are using a class to use the readonly property and validate the data
