import { IsNotEmpty, Length } from 'class-validator';

export class CreateBrandDto {
  @IsNotEmpty({ message: 'Must have categoryId' })
  @Length(24, 35)
  category_id: string;

  @IsNotEmpty({ message: 'Must have brand name' })
  @Length(3, 25)
  brand_name: string;

  @IsNotEmpty({ message: 'brand must have description' })
  @Length(3, 255)
  description: string;
}
