import { Module } from '@nestjs/common';
import { BrandsController } from './brands.controller';
import { BrandsService } from './brands.service';

import { MongooseModule } from '@nestjs/mongoose';
import { brandCategorySchema } from './Schema/brandCategory.schema'
import { ProductCategoryModule } from '../product-category/product-category.module';

@Module({
  controllers: [BrandsController],
  providers: [BrandsService],

  imports : [
    MongooseModule.forFeature([
      { name: 'BrandCategory', schema: brandCategorySchema },
    ]),
    ProductCategoryModule,
  ]
})

export class BrandsModule {}
