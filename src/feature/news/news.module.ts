import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { News } from 'core/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([News])
  ],
  controllers: [NewsController],
  providers: [NewsService]
})
export class NewsModule {}
