<<<<<<< HEAD
import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, UseFilters } from '@nestjs/common';
import { LawyerCasesService } from './lawyer-cases.service';
import { CreateLawyerCaseDto, UpdateLawyerCaseDto } from './dto/create-lawyer-case.dto';
import { ApiTags } from '@nestjs/swagger';
import { Public, Roles } from 'core/decorators';
=======
import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, UseFilters, Query } from '@nestjs/common';
import { LawyerCasesService } from './lawyer-cases.service';
import { CreateLawyerCaseDto, UpdateLawyerCaseDto } from './dto/create-lawyer-case.dto';
import { ApiTags } from '@nestjs/swagger';
import { GetCurrentUserId, Public, Roles } from 'core/decorators';
>>>>>>> 9e9e597202698047f1ce48be842cec0714093ee1
import { ROLE } from 'core/enums';

@Controller('lawyer-cases')
@ApiTags('lawyerCase')
<<<<<<< HEAD
// @Roles(ROLE.LAWYER)
export class LawyerCasesController {
  constructor(private readonly lawyerCasesService: LawyerCasesService) {}

  @Post()
  @Public()
  create(@Body() createLawyerCaseDto: CreateLawyerCaseDto) {
    return this.lawyerCasesService.create(createLawyerCaseDto);
  }

=======
@Roles(ROLE.LAWYER)
export class LawyerCasesController {
  constructor(private readonly lawyerCasesService: LawyerCasesService) {}

  @Get('filter')
  findCauseList(
    @Query() {courtId, cityId, nexthearing}) {
      return this.lawyerCasesService.causelist(courtId,cityId,nexthearing)
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
 
>>>>>>> 9e9e597202698047f1ce48be842cec0714093ee1
  @Get()
  findAll() {
    return this.lawyerCasesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lawyerCasesService.findOne(+id);
  }
<<<<<<< HEAD

=======
>>>>>>> 9e9e597202698047f1ce48be842cec0714093ee1
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLawyerCaseDto: UpdateLawyerCaseDto) {
    return this.lawyerCasesService.updateSimple(+id, updateLawyerCaseDto);
  }

<<<<<<< HEAD
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
=======
  @Delete('case/:id')
  deleteMember(@GetCurrentUserId() userId: number, @Param('id') id: number) {
    console.log({ userId });
    return this.lawyerCasesService.deleteLawyerCase(userId, id);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.lawyerCasesService.remove(+id);
  // }
>>>>>>> 9e9e597202698047f1ce48be842cec0714093ee1

}
