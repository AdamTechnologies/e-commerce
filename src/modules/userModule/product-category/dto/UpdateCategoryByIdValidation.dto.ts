import { IsNotEmpty, Length } from 'class-validator';

export class UpdateProductDto {
    @IsNotEmpty({ message: 'Category Id must be valid' })
    @Length(24, 35)
    id: string;

  @IsNotEmpty({ message: 'Must have category name' })
  @Length(3, 25)
  name: string;

  @IsNotEmpty({ message: 'Category must have description' })
  @Length(3, 255)
  description: string;
}
