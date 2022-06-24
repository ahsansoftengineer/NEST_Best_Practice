import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(
    @Inject('EMPLOYEE_SERVICE') private readonly service: EmployeeService,
  ) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }
  @Post()
  create(@Body() body: CreateEmployeeDto) {
    return this.service.create(body);
  }
  @Patch()
  update(@Body() body: UpdateEmployeeDto) {
    console.log(body);
    return this.service.update(body);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
