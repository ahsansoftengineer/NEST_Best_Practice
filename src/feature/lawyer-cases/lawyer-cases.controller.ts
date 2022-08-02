import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, UseFilters } from '@nestjs/common';
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

  @Get(':courtid/:cityid/:date')
  @Public()
  // @UseFilters(NotFoundException)
  async findCauseList(@Param('courtid') courtId: number, @Param('cityid')cityId:number, @Param('date')nexthearing:string) {
    try {
      return await this.lawyerCasesService.causelist(courtId,cityId,nexthearing)
    } catch (err) {
      throw new NotFoundException();
    }
  }

}
