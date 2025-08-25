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
      {
        connectionFactory: (connection) => {
          connection.on('connected', () => {
            console.log('MongoDB is connected');
          });
          connection.on('error', (error) => {
            console.error('MongoDB connection error:', error);
          });
          connection.on('disconnected', () => {
            console.log('MongoDB is disconnected');
          });
          return connection;
        },
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
      }
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
