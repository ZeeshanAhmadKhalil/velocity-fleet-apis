import { LocalStrategy } from '@authentication/strategy/local.strategy';
import { jwtSecret } from '@config/keys';
import { UserModule } from '@modules/user/user.module';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtSecret,
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
  ],
  controllers: [AuthController],
  exports: [AuthService],
})

export class AuthModule { }
