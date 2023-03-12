import { JwtAuthGuard } from '@authentication/guard/jwt-auth.guard';
import {
    Controller,
    Get,
    Request,
    UseGuards
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller()
@ApiTags('user')
export class UserController {

    @UseGuards(JwtAuthGuard)
    @Get('user/profile')
    getProfile(@Request() req) {
        return req.user;
    }
}