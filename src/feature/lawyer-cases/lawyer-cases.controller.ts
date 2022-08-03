import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, UseFilters, Query } from '@nestjs/common';
import { LawyerCasesService } from './lawyer-cases.service';
import { CreateLawyerCaseDto, UpdateLawyerCaseDto } from './dto/create-lawyer-case.dto';
import { ApiTags } from '@nestjs/swagger';
import { Public, Roles } from 'core/decorators';
import { ROLE } from 'core/enums';

@Controller('lawyer-cases')
@ApiTags('lawyerCase')
// @Roles(ROLE.LAWYER)
export class LawyerCasesController {
  constructor(private readonly lawyerCasesService: LawyerCasesService) {}

  @Get('filter')
  @Public()
  // @UseFilters(NotFoundException)
  findCauseList(
    @Query() {courtId, cityId, nexthearing}) {
      return this.lawyerCasesService.causelist(courtId,cityId,nexthearing)
  }

  @Post()
  @Public()
  create(@Body() createLawyerCaseDto: CreateLawyerCaseDto) {
    return this.lawyerCasesService.create(createLawyerCaseDto);
  }

  @Get()
  findAll() {
    return this.lawyerCasesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lawyerCasesService.findOne(+id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLawyerCaseDto: UpdateLawyerCaseDto) {
    return this.lawyerCasesService.updateSimple(+id, updateLawyerCaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lawyerCasesService.remove(+id);
  }

}
