import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from 'core/entities/entities';
import { RepoService } from './service/repo.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [RepoService],
  exports: [RepoService, TypeOrmModule],
})
export class SharedModule {}
