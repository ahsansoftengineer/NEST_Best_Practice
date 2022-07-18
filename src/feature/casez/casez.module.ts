import { Module } from '@nestjs/common';
import { CasezService } from './casez.service';
import { CasezController } from './casez.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Casez } from './entities/casez.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Casez])
  ],
  controllers: [CasezController],
  providers: [CasezService]
})
export class CasezModule {}
