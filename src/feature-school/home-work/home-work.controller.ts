import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HomeWorkService } from './home-work.service';
import { CreateHomeWorkDto } from './dto/create-home-work.dto';
import { UpdateHomeWorkDto } from './dto/update-home-work.dto';

@Controller('home-work')
export class HomeWorkController {
  constructor(private readonly homeWorkService: HomeWorkService) {}

  @Post()
  create(@Body() createHomeWorkDto: CreateHomeWorkDto) {
    return this.homeWorkService.create(createHomeWorkDto);
  }

  @Get()
  findAll() {
    return this.homeWorkService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.homeWorkService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHomeWorkDto: UpdateHomeWorkDto) {
    return this.homeWorkService.update(+id, updateHomeWorkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.homeWorkService.remove(+id);
  }
}
