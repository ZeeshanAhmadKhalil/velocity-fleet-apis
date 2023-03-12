import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '@modules/auth/auth.service';
import { LoginDto } from '@dtos/login.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(private authService: AuthService) {
        super({
            usernameField: 'email'
        })
    }

    async validate(email: string, password: string): Promise<any> {

        let loginDto: LoginDto = {
            email,
            password,
        }

        const user = await this.authService.validateUser(loginDto);
        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}