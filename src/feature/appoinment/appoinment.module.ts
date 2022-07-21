import { Module } from '@nestjs/common';
import { AppoinmentService } from './appoinment.service';
import { AppoinmentController } from './appoinment.controller';
import { Appoinment } from 'core/entities/appoinment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Appoinment])
  ],
  controllers: [AppoinmentController],
  providers: [AppoinmentService]
})
export class AppoinmentModule {}
