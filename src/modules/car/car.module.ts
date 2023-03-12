import { JwtStrategy } from '@authentication/strategy/jwt.strategy';
import { CategoryModule } from '@modules/category/category.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Car,
  CarSchema
} from '@schemas/car.schema';
import { CarController } from './car.controller';
import { CarService } from './car.service';

@Module({
  controllers: [CarController],
  imports: [
    CategoryModule,
    MongooseModule.forFeature([{
      name: Car.name,
      schema: CarSchema
    }]),
  ],
  providers: [
    CarService,
    JwtStrategy,
  ]
})
export class CarModule { }
