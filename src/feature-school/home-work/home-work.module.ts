import { Module } from '@nestjs/common';
import { HomeWorkService } from './home-work.service';
import { HomeWorkController } from './home-work.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeWork } from './entities/home-work.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([HomeWork]),
  ],
  controllers: [HomeWorkController],
  providers: [HomeWorkService]
})
export class HomeWorkModule {}
