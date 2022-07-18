import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { NewsModule } from './news/news.module';

@Module({
  imports: [BookModule, NewsModule]
})
export class FeatureModule {}
