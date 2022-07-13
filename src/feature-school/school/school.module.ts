import { Module } from '@nestjs/common';
import { SchoolService } from './school.service';
import { SchoolController } from './school.controller';
import { School } from './entities/school.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([School])],
  controllers: [SchoolController],
  providers: [SchoolService],
})
export class SchoolModule {}
