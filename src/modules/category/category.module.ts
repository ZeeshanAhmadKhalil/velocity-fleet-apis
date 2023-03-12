import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Category,
  CategorySchema
} from '@schemas/category.schema';
import { JwtStrategy } from '@authentication/strategy/jwt.strategy';

@Module({
  controllers: [CategoryController],
  imports: [
    MongooseModule.forFeature([{
      name: Category.name,
      schema: CategorySchema
    }]),
  ],
  providers: [
    CategoryService,
    JwtStrategy,
  ]
})
export class CategoryModule { }
