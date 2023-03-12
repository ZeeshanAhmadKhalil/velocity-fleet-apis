import { ApiProperty } from '@nestjs/swagger';
import {
    IsEmail,
    IsNotEmpty
} from 'class-validator';

export class RegisterDto {

    @ApiProperty()
    @IsNotEmpty()
    fullName: string;

    @ApiProperty()
    @IsEmail()
    email: string;

}