import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString({ message: 'It Must be a string called brand' })
  @IsOptional()
  readonly brand?: string;

  @IsString({ message: 'It Must be a string called model' })
  @IsOptional()
  // @MinLength(3)
  readonly model?: string;
}

// It could be a interface but we are using a class to use the readonly property and validate the data
