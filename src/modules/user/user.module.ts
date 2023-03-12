import { JwtStrategy } from '@authentication/strategy/jwt.strategy';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  User,
  UserSchema
} from 'src/database/models/schemas/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  imports: [
    MongooseModule.forFeature([{
      name: User.name,
      schema: UserSchema
    }]),
  ],
  providers: [
    UserService,
    JwtStrategy
  ],
  exports: [
    UserService,
  ],
})
export class UserModule { }
