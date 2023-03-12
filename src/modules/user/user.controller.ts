import { JwtAuthGuard } from '@authentication/guard/jwt-auth.guard';
import {
    Controller,
    Get,
    Request,
    UseGuards
} from '@nestjs/common';

@Controller()
export class UserController {

    @UseGuards(JwtAuthGuard)
    @Get('user/profile')
    getProfile(@Request() req) {
        return req.user;
    }
}