import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductCategory } from './Schema/productCategory.schema';
import { CreateCategoryDto, editCategoryDto, UpdateProductDto  } from './dto/index';
@Injectable()
export class ProductCategoryService {
  constructor(@InjectModel(ProductCategory.name) private readonly categoryModel : Model<ProductCategory>) {}

  // get all getAllCategories
  async getAllCategories() {
    const categories = await this.categoryModel.find({
      is_active: true,
      is_deleted: false,
    });
    const count = categories.length;
    return { categories, count };
  }

  // create categories if category available send message
  async createCategories(newCategory: CreateCategoryDto) {
    const existingCategory = await this.categoryModel.findOne({ name: newCategory.name });  
    if (existingCategory) {
      return {
        id: existingCategory.id,
        name: existingCategory.name,
        message: 'Category already registered'
      };
    }  
    return await this.categoryModel.create({
      name: newCategory.name,
      description: newCategory.description,
    });
  }  

  // edit category byId
  async editCategories(dto: editCategoryDto) {
    try {
      const existingCategory = await this.categoryModel.findOne({ 
        _id: dto.id,
        is_active: true,
        is_deleted: false,
      }); 
      if (!existingCategory) {
        return { message: 'Category not available' };
      }  
      return await this.categoryModel.findOne({ _id: dto.id }); 
    } catch (error) {
      if (error.name === 'CastError') {
        return { message: 'Invalid category ID' };
      }
      throw error;
    }
  }

  // update the category by id
  async updateCategoryById(dto: UpdateProductDto) {
    try {
      const updatedCategory = await this.categoryModel.findOneAndUpdate(
        {
          _id: dto.id,
          is_active: true,
          is_deleted: false,
        },
        {
          name: dto.name,
          description: dto.description,
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
  
  async deleteCategoryById(dto: editCategoryDto) {
    try {
      const deleteCategory = await this.categoryModel.findOneAndUpdate(
        {
          _id: dto.id,
        },
        {
          is_active: false,
          is_deleted: true,
        },
        { new: true }
      );
  
      if (!deleteCategory) {
        return { message: 'Category not deleted' };
      }
  
      return deleteCategory;
    } catch (error) {
      if (error.name === 'CastError') {
        return { message: 'Invalid category ID' };
      }
      throw error;
    }
  }



  
    }
  




