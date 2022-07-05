import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReportzService } from './reportz.service';
import { CreateReportzDto } from './dto/create-reportz.dto';
import { UpdateReportzDto } from './dto/update-reportz.dto';

@Controller('reportz')
export class ReportzController {
  constructor(private readonly reportzService: ReportzService) {}

  @Post()
  create(@Body() createReportzDto: CreateReportzDto) {
    return this.reportzService.create(createReportzDto);
  }

  @Get()
  findAll() {
    return this.reportzService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reportzService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReportzDto: UpdateReportzDto) {
    return this.reportzService.update(+id, updateReportzDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reportzService.remove(+id);
  }
}
