import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  controllers: [EmployeeController],
  providers: [
    {
      provide: 'EMPLOYEE_SERVICE',
      useClass: EmployeeService,
    },
    // EmployeeService
  ],
})
export class EmployeeModule {}
