import { Module } from '@nestjs/common';
import { ProductCategoryController } from './product-category.controller';
import { ProductCategoryService } from './product-category.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductCategorySchema } from './Schema/productCategory.schema';

@Module({
  controllers: [ProductCategoryController],
  providers: [ProductCategoryService],
  imports : [
    MongooseModule.forFeature([
      { name: 'ProductCategory', schema: ProductCategorySchema },
    ]),
  ],
  exports:[ProductCategoryService]
})
export class ProductCategoryModule {}
