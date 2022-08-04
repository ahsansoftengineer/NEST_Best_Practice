import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, UseFilters, Query } from '@nestjs/common';
import { LawyerCasesService } from './lawyer-cases.service';
import { CreateLawyerCaseDto, UpdateLawyerCaseDto } from './dto/create-lawyer-case.dto';
import { ApiTags } from '@nestjs/swagger';
import { GetCurrentUserId, Public, Roles } from 'core/decorators';
import { ROLE } from 'core/enums';
@Controller('lawyer-cases')
@ApiTags('lawyerCase')
@Roles(ROLE.LAWYER)
export class LawyerCasesController {
  constructor(private readonly lawyerCasesService: LawyerCasesService) {}

  @Get('filter')
  findCauseList(
    @Query() {courtId, cityId, nexthearing},
    @GetCurrentUserId() userId: number) {
      return this.lawyerCasesService.causelist(courtId,cityId,nexthearing,userId)
  }
  @Post()
  create(@Body() createLawyerCaseDto: CreateLawyerCaseDto,
         @GetCurrentUserId() userId: number) {
          createLawyerCaseDto.lawyerId = userId;
    return this.lawyerCasesService.create(createLawyerCaseDto);
  }
  @Get('case')
  getLawyerClients(@GetCurrentUserId() userId: number) {
    console.log({ userId });
    return this.lawyerCasesService.getLawyerCase(userId);
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
  @Delete('case/:id')
  deleteMember(@GetCurrentUserId() userId: number, @Param('id') id: number) {
    console.log({ userId });
    return this.lawyerCasesService.deleteLawyerCase(userId, id);
  }
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.lawyerCasesService.remove(+id);
  // }
}