import { JwtAuthGuard } from '@authentication/guard/jwt-auth.guard'
import { CreateCarDto } from '@dtos/create-car.dto'
import { UpdateCarDto } from '@dtos/update-car.dto'
import { CategoryService } from '@modules/category/category.service'
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards
} from '@nestjs/common'
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger'
import { CarService } from './car.service'

@ApiBearerAuth()
@Controller('car')
@ApiTags('car')
export class CarController {
  constructor(
    private readonly carService: CarService,
    private readonly categoryService: CategoryService
  ) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createCarDto: CreateCarDto, @Request() req) {

    const category = await this.categoryService.findOne(
      createCarDto.categoryId
    )

    return this.carService.create(
      createCarDto,
      req.user,
      category,
    )
  }

  @UseGuards(JwtAuthGuard)
  @Get(':categoryId')
  findAll(
    @Param('categoryId') categoryId: string,
    @Request() req
  ) {

    return this.carService.findAll(req.user, categoryId)
  }

  @UseGuards(JwtAuthGuard)
  @Get('car-by-id/:id')
  findOne(@Param('id') id: string) {
    return this.carService.findOne(id)
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiBody({ type: CreateCarDto })
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carService.update(id, updateCarDto)
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carService.remove(id)
  }

}
