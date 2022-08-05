import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from 'core/entities/entities';
import { RepoService } from './service/repo.service';
import { SendgridService } from './service/sandgrid.service';
 
@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature(entities),
  ],
  providers: [RepoService, SendgridService],
  exports: [RepoService, TypeOrmModule, SendgridService],
})
export class SharedModule {}
