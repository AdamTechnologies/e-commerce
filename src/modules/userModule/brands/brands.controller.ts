import {   
    Body,
    Controller,
    Get,
    HttpCode,
    Post,
    UseInterceptors,
    UsePipes,
    ValidationPipe, } from '@nestjs/common';
    import { BrandsService } from './brands.service'
    import { CreateBrandDto, EditBrandDto } from './dto/index';
    import {TransformInterceptor} from '../../../common/interceptors/transform/transform.interceptor'

    @UseInterceptors(TransformInterceptor)
    @Controller('brandCategory')

    export class BrandsController {
        constructor(private BrandsService: BrandsService) {}

        @Get('/allBrandCategory')
        @HttpCode(200)
        getAllCategories() {
        return this.BrandsService.getAllBrands();
        }

        @Post('/AddBrandCategory')
        @HttpCode(200)
        createProductCategory(@Body() BrandsServiceData : CreateBrandDto) {
        return this.BrandsService.createBrandCategories(BrandsServiceData);
        }

        @Post('/editBrandCategory')
        @HttpCode(200)
        editBrandCategory(@Body() BrandsServiceData : EditBrandDto) {
        return this.BrandsService.editBrandCategories(BrandsServiceData);
        }

        @Post('/updateBrandCategory')
        @HttpCode(200)
        updateProductCategory(@Body() BrandsServiceData : EditBrandDto) {
        return this.BrandsService.updateCategoryById(BrandsServiceData);
        }

        @Post('/deleteBrandCategory')
        @HttpCode(200)
          deleteProductCategory(@Body() delBrandCategory : EditBrandDto) {
          return this.BrandsService.deleteBrandById(delBrandCategory);
        }

    }