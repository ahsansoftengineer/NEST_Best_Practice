import { Module } from '@nestjs/common';
import { LawyerService } from './lawyer.service';
import { LawyerController } from './lawyer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lawyer } from 'core/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([Lawyer])
  ],
  controllers: [LawyerController],
  providers: [LawyerService]
})
export class LawyerModule {}
