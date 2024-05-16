export class CreateCarDto {
  readonly brand: string;

  readonly model: string;
}

// It could be a interface but we are using a class to use the readonly property and validate the data
