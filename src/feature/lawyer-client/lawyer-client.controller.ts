import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LawyerClientService } from './lawyer-client.service';
import { CreateLawyerClientDto } from './dto/create-lawyer-client.dto';
import { UpdateLawyerClientDto } from './dto/update-lawyer-client.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('lawyer-client')
@ApiTags('lawyer-client')
export class LawyerClientController {
  constructor(private readonly lawyerClientService: LawyerClientService) {}

  @Post()
  create(@Body() createLawyerClientDto: CreateLawyerClientDto) {
    return this.lawyerClientService.create(createLawyerClientDto);
  }

  @Get()
  findAll() {
    return this.lawyerClientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lawyerClientService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLawyerClientDto: UpdateLawyerClientDto) {
    return this.lawyerClientService.update(+id, updateLawyerClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lawyerClientService.remove(+id);
  }
}
