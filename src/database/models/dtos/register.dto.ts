import { ApiProperty } from '@nestjs/swagger';
import {
    IsEmail,
    IsNotEmpty,
    MinLength
} from 'class-validator';

export class RegisterDto {

    @ApiProperty()
    @IsNotEmpty()
    fullName: string;

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @MinLength(6, { message: 'Password must be at least 6 characters long' })
    password: string;

}