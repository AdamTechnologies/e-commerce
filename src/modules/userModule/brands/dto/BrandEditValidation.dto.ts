import { IsNotEmpty, Length } from 'class-validator';

export class EditBrandDto {
  @IsNotEmpty({ message: 'Must have categoryId' })
  @Length(24, 35)
  id: string;
}