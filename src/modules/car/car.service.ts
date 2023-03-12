import { CreateCarDto } from '@dtos/create-car.dto';
import { UpdateCarDto } from '@dtos/update-car.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Car,
  CarDocument
} from '@schemas/car.schema';
import { User } from '@schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class CarService {

  constructor(
    @InjectModel(Car.name) private carModel: Model<CarDocument>,
  ) {
  }

  async create(
    createCarDto: CreateCarDto,
    user: User,
    category: any,
  ) {

    const car = new this.carModel({
      ...createCarDto,
      user,
      category,
    })

    return await car.save()
  }

  async findAll(user: User) {

    return await this.carModel
      .find({
        user,
        isDeleted: false,
      })
  }

  async findOne(id: string) {

    return await this.carModel
      .findOne({
        _id: id,
        isDeleted: false,
      })
  }

  async update(id: string, updateCarDto: UpdateCarDto) {

    await this.carModel
      .findOneAndUpdate(
        {
          _id: id,
          isDeleted: false,
        },
        updateCarDto,
      )

    return 'Car updated successfully'
  }

  async remove(id: string) {

    await this.carModel
      .findOneAndUpdate(
        { _id: id },
        { isDeleted: true }
      )

    return 'Category deleted successfully'
  }
}
