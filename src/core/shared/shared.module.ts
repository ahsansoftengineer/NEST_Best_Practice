import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from 'core/entities/entities';
import { RepoService } from './service/repo.service';

@Module({
  imports: [
    TypeOrmModule.forFeature(entities),
  ],
  providers: [RepoService]
})
export class SharedModule {}
