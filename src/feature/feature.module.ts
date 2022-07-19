import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { NewsModule } from './news/news.module';
import { CasezModule } from './casez/casez.module';

@Module({
  imports: [BookModule, NewsModule, CasezModule]
})
export class FeatureModule {}
