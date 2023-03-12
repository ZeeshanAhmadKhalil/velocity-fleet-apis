import { connectionString } from '@config/keys'
import { AuthModule } from '@modules/auth/auth.module'
import { UserModule } from '@modules/user/user.module'
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [
    AuthModule,
    UserModule,
    MongooseModule.forRoot(
      connectionString,
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
