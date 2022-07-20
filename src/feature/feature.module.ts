import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { NewsModule } from './news/news.module';
import { CasezModule } from './casez/casez.module';
import { CourtModule } from './court/court.module';
import { SpecializationModule } from './specialization/specialization.module';
import { CityModule } from './city/city.module';

@Module({
  imports: [BookModule, NewsModule, CasezModule, CourtModule, SpecializationModule, CityModule]
})
export class FeatureModule {}
