import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { NewsModule } from './news/news.module';
import { CasezModule } from './casez/casez.module';
import { CourtModule } from './court/court.module';
import { SpecializationModule } from './specialization/specialization.module';
import { CityModule } from './city/city.module';
import { LawyerModule } from './lawyer/lawyer.module';
import { TaskModule } from './task/task.module';
import { AppoinmentModule } from './appoinment/appoinment.module';
import { LawyerClientModule } from './lawyer-client/lawyer-client.module';
import { LawyerTeamModule } from './lawyer-team/lawyer-team.module';

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
    AppoinmentModule,
    LawyerClientModule,
    LawyerTeamModule,
  ],
})
export class FeatureModule {}
