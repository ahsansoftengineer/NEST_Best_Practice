import { Module } from '@nestjs/common';
import { AppoinmentService } from './appoinment.service';
import { AppoinmentController } from './appoinment.controller';

@Module({
  controllers: [AppoinmentController],
  providers: [AppoinmentService],
})
export class AppoinmentModule {}
