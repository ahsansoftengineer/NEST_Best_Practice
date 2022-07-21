import { Module } from '@nestjs/common';
import { LawyerService } from './lawyer.service';
import { LawyerController } from './lawyer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City, Lawyer, Specialization, User } from 'core/entities';

@Module({
  imports: [TypeOrmModule.forFeature([
    Lawyer, User, City, Specialization
  ])],
  controllers: [LawyerController],
  providers: [LawyerService],
})
export class LawyerModule {}
