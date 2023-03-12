import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateCarDto {

    @ApiProperty()
    @IsNotEmpty()
    color: string;

    @ApiProperty()
    @IsNotEmpty()
    model: string;

    @ApiProperty()
    @IsNotEmpty()
    make: string;

    @ApiProperty()
    @IsNotEmpty()
    registrationNo: string;

    @ApiProperty()
    @IsNotEmpty()
    topSpeed: string;

    @ApiProperty()
    @IsNotEmpty()
    categoryId: string;

}
