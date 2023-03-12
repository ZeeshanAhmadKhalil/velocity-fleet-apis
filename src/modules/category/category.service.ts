import { CreateCategoryDto } from '@dtos/create-category.dto';
import { UpdateCategoryDto } from '@dtos/update-category.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Category,
  CategoryDocument
} from '@schemas/category.schema';
import { User } from '@schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class CategoryService {

  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {
  }

  async create(createCategoryDto: CreateCategoryDto, user: User) {

    const category
      = new this.categoryModel({
        ...createCategoryDto,
        user,
      })
    return await category.save();
  }

  async findAll(user: User) {

    return await this.categoryModel
      .find({
        user,
        isDeleted: false,
      })
  }

  async findOne(id: string) {

    return await this.categoryModel
      .findOne({
        _id: id,
        isDeleted: false,
      })
  }

  async update(
    id: string,
    updateCategoryDto: UpdateCategoryDto
  ) {

    await this.categoryModel
      .findOneAndUpdate(
        {
          _id: id,
          isDeleted: false,
        },
        updateCategoryDto
      )

    return 'Category updated successfully'
  }

  async remove(id: string) {

    await this.categoryModel
      .findOneAndUpdate(
        { _id: id },
        { isDeleted: true }
      )

    return 'Category deleted successfully'
  }
}
