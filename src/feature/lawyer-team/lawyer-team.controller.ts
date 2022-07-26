import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LawyerTeamService } from './lawyer-team.service';
import { CreateLawyerTeamDto, UpdateLawyerTeamDto } from './dto/lawyer-team.dto';

@Controller('lawyer-team')
export class LawyerTeamController {
  constructor(private readonly lawyerTeamService: LawyerTeamService) {}

  @Post()
  create(@Body() createLawyerTeamDto: CreateLawyerTeamDto) {
    return this.lawyerTeamService.create(createLawyerTeamDto);
  }

  @Get()
  findAll() {
    return this.lawyerTeamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lawyerTeamService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLawyerTeamDto: UpdateLawyerTeamDto) {
    return this.lawyerTeamService.update(+id, updateLawyerTeamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lawyerTeamService.remove(+id);
  }
}
