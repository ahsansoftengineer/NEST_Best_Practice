import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { NewsModule } from './news/news.module';
import { CasezModule } from './casez/casez.module';
import { CourtModule } from './court/court.module';
import { SpecializationModule } from './specialization/specialization.module';
import { CityModule } from './city/city.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlphaModel, BetaModel } from 'core/entities';
import { LawyerModule } from './lawyer/lawyer.module';
import { TaskModule } from './task/task.module';
import { AppoinmentModule } from './appoinment/appoinment.module';

@Module({
  imports: [
    BookModule,
    NewsModule,
    CasezModule,
    CourtModule,
    SpecializationModule,
    CityModule,
    LawyerModule,
    TaskModule,
    AppoinmentModule
  ],
})
export class FeatureModule {}
