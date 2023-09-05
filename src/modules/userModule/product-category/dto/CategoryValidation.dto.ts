import { IsNotEmpty, Length } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty({ message: 'Must have category name' })
  @Length(3, 25)
  name: string;

  @IsNotEmpty({ message: 'Category must have description' })
  @Length(3, 255)
  description: string;
}
