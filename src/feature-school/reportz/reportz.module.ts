import { Module } from '@nestjs/common';
import { ReportzService } from './reportz.service';
import { ReportzController } from './reportz.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reportz } from './entities/reportz.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Reportz]),
  ],
  controllers: [ReportzController],
  providers: [ReportzService]
})
export class ReportzModule {}
