import { IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsString({ message: 'It Must be a string called brand' })
  readonly brand: string;

  @IsString({ message: 'It Must be a string called model' })
  // @MinLength(3)
  readonly model: string;
}

// It could be a interface but we are using a class to use the readonly property and validate the data
// Dto is a class that is used to validate the data that comes from the body of the request
//and the parameters of the request in the controller
// It is a good practice to use the same interface in the service and the controller
// Useful transport data of controller to service
// is differetn of interface because it is a class and it has a validation
