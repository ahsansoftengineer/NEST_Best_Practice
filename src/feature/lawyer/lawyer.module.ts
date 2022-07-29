import { Module } from '@nestjs/common';
import { LawyerService } from './lawyer.service';
import { LawyerController } from './lawyer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City, Lawyer, Specialization, User } from 'core/entities';

@Module({
  controllers: [LawyerController],
  providers: [LawyerService],
})
export class LawyerModule {}
