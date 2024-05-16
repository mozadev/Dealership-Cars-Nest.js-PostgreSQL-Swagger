import { IsString } from 'class-validator';

export class CreateCarDto {
  @IsString({ message: 'It Must be a string called brand' })
  readonly brand: string;

  @IsString({ message: 'It Must be a string called model' })
  readonly model: string;
}

// It could be a interface but we are using a class to use the readonly property and validate the data
