import { LocalAuthGuard } from '@authentication/guard/local-auth.guard';
import { LoginDto } from '@dtos/login.dto';
import { RegisterDto } from '@dtos/register.dto';
import { UserService } from '@modules/user/user.service';
import {
    BadRequestException,
    Body,
    Controller,
    Post,
    Request,
    UseGuards
} from '@nestjs/common';
import {
    ApiBody, ApiTags
} from '@nestjs/swagger';
import { AuthService } from './auth.service';

@Controller()
@ApiTags('auth')
export class AuthController {

    constructor(
        private authService: AuthService,
        private userService: UserService,
    ) { }

    @Post('auth/register')
    async register(@Body() registerDto: RegisterDto) {

        let user = await this.userService.findByEmail(registerDto.email)

        if (user)
            throw new BadRequestException('email already exists')

        let userDto = await this.userService.register(registerDto)

        return {
            access_token: this.authService.getAccessToken(userDto),
            userDto,
        }
    }

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    @ApiBody({ type: LoginDto })
    async login(@Request() req) {

        return this.authService.login(req.user);
    }
}