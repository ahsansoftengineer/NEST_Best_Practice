import { Module } from '@nestjs/common';
import { PlayService } from './play.service';
import { PlayController } from './play.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lawyer, User } from 'core/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Lawyer])
  ],
  controllers: [PlayController],
  providers: [PlayService]
})
export class PlayModule {}
