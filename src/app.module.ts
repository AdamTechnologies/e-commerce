import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { ProductCategorySchema } from './modules/userModule/product-category/Schema/productCategory.schema';
import { ProductCategoryModule } from './modules/userModule/product-category/product-category.module';
import { Connection } from 'mongoose';
import { BrandsModule } from './modules/userModule/brands/brands.module';
import { ProductsModule } from './modules/userModule/products/products.module';
import { ProductsController } from './modules/userModule/products/products.controller';
// import { ProductController } from './product/product.controller';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://devadamtech:vxn5ZxhCxhBJg9JP@owp.6kopdxc.mongodb.net/?retryWrites=true&w=majority'),
    ProductCategoryModule,
    BrandsModule,
    ProductsModule,
  ],
  controllers: [AppController, ProductsController, ProductsController],
  providers: [AppService],
})
export class AppModule {
  // constructor(private readonly connection: Connection){
  //   console.log('Connection status', connection)
  // }
}
