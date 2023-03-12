import { connectionString } from '@config/keys'
import { AuthModule } from '@modules/auth/auth.module'
import { UserModule } from '@modules/user/user.module'
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { CategoryModule } from '@modules/category/category.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CarModule } from '@modules/car/car.module'

@Module({
  imports: [
    AuthModule,
    UserModule,
    CategoryModule,
    CarModule,
    MongooseModule.forRoot(
      connectionString,
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
