import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrincipalService } from './principal.service';
import { CreatePrincipalDto } from './dto/create-principal.dto';
import { UpdatePrincipalDto } from './dto/update-principal.dto';

@Controller('principal')
export class PrincipalController {
  constructor(private readonly principalService: PrincipalService) {}

  @Post()
  create(@Body() createPrincipalDto: CreatePrincipalDto) {
    return this.principalService.create(createPrincipalDto);
  }

  @Get()
  findAll() {
    return this.principalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.principalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrincipalDto: UpdatePrincipalDto) {
    return this.principalService.update(+id, updatePrincipalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.principalService.remove(+id);
  }
}
