import { IsNotEmpty, Length } from 'class-validator';

export class editCategoryDto {
  @IsNotEmpty({ message: 'Category Id must be valid' })
  @Length(24, 35)
  id: string;
}
