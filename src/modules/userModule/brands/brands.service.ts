import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BrandCategory } from './Schema/brandCategory.schema';
import { ProductCategory } from '../product-category/Schema/productCategory.schema';
import { ProductCategoryService } from '../product-category/product-category.service';

@Injectable()
export class BrandsService {
  constructor(
    @InjectModel(BrandCategory.name) private readonly brandCategoryModel: Model<BrandCategory>,
    private productCategoryservice:ProductCategoryService
  ) {}

  async getAllBrands() {
    const categories = await this.brandCategoryModel.find({
      is_active: true,
      is_deleted: false,
    });
    const count = categories.length;
    return { categories, count };
  }

  async createBrandCategories(newCategory) {
  console.log("newCategory", newCategory)
    const existingCategory = await this.brandCategoryModel.findOne({ brand_name: newCategory.brand_name });
    if (existingCategory) {
      return {
        id: existingCategory.id,
        brand_name: existingCategory.brand_name,
        message: 'Brand already registered',
      };
    }
    return await this.brandCategoryModel.create({
      category_id: newCategory.category_id,
      brand_name: newCategory.brand_name,
      description: newCategory.description,
      logo: newCategory.logo,
    });
  }

  async editBrandCategories(newCategory) {

    try {        
      const productCategory = await this.productCategoryservice.getAllCategories()
      const brandCategory = await this.brandCategoryModel.findOne({ _id: newCategory.id });
      return {productCategory, brandCategory};
    } catch (error) {
      console.error('Error editing brand categories:', error);
      throw error;
    }
  }

  
  async updateCategoryById(newCategory) {
    console.log('newCategory', newCategory)
    try {
      const updatedCategory = await this.brandCategoryModel.findOneAndUpdate(
        {
          _id: newCategory.id,
          // is_active: true,
          // is_deleted: false,
        },
        {
          category_id : newCategory.category_id,
          brand_name: newCategory.brand_name,
          description: newCategory.description,
          available: newCategory.available,
          createdBy: newCategory.createdBy,
          is_active: newCategory.is_active,
          is_deleted: newCategory.is_deleted,
        },
        { new: true }
      );
  
      if (!updatedCategory) {
        return { message: 'Category not Updated or its deleted' };
      }
  
      return updatedCategory;
    } catch (error) {
      if (error.name === 'CastError') {
        return { message: 'Invalid category ID' };
      }
      throw error;
    }
  }
  
  async deleteBrandById(newCategory) {

    try {        
      const deleteCategory = await this.brandCategoryModel.findOneAndUpdate(
        {
          _id: newCategory.id,
        },
        {
          is_active: false,
          is_deleted: true,
        },
        { new: true }
      );

      return {deleteCategory};
    } catch (error) {
      console.error('Error deleting brand categories:', error);
      throw error;
    }
  }
  
}
