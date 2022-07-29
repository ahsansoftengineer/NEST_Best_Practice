import { Module } from '@nestjs/common';
import { PlayService } from './play.service';
import { PlayController } from './play.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lawyer, User } from 'core/entities';

@Module({
  controllers: [PlayController],
  providers: [PlayService],
})
export class PlayModule {}
