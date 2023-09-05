import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductCategoryService } from './product-category.service';
import { CreateCategoryDto, editCategoryDto, UpdateProductDto } from './dto/index';
import {TransformInterceptor} from '../../../common/interceptors/transform/transform.interceptor'
@UseInterceptors(TransformInterceptor)
@Controller('productCategory')
export class ProductCategoryController {
  constructor(private ProductCategoryService: ProductCategoryService) {}

  @Get('/getAllCategories')
  getAllCategories() {
    return this.ProductCategoryService.getAllCategories();
  }

  @Post('/AddProductCategory')
  @HttpCode(200)
    createProductCategory(@Body() productCategoryData: CreateCategoryDto) {
    return this.ProductCategoryService.createCategories(productCategoryData);
  }
  
  @Post('/editProductCategory')
  @HttpCode(200)
    editProductCategory(@Body() editProductCategory: editCategoryDto) {
    return this.ProductCategoryService.editCategories(editProductCategory);
  }

  @Post('/updateProductCategory')
  @HttpCode(200)
    updateProductCategory(@Body() updateProductCategory: UpdateProductDto) {
    return this.ProductCategoryService.updateCategoryById(updateProductCategory);
  }

  @Post('/deleteProductCategory')
  @HttpCode(200)
    deleteProductCategory(@Body() deleteProductCategory: editCategoryDto) {
    return this.ProductCategoryService.deleteCategoryById(deleteProductCategory);
  }


}
